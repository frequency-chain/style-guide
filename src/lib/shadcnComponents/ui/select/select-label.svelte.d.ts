import { SvelteComponent } from 'svelte';
declare const __propDef: {
  props: {
    asChild?: boolean | undefined;
    el?: HTMLDivElement | undefined;
  } & import('bits-ui/dist/internal').HTMLDivAttributes & {
      isRequired: boolean;
    };
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {
    default: {};
  };
  exports?: {} | undefined;
  bindings?: string | undefined;
};
export type SelectLabelProps = typeof __propDef.props;
export type SelectLabelEvents = typeof __propDef.events;
export type SelectLabelSlots = typeof __propDef.slots;
export default class SelectLabel extends SvelteComponent<SelectLabelProps, SelectLabelEvents, SelectLabelSlots> {}
export {};
