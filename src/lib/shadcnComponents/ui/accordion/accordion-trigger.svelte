<script lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import { Chevron } from '../../../design-system/assets';
  import { cn } from '../../../utils/utils';

  type $$Props = AccordionPrimitive.TriggerProps;
  type $$Events = AccordionPrimitive.TriggerEvents;

  interface Props extends $$Props {
    intent?: 'light' | 'dark';
    level?: AccordionPrimitive.HeaderProps['level'];
    children?: import('svelte').Snippet;
  }

  let { intent = 'dark', level = 3, children, ...rest }: Props = $props();
</script>

<AccordionPrimitive.Header {level} class="flex">
  <AccordionPrimitive.Trigger
    {...rest}
    class={cn(
      'mdText flex flex-1 cursor-pointer items-center justify-between py-4 font-bold transition-all [&[data-state=open]>svg]:rotate-360',
      rest.class
    )}
    on:click
  >
    {@render children?.()}
    <Chevron
      class={cn(
        'h-5 w-5  rotate-270  p-1 transition-transform duration-200',
        intent === 'light' ? 'text-white' : 'text-black'
      )}
    />
  </AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
