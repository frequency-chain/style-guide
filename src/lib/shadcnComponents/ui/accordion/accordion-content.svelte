<script lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import { slide } from 'svelte/transition';
  import { cn } from '../../../utils/utils';

  type $$Props = AccordionPrimitive.ContentProps;

  interface Props extends $$Props {
    transition?: $$Props['transition'];
    transitionConfig?: $$Props['transitionConfig'];
    children?: import('svelte').Snippet;
  }

  let {
    transition = slide,
    transitionConfig = {
      duration: 200,
    },
    children,
    ...rest
  }: Props = $props();
</script>

<AccordionPrimitive.Content
  {...rest}
  class={cn('normalText overflow-hidden transition-all', rest.class)}
  {transition}
  {transitionConfig}
>
  <div class="normalText pt-0 pb-4">
    {@render children?.()}
  </div>
</AccordionPrimitive.Content>
