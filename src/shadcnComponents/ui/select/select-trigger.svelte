<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import Chevron from '../../../assets/Chevron.svelte';
  import Error from '../../../assets/Error.svelte';
  import { cn } from '../../../utils';

  export let error: string | undefined;

  type $$Props = SelectPrimitive.TriggerProps & { error: string | undefined };
  type $$Events = SelectPrimitive.TriggerEvents;

  let className: $$Props['class'] = undefined;
  export { className as class };

  console.log('errror', error);
</script>

<div class="flex items-center gap-3">
  <SelectPrimitive.Trigger
    class={cn(
      'flex h-10 w-full max-w-[388px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid]:border-destructive [&>span]:line-clamp-1 data-[placeholder]:[&>span]:text-muted-foreground',
      error ? 'border-2 border-error' : 'border border-gray3',
      className
    )}
    {...$$restProps}
    let:builder
    on:click
    on:keydown
  >
    <slot {builder} />
    <div class="h-4 w-4">
      <Chevron />
    </div>
  </SelectPrimitive.Trigger>
  {#if error}<Error />{/if}
</div>
