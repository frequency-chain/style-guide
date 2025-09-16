<script lang="ts">
  import { cn } from '../../../utils/utils';
  import type { WithElementRef } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    isRequired = false,
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & { isRequired: boolean } = $props();
</script>

<div bind:this={ref} data-slot="select-label" class={cn('form-item-label', className)} {...restProps}>
  {@render children?.()}
  {#if isRequired}
    <span class="text-error">*</span>
  {/if}
</div>
