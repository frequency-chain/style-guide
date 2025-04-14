<script lang="ts">
  import { Check } from '../../../assets/index';
  import { Select as SelectPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils';

  type $$Props = SelectPrimitive.ItemProps;
  type $$Events = SelectPrimitive.ItemEvents;

  let className: $$Props['class'] = undefined;
  export let value: $$Props['value'];
  export let label: $$Props['label'] = undefined;
  export let disabled: $$Props['disabled'] = undefined;
  export { className as class };
</script>

<SelectPrimitive.Item
  {value}
  {disabled}
  {label}
  class={cn(
    'sm data-highlighted:bg-gray3 relative flex w-full cursor-pointer items-center rounded-xs py-2 pr-8 pl-2 outline-hidden transition select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:text-black',
    className
  )}
  {...$$restProps}
  on:click
  on:keydown
  on:focusin
  on:focusout
  on:pointerleave
  on:pointermove
>
  <slot>
    {label || value}
  </slot>
  <span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
    <SelectPrimitive.ItemIndicator>
      <Check class="h-4 w-4" />
    </SelectPrimitive.ItemIndicator>
  </span>
</SelectPrimitive.Item>
