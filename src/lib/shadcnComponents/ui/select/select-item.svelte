<script lang="ts">
  import Check from '../../../design-system/assets/icons/Check.svelte';
  import { cn } from '../../../utils/utils';
  import { Select as SelectPrimitive, type WithoutChild } from 'bits-ui';

  let {
    ref = $bindable(null),
    class: className,
    value,
    label,
    children: childrenProp,
    ...restProps
  }: WithoutChild<SelectPrimitive.ItemProps> = $props();
</script>

<SelectPrimitive.Item
  {...restProps}
  bind:ref
  {value}
  data-slot="select-item"
  class={cn(
    "smText data-[highlighted]:bg-gray3 relative flex w-full cursor-pointer items-center gap-2 rounded-xs py-2 pr-8 pl-2 text-sm outline-hidden transition select-none data-disabled:opacity-50 data-highlighted:text-black data-[disabled]:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-black *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
    className
  )}
>
  {#snippet children({ selected, highlighted })}
    <span class="block w-full truncate">
      {#if childrenProp}
        {@render childrenProp({ selected, highlighted })}
      {:else}
        {label || value}
      {/if}
    </span>
    <span class="absolute right-2 flex size-3.5 items-center justify-center">
      {#if selected}
        <Check class="h-4 w-4" />
      {/if}
    </span>
  {/snippet}
</SelectPrimitive.Item>
