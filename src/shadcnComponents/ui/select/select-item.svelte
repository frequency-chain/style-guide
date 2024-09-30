<script lang="ts">
  import { Check } from 'lucide-svelte';
  import { Select as SelectPrimitive } from 'bits-ui';
  import { cn } from '../../../utils';

  type $$Props = SelectPrimitive.ItemProps;
  type $$Events = SelectPrimitive.ItemEvents;

  let className: $$Props['class'] = undefined;
  export let value: $$Props['value'];
  export let label: $$Props['label'] = undefined;
  export let disabled: $$Props['disabled'] = undefined;
  export { className as class };
</script>

<SelectPrimitive.Item
  {value}
  {disabled}
  {label}
  class={cn(
    'relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-2 pr-8 text-sm outline-none transition data-[disabled]:pointer-events-none data-[highlighted]:bg-gray3 data-[highlighted]:text-black data-[disabled]:opacity-50',
    className
  )}
  {...$$restProps}
  on:click
  on:keydown
  on:focusin
  on:focusout
  on:pointerleave
  on:pointermove
>
  <slot>
    {label || value}
  </slot>
  <span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
    <SelectPrimitive.ItemIndicator>
      <Check class="h-4 w-4" />
    </SelectPrimitive.ItemIndicator>
  </span>
</SelectPrimitive.Item>
