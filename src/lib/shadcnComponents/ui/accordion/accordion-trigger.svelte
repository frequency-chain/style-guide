<script lang="ts">
  import { Chevron } from '../../../design-system/assets';
  import type { Intent } from '../../../utils/types';
  import { cn } from '../../../utils/utils';
  import { Accordion as AccordionPrimitive, type WithoutChild } from 'bits-ui';

  type Props = WithoutChild<AccordionPrimitive.TriggerProps> & {
    intent?: Intent;
    level?: AccordionPrimitive.HeaderProps['level'];
  };

  let { ref = $bindable(null), class: className, level = 3, intent = 'dark', children, ...restProps }: Props = $props();
</script>

<AccordionPrimitive.Header {level} class="flex">
  <AccordionPrimitive.Trigger
    {...restProps}
    data-slot="accordion-trigger"
    bind:ref
    class={cn(
      'focus-visible:border-ring focus-visible:ring-ring/50 mdText flex flex-1 cursor-pointer items-center justify-between gap-4 rounded-md py-4 text-left font-bold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-360',
      className
    )}
  >
    {@render children?.()}
    <Chevron
      class={cn(
        'h-5 w-5 rotate-270 p-1 transition-transform duration-200',
        intent === 'light' ? 'text-white' : 'text-black'
      )}
    />
  </AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
