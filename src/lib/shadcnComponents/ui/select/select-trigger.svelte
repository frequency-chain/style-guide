<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils';
  import { Error, Chevron } from '../../../design-system/assets/index';

  type $$Props = SelectPrimitive.TriggerProps;
  type $$Events = SelectPrimitive.TriggerEvents;

  interface Props extends $$Props {
    error: string | undefined;
    class?: $$Props['class'];
    children?: import('svelte').Snippet;
  }

  let { error, children, ...rest }: Props = $props();
</script>

<div class="gap-f12 flex items-center">
  <SelectPrimitive.Trigger
    {...rest}
    class={cn(
      'aria-expanded:border-primary ring-offset-background focus-visible:ring-ring aria-[invalid]:border-destructive [&>span]:data-placeholder:text-muted-foreground smText flex h-10 w-full max-w-[388px] items-center justify-between rounded-md border-2 bg-white px-3 py-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 aria-expanded:border-2 [&>span]:line-clamp-1',
      error ? 'border-error' : 'border-gray3 border',
      rest.class
    )}
  >
    {@render children?.()}
    <Chevron class="h-4 w-4" />
  </SelectPrimitive.Trigger>
  {#if error}
    <Error />
  {/if}
</div>
