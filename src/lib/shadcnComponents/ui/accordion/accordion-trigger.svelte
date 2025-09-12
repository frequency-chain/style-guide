<script lang="ts">
  import { Chevron } from '../../../design-system/assets';
  import type { Intent } from '../../../../lib/utils/types';
  import { cn } from '../../../../lib/utils/utils';
  import { Accordion as AccordionPrimitive, type WithoutChild } from 'bits-ui';

  type Props = WithoutChild<AccordionPrimitive.TriggerProps> & {
    intent?: Intent;
    level?: AccordionPrimitive.HeaderProps['level'];
  };

  let { ref = $bindable(null), class: className, level = 3, intent, children, ...restProps }: Props = $props();
</script>

<AccordionPrimitive.Header {level} class="flex">
  <AccordionPrimitive.Trigger
    data-slot="accordion-trigger"
    bind:ref
    class={cn(
      'focus-visible:border-ring focus-visible:ring-ring/50 mdText flex flex-1 cursor-pointer items-center justify-between gap-4 rounded-md py-4 text-left font-bold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-360',
      className
    )}
    {...restProps}
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

<!-- <script lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui-old';
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
</AccordionPrimitive.Header> -->
