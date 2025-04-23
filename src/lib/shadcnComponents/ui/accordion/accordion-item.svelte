<script lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils';
  import type { SvelteComponent } from 'svelte';

  type $$Props = AccordionPrimitive.ItemProps;

  interface Props extends SvelteComponent {
    class?: $$Props['class'];
    value: $$Props['value'];
    children?: import('svelte').Snippet;
  }

  let { class: className = undefined, value, children, ...rest }: Props = $props();
</script>

<AccordionPrimitive.Item {value} class={cn('border-b', className)} {...rest}>
  {@render children?.()}
</AccordionPrimitive.Item>
