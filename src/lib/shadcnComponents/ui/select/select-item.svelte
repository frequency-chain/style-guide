<script lang="ts">
  import { Check } from '../../../design-system/assets/index';
  import { Select as SelectPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils';

  type $$Props = SelectPrimitive.ItemProps;
  type $$Events = SelectPrimitive.ItemEvents;

  interface Props extends $$Props {
    value: $$Props['value'];
    label?: $$Props['label'];
    disabled?: $$Props['disabled'];
    children?: import('svelte').Snippet;
  }

  let { value, label = undefined, disabled = undefined, children, ...rest }: Props = $props();
</script>

<SelectPrimitive.Item
  {...rest}
  {value}
  {disabled}
  {label}
  class={cn(
    'smText data-highlighted:bg-gray3 relative flex w-full cursor-pointer items-center rounded-xs py-2 pr-8 pl-2 outline-hidden transition select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:text-black',
    rest.class
  )}
  on:click
  on:keydown
  on:focusin
  on:focusout
  on:pointerleave
  on:pointermove
>
  {#if children}{@render children()}{:else}
    {label || value}
  {/if}
  <span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
    <SelectPrimitive.ItemIndicator>
      <Check class="h-4 w-4" />
    </SelectPrimitive.ItemIndicator>
  </span>
</SelectPrimitive.Item>
