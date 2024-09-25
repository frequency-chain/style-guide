(function (exports) {
    'use strict';

    function noop() { }
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function create_slot(definition, ctx, $$scope, fn) {
        if (definition) {
            const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
            return definition[0](slot_ctx);
        }
    }
    function get_slot_context(definition, ctx, $$scope, fn) {
        return definition[1] && fn
            ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
            : $$scope.ctx;
    }
    function get_slot_changes(definition, $$scope, dirty, fn) {
        if (definition[2] && fn) {
            const lets = definition[2](fn(dirty));
            if ($$scope.dirty === undefined) {
                return lets;
            }
            if (typeof lets === 'object') {
                const merged = [];
                const len = Math.max($$scope.dirty.length, lets.length);
                for (let i = 0; i < len; i += 1) {
                    merged[i] = $$scope.dirty[i] | lets[i];
                }
                return merged;
            }
            return $$scope.dirty | lets;
        }
        return $$scope.dirty;
    }
    function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
        if (slot_changes) {
            const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
            slot.p(slot_context, slot_changes);
        }
    }
    function get_all_dirty_from_scope($$scope) {
        if ($$scope.ctx.length > 32) {
            const dirty = [];
            const length = $$scope.ctx.length / 32;
            for (let i = 0; i < length; i++) {
                dirty[i] = -1;
            }
            return dirty;
        }
        return -1;
    }
    function exclude_internal_props(props) {
        const result = {};
        for (const k in props)
            if (k[0] !== '$')
                result[k] = props[k];
        return result;
    }
    function compute_rest_props(props, keys) {
        const rest = {};
        keys = new Set(keys);
        for (const k in props)
            if (!keys.has(k) && k[0] !== '$')
                rest[k] = props[k];
        return rest;
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function prevent_default(fn) {
        return function (event) {
            event.preventDefault();
            // @ts-ignore
            return fn.call(this, event);
        };
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    /**
     * List of attributes that should always be set through the attr method,
     * because updating them through the property setter doesn't work reliably.
     * In the example of `width`/`height`, the problem is that the setter only
     * accepts numeric values, but the attribute can also be set to a string like `50%`.
     * If this list becomes too big, rethink this approach.
     */
    const always_set_through_set_attribute = ['width', 'height'];
    function set_attributes(node, attributes) {
        // @ts-ignore
        const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
        for (const key in attributes) {
            if (attributes[key] == null) {
                node.removeAttribute(key);
            }
            else if (key === 'style') {
                node.style.cssText = attributes[key];
            }
            else if (key === '__value') {
                node.value = node[key] = attributes[key];
            }
            else if (descriptors[key] && descriptors[key].set && always_set_through_set_attribute.indexOf(key) === -1) {
                node[key] = attributes[key];
            }
            else {
                attr(node, key, attributes[key]);
            }
        }
    }
    function set_custom_element_data_map(node, data_map) {
        Object.keys(data_map).forEach((key) => {
            set_custom_element_data(node, key, data_map[key]);
        });
    }
    function set_custom_element_data(node, prop, value) {
        if (prop in node) {
            node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
        }
        else {
            attr(node, prop, value);
        }
    }
    function set_dynamic_element_data(tag) {
        return (/-/.test(tag)) ? set_custom_element_data_map : set_attributes;
    }
    function children(element) {
        return Array.from(element.childNodes);
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    let render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = /* @__PURE__ */ Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        // Do not reenter flush while dirty components are updated, as this can
        // result in an infinite loop. Instead, let the inner flush handle it.
        // Reentrancy is ok afterwards for bindings etc.
        if (flushidx !== 0) {
            return;
        }
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            try {
                while (flushidx < dirty_components.length) {
                    const component = dirty_components[flushidx];
                    flushidx++;
                    set_current_component(component);
                    update(component.$$);
                }
            }
            catch (e) {
                // reset dirty state to not end up in a deadlocked state and then rethrow
                dirty_components.length = 0;
                flushidx = 0;
                throw e;
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    /**
     * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
     */
    function flush_render_callbacks(fns) {
        const filtered = [];
        const targets = [];
        render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
        targets.forEach((c) => c());
        render_callbacks = filtered;
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
        else if (callback) {
            callback();
        }
    }

    function get_spread_update(levels, updates) {
        const update = {};
        const to_null_out = {};
        const accounted_for = { $$scope: 1 };
        let i = levels.length;
        while (i--) {
            const o = levels[i];
            const n = updates[i];
            if (n) {
                for (const key in o) {
                    if (!(key in n))
                        to_null_out[key] = 1;
                }
                for (const key in n) {
                    if (!accounted_for[key]) {
                        update[key] = n[key];
                        accounted_for[key] = 1;
                    }
                }
                levels[i] = n;
            }
            else {
                for (const key in o) {
                    accounted_for[key] = 1;
                }
            }
        }
        for (const key in to_null_out) {
            if (!(key in update))
                update[key] = undefined;
        }
        return update;
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
                // if the component was destroyed immediately
                // it will update the `$$.on_destroy` reference to `null`.
                // the destructured on_destroy may still reference to the old array
                if (component.$$.on_destroy) {
                    component.$$.on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            flush_render_callbacks($$.after_update);
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: [],
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            if (!is_function(callback)) {
                return noop;
            }
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    /* src/lib/typography/Typography.svelte generated by Svelte v3.59.2 */

    function create_dynamic_element(ctx) {
    	let svelte_element;
    	let svelte_element_class_value;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[5].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

    	let svelte_element_levels = [
    		/*$$restProps*/ ctx[2],
    		{
    			class: svelte_element_class_value = `${/*isBold*/ ctx[1]} ${/*$$restProps*/ ctx[2].class ?? ''}`
    		}
    	];

    	let svelte_element_data = {};

    	for (let i = 0; i < svelte_element_levels.length; i += 1) {
    		svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
    	}

    	return {
    		c() {
    			svelte_element = element(/*tag*/ ctx[0]);
    			if (default_slot) default_slot.c();
    			set_dynamic_element_data(/*tag*/ ctx[0])(svelte_element, svelte_element_data);
    		},
    		m(target, anchor) {
    			insert(target, svelte_element, anchor);

    			if (default_slot) {
    				default_slot.m(svelte_element, null);
    			}

    			current = true;
    		},
    		p(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 16)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[4],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[4])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[4], dirty, null),
    						null
    					);
    				}
    			}

    			set_dynamic_element_data(/*tag*/ ctx[0])(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [
    				dirty & /*$$restProps*/ 4 && /*$$restProps*/ ctx[2],
    				(!current || dirty & /*isBold, $$restProps*/ 6 && svelte_element_class_value !== (svelte_element_class_value = `${/*isBold*/ ctx[1]} ${/*$$restProps*/ ctx[2].class ?? ''}`)) && { class: svelte_element_class_value }
    			]));
    		},
    		i(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(svelte_element);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};
    }

    function create_fragment$1(ctx) {
    	let previous_tag = /*tag*/ ctx[0];
    	let svelte_element_anchor;
    	let current;
    	let svelte_element = /*tag*/ ctx[0] && create_dynamic_element(ctx);

    	return {
    		c() {
    			if (svelte_element) svelte_element.c();
    			svelte_element_anchor = empty();
    		},
    		m(target, anchor) {
    			if (svelte_element) svelte_element.m(target, anchor);
    			insert(target, svelte_element_anchor, anchor);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			if (/*tag*/ ctx[0]) {
    				if (!previous_tag) {
    					svelte_element = create_dynamic_element(ctx);
    					previous_tag = /*tag*/ ctx[0];
    					svelte_element.c();
    					svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
    				} else if (safe_not_equal(previous_tag, /*tag*/ ctx[0])) {
    					svelte_element.d(1);
    					svelte_element = create_dynamic_element(ctx);
    					previous_tag = /*tag*/ ctx[0];
    					svelte_element.c();
    					svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
    				} else {
    					svelte_element.p(ctx, dirty);
    				}
    			} else if (previous_tag) {
    				svelte_element.d(1);
    				svelte_element = null;
    				previous_tag = /*tag*/ ctx[0];
    			}
    		},
    		i(local) {
    			if (current) return;
    			transition_in(svelte_element);
    			current = true;
    		},
    		o(local) {
    			transition_out(svelte_element);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(svelte_element_anchor);
    			if (svelte_element) svelte_element.d(detaching);
    		}
    	};
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let isBold;
    	const omit_props_names = ["tag","bold"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	let { tag = 'div' } = $$props;
    	let { bold = false } = $$props;

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('tag' in $$new_props) $$invalidate(0, tag = $$new_props.tag);
    		if ('bold' in $$new_props) $$invalidate(3, bold = $$new_props.bold);
    		if ('$$scope' in $$new_props) $$invalidate(4, $$scope = $$new_props.$$scope);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*bold*/ 8) {
    			$$invalidate(1, isBold = bold ? 'font-bold	' : '');
    		}
    	};

    	return [tag, isBold, $$restProps, bold, $$scope, slots];
    }

    class Typography extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { tag: 0, bold: 3 });
    	}
    }

    /* src/lib/atoms/Button.svelte generated by Svelte v3.59.2 */

    function create_default_slot(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[9].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

    	return {
    		c() {
    			if (default_slot) default_slot.c();
    		},
    		m(target, anchor) {
    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			current = true;
    		},
    		p(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[10],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[10])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[10], dirty, null),
    						null
    					);
    				}
    			}
    		},
    		i(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d(detaching) {
    			if (default_slot) default_slot.d(detaching);
    		}
    	};
    }

    function create_fragment(ctx) {
    	let button;
    	let typography;
    	let button_class_value;
    	let current;
    	let mounted;
    	let dispose;

    	typography = new Typography({
    			props: {
    				bold: true,
    				class: "flex items-center justify-center gap-2",
    				$$slots: { default: [create_default_slot] },
    				$$scope: { ctx }
    			}
    		});

    	let button_levels = [
    		/*$$restProps*/ ctx[4],
    		{
    			class: button_class_value = `rounded-full border p-2.5 text-center text-white transition-all
    ${/*btnStylesClass*/ ctx[3]} ${/*btnSizeClass*/ ctx[2]} ${/*$$restProps*/ ctx[4].class ?? ''}`
    		},
    		{ disabled: /*disabled*/ ctx[1] }
    	];

    	let button_data = {};

    	for (let i = 0; i < button_levels.length; i += 1) {
    		button_data = assign(button_data, button_levels[i]);
    	}

    	return {
    		c() {
    			button = element("button");
    			create_component(typography.$$.fragment);
    			set_attributes(button, button_data);
    		},
    		m(target, anchor) {
    			insert(target, button, anchor);
    			mount_component(typography, button, null);
    			if (button.autofocus) button.focus();
    			current = true;

    			if (!mounted) {
    				dispose = listen(button, "click", prevent_default(function () {
    					if (is_function(/*onClick*/ ctx[0])) /*onClick*/ ctx[0].apply(this, arguments);
    				}));

    				mounted = true;
    			}
    		},
    		p(new_ctx, [dirty]) {
    			ctx = new_ctx;
    			const typography_changes = {};

    			if (dirty & /*$$scope*/ 1024) {
    				typography_changes.$$scope = { dirty, ctx };
    			}

    			typography.$set(typography_changes);

    			set_attributes(button, button_data = get_spread_update(button_levels, [
    				dirty & /*$$restProps*/ 16 && /*$$restProps*/ ctx[4],
    				(!current || dirty & /*btnStylesClass, btnSizeClass, $$restProps*/ 28 && button_class_value !== (button_class_value = `rounded-full border p-2.5 text-center text-white transition-all
    ${/*btnStylesClass*/ ctx[3]} ${/*btnSizeClass*/ ctx[2]} ${/*$$restProps*/ ctx[4].class ?? ''}`)) && { class: button_class_value },
    				(!current || dirty & /*disabled*/ 2) && { disabled: /*disabled*/ ctx[1] }
    			]));
    		},
    		i(local) {
    			if (current) return;
    			transition_in(typography.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(typography.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(button);
    			destroy_component(typography);
    			mounted = false;
    			dispose();
    		}
    	};
    }

    function instance($$self, $$props, $$invalidate) {
    	let typeClass;
    	let disabledClass;
    	let btnStylesClass;
    	let btnSizeClass;
    	const omit_props_names = ["onClick","type","size","disabled"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;

    	let { onClick = () => {
    		
    	} } = $$props;

    	let { type = 'primary' } = $$props;
    	let { size = 'normal' } = $$props;
    	let { disabled = false } = $$props;

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('onClick' in $$new_props) $$invalidate(0, onClick = $$new_props.onClick);
    		if ('type' in $$new_props) $$invalidate(5, type = $$new_props.type);
    		if ('size' in $$new_props) $$invalidate(6, size = $$new_props.size);
    		if ('disabled' in $$new_props) $$invalidate(1, disabled = $$new_props.disabled);
    		if ('$$scope' in $$new_props) $$invalidate(10, $$scope = $$new_props.$$scope);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*type*/ 32) {
    			// Define button type classes
    			$$invalidate(7, typeClass = type === 'primary'
    			? 'bg-secondary border-secondary hover:border-white hover:bg-transparent'
    			: 'bg-transparent border-white hover:border-primary hover:text-primary');
    		}

    		if ($$self.$$.dirty & /*disabled*/ 2) {
    			// Define disabled classes
    			$$invalidate(8, disabledClass = disabled
    			? 'bg-gray3 border-gray3 cursor-default pointer-events-none'
    			: '');
    		}

    		if ($$self.$$.dirty & /*disabled, disabledClass, typeClass*/ 386) {
    			// Define final brn style classes
    			$$invalidate(3, btnStylesClass = disabled ? disabledClass : typeClass);
    		}

    		if ($$self.$$.dirty & /*size*/ 64) {
    			// Define button size classes
    			$$invalidate(2, btnSizeClass = ({
    				xs: 'w-[115px]',
    				sm: 'w-[197px]',
    				md: 'w-[339px]',
    				lg: 'w-[388px]',
    				normal: 'w-[263px]'
    			})[size] || 'w-[263px]');
    		}
    	};

    	return [
    		onClick,
    		disabled,
    		btnSizeClass,
    		btnStylesClass,
    		$$restProps,
    		type,
    		size,
    		typeClass,
    		disabledClass,
    		slots,
    		$$scope
    	];
    }

    class Button extends SvelteComponent {
    	constructor(options) {
    		super();

    		init(this, options, instance, create_fragment, safe_not_equal, {
    			onClick: 0,
    			type: 5,
    			size: 6,
    			disabled: 1
    		});
    	}
    }

    exports.Button = Button;
    exports.Input = Typography;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
