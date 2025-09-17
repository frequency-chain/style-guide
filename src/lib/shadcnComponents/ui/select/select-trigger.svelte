<script lang="ts">
  import { Select as SelectPrimitive, type WithoutChild } from 'bits-ui';
  import { Chevron, Error, LoadingIcon } from '../../../design-system/assets/index';
  import { cn } from '../../../utils/utils';
  import { formItem } from '../../../styles/formItemStyles';

  let {
    error,
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithoutChild<SelectPrimitive.TriggerProps> & {
    error: string | undefined;
  } = $props();
</script>

<div class="gap-f12 flex w-[388px] items-center">
  <SelectPrimitive.Trigger
    bind:ref
    data-slot="select-trigger"
    class={formItem({
      error: !!error,
      height: 'sm',
      class: cn(
        " data-[placeholder]:text-gray2  ring-offset-background aria-invalid:ring-destructive/20 dark:aria-invalid:ring-error/40 aria-invalid:border-error h-f40 flex w-[388px] cursor-pointer items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-left text-sm text-nowrap overflow-ellipsis whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none select-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-black",
        error
          ? 'border-error border-2'
          : 'aria-expanded:border-primary border-input focus-visible:border-ring aria-expanded:border-2',
        className
      ),
    })}
    {...restProps}
  >
    {@render children?.()}
    <Chevron class="h-4 w-4" />
  </SelectPrimitive.Trigger>
</div>
