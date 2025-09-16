<script lang="ts">
  import { Select as SelectPrimitive, type WithoutChild } from 'bits-ui';
  import { Chevron, Error, LoadingIcon } from '../../../design-system/assets/index';
  import { cn } from '../../../utils/utils';
  import { formItem } from '../../../styles/formItemStyles';

  let {
    error,
    isLoading,
    ref = $bindable(null),
    class: className,
    children,
    size = 'default',
    ...restProps
  }: WithoutChild<SelectPrimitive.TriggerProps> & {
    size?: 'sm' | 'default';
    error: string | undefined;
    isLoading: boolean;
  } = $props();
</script>

<div class="gap-f12 flex items-center">
  <SelectPrimitive.Trigger
    bind:ref
    data-slot="select-trigger"
    data-size={size}
    class={formItem({
      error: !!error,
      height: 'sm',
      class: cn(
        "aria-expanded:border-primary border-input data-[placeholder]:text-gray2 focus-visible:border-ring ring-offset-background aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit cursor-pointer items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-left text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none select-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-expanded:border-2 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-black",
        className
      ),
    })}
    {...restProps}
  >
    {@render children?.()}
    <Chevron class="h-4 w-4" />
  </SelectPrimitive.Trigger>
  {#if error}
    <Error />
  {:else if isLoading}
    <LoadingIcon />
  {/if}
</div>
