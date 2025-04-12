<script lang="ts">
  import { cn } from '../utils/utils';
  import FormElement from './FormElement.svelte';

  export let label = '';
  export let isRequired = false;
  export let description = '';
  export let value: string = '';
  export let placeholder = 'Enter some text...';
  export let error: string | undefined;
</script>

<FormElement {label} {isRequired} {description} {error}>
  <textarea
    class={cn(
      'border-input aria-[invalid]:border-destructive [&>span]:data-placeholder:text-muted-foreground sm flex h-10 w-full max-w-[388px] items-center justify-between rounded-md border bg-white px-3 py-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      error ? 'border-error border-2' : 'border-gray3 border',
      $$restProps.class
    )}
    {placeholder}
    bind:value
  ></textarea>
</FormElement>
