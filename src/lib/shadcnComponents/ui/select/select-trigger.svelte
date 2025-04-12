<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils';
  import { Error, Chevron } from '../../../assets/index';

  export let error: string | undefined;

  type $$Props = SelectPrimitive.TriggerProps & { error: string | undefined };
  type $$Events = SelectPrimitive.TriggerEvents;

  let className: $$Props['class'] = undefined;
  export { className as class };
</script>

<div class="gap-f12 flex items-center">
  <SelectPrimitive.Trigger
    class={cn(
      'border-input ring-offset-background focus-visible:ring-ring aria-[invalid]:border-destructive [&>span]:data-placeholder:text-muted-foreground sm flex h-10 w-full max-w-[388px] items-center justify-between rounded-md border bg-white px-3 py-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      error ? 'border-error border-2' : 'border-gray3 border',
      className
    )}
    {...$$restProps}
    let:builder
    on:click
    on:keydown
  >
    <slot {builder} />
    <Chevron class="h-4 w-4" />
  </SelectPrimitive.Trigger>
  {#if error}
    <Error />
  {/if}
</div>
