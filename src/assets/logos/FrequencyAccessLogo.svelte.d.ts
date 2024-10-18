import { SvelteComponent } from 'svelte';
declare const __propDef: {
  props: {
    [x: string]: any;
    frequencyColor?: string | undefined;
    accessColor?: string | undefined;
  };
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
  exports?: undefined;
  bindings?: undefined;
};
export type FrequencyAccessLogoProps = typeof __propDef.props;
export type FrequencyAccessLogoEvents = typeof __propDef.events;
export type FrequencyAccessLogoSlots = typeof __propDef.slots;
export default class FrequencyAccessLogo extends SvelteComponent<
  FrequencyAccessLogoProps,
  FrequencyAccessLogoEvents,
  FrequencyAccessLogoSlots
> {}
export {};
