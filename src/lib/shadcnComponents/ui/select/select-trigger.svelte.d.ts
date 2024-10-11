import { SvelteComponent } from 'svelte';
import { Select as SelectPrimitive } from 'bits-ui';
declare const __propDef: {
  props: {
    asChild?: boolean | undefined;
    el?: HTMLButtonElement | undefined;
  } & import('svelte/elements').HTMLButtonAttributes & {
      error: string | undefined;
    };
  slots: {
    default: {
      builder: {
        readonly 'aria-activedescendant': string | undefined;
        readonly 'aria-autocomplete': 'list';
        readonly 'aria-controls': string;
        readonly 'aria-expanded': boolean;
        readonly 'aria-labelledby': string;
        readonly id: string;
        readonly role: 'combobox';
        readonly disabled: true | undefined;
        readonly type: 'button' | undefined;
      } & {
        [x: `data-melt-${string}`]: '';
      } & {
        action: (
          node: HTMLElement
        ) => import('@melt-ui/svelte/internal/types').MeltActionReturn<'input' | 'click' | 'keydown'>;
      };
    };
  };
  events: SelectPrimitive.TriggerEvents;
};
export type SelectTriggerProps = typeof __propDef.props;
export type SelectTriggerEvents = typeof __propDef.events;
export type SelectTriggerSlots = typeof __propDef.slots;
export default class SelectTrigger extends SvelteComponent<
  SelectTriggerProps,
  SelectTriggerEvents,
  SelectTriggerSlots
> {}
export {};
