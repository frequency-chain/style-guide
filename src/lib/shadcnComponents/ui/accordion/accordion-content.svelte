<script lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import { slide } from 'svelte/transition';
  import { cn } from '../../../utils/utils';
  import type { SvelteComponent } from 'svelte';

  type $$Props = AccordionPrimitive.ContentProps;

  interface Props extends $$Props {
    class?: $$Props['class'];
    transition?: $$Props['transition'];
    transitionConfig?: $$Props['transitionConfig'];
    children?: import('svelte').Snippet;
  }

  let {
    class: className = undefined,
    transition = slide,
    transitionConfig = {
      duration: 200,
    },
    children,
    ...rest
  }: Props = $props();
</script>

<AccordionPrimitive.Content
  class={cn('sm overflow-hidden transition-all', className)}
  {transition}
  {transitionConfig}
  {...rest}
>
  <div class="text-normal pt-0 pb-4">
    {@render children?.()}
  </div>
</AccordionPrimitive.Content>
