<script lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils';

  type $$Props = AccordionPrimitive.ItemProps;

  interface Props extends $$Props {
    value: $$Props['value'];
    children?: import('svelte').Snippet;
  }

  let { value, children, ...rest }: Props = $props();
</script>

<AccordionPrimitive.Item {...rest} {value} class={cn('border-gray3 border-b', rest.class)}>
  {@render children?.()}
</AccordionPrimitive.Item>
