<script lang="ts">
  import { Select as SelectPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
  import Chevron from '../../../design-system/assets/icons/Chevron.svelte';
  import { cn } from '../../../utils/utils';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<SelectPrimitive.ScrollDownButtonProps> = $props();
</script>

<SelectPrimitive.ScrollDownButton
  {...restProps}
  bind:ref
  data-slot="select-scroll-down-button"
  class={cn('flex cursor-default items-center justify-center py-1', className)}
>
  <Chevron class="h-4 w-4" />
</SelectPrimitive.ScrollDownButton>
