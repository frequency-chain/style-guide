<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import { scale } from 'svelte/transition';
  import { cn, flyAndScale } from '../../../utils/utils';

  type $$Props = SelectPrimitive.ContentProps;
  type $$Events = SelectPrimitive.ContentEvents;

  interface Props extends $$Props {
    ref?: unknown | null;
    sideOffset?: $$Props['sideOffset'];
    inTransition?: $$Props['inTransition'];
    inTransitionConfig?: $$Props['inTransitionConfig'];
    outTransition?: $$Props['outTransition'];
    outTransitionConfig?: $$Props['outTransitionConfig'];
    children?: import('svelte').Snippet;
  }

  let {
    ref = $bindable(null),
    sideOffset = 4,
    inTransition = flyAndScale,
    inTransitionConfig = undefined,
    outTransition = scale,
    outTransitionConfig = {
      start: 0.95,
      opacity: 0,
      duration: 50,
    },
    children,
    ...rest
  }: Props = $props();
</script>

<SelectPrimitive.Content
  {...rest}
  bind:ref
  {inTransition}
  {inTransitionConfig}
  {outTransition}
  {outTransitionConfig}
  {sideOffset}
  class={cn(
    'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white text-black shadow-md outline-hidden',
    rest.class
  )}
  on:keydown
>
  <div class="p-f4 w-full">
    {@render children?.()}
  </div>
</SelectPrimitive.Content>
