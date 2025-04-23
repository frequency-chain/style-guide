<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils';
  import { Error, Chevron } from '../../../assets/index';
  import type { SvelteComponent } from 'svelte';

  type $$Props = SelectPrimitive.TriggerProps & { error: string | undefined };
  type $$Events = SelectPrimitive.TriggerEvents;

  interface Props extends SvelteComponent {
    error: string | undefined;
    class?: $$Props['class'];
    children?: import('svelte').Snippet;
  }

  let { error, class: className = undefined, children, ...rest }: Props = $props();
</script>

<div class="gap-f12 flex items-center">
  <SelectPrimitive.Trigger
    class={cn(
      'border-input ring-offset-background focus-visible:ring-ring aria-[invalid]:border-destructive [&>span]:data-placeholder:text-muted-foreground sm flex h-10 w-full max-w-[388px] items-center justify-between rounded-md border bg-white px-3 py-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      error ? 'border-error border-2' : 'border-gray3 border',
      className
    )}
    {...rest}
  >
    {@render children?.()}
    <Chevron class="h-4 w-4" />
  </SelectPrimitive.Trigger>
  {#if error}
    <Error />
  {/if}
</div>
