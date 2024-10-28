<script lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import { Chevron } from '../../../../lib/assets';
  import { cn } from '../../../utils/utils';

    type $$Props = AccordionPrimitive.TriggerProps;
    type $$Events = AccordionPrimitive.TriggerEvents;

    let className: $$Props['class'] = undefined;
    export let level: AccordionPrimitive.HeaderProps['level'] = 3;
    export {className as class};
</script>

<AccordionPrimitive.Header {level} class="flex">
    <AccordionPrimitive.Trigger
            class={cn(
      'flex flex-1 items-center justify-between py-4 text-md font-bold transition-all [&[data-state=open]>svg]:rotate-180',
      className
    )}
            {...$$restProps}
            on:click
    >
        <slot/>
        <Chevron class="h-5 w-5 bg-black p-1 text-white transition-transform duration-200"/>
    </AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
