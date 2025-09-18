<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../../utils.js';
  import type { WithElementRef } from 'bits-ui';
  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  {...restProps}
  bind:this={ref}
  data-slot="dialog-header"
  class={cn('space-y-f4 flex flex-col text-center', className)}
>
  {@render children?.()}
</div>
