<script lang="ts">
  import { cn } from '../../../utils/utils';
  import { Accordion as AccordionPrimitive, type WithoutChild } from 'bits-ui';
  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithoutChild<AccordionPrimitive.ContentProps> = $props();
</script>

<AccordionPrimitive.Content
  {...restProps}
  bind:ref
  data-slot="accordion-content"
  class="normalText data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
>
  <div class={cn('normalText pt-0 pb-4', className)}>
    {@render children?.()}
  </div>
</AccordionPrimitive.Content>
