<script lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import { Chevron } from '../../../assets';
  import { cn } from '../../../utils/utils';

  type $$Props = AccordionPrimitive.TriggerProps;
  type $$Events = AccordionPrimitive.TriggerEvents;

  interface Props {
    class?: $$Props['class'];
    level?: AccordionPrimitive.HeaderProps['level'];
    children?: import('svelte').Snippet;
    [key: string]: any;
  }

  let { class: className = undefined, level = 3, children, ...rest }: Props = $props();
</script>

<AccordionPrimitive.Header {level} class="flex">
  <AccordionPrimitive.Trigger
    class={cn(
      'text-md flex flex-1 items-center justify-between py-4 font-bold transition-all [&[data-state=open]>svg]:rotate-180',
      className
    )}
    {...rest}
    on:click
  >
    {@render children?.()}
    <Chevron class="h-5 w-5 bg-black p-1 text-white transition-transform duration-200" />
  </AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
