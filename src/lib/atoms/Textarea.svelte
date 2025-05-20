<script lang="ts">
  import { cn } from '../utils/utils';
  import FormElement from './FormElement.svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    isRequired?: boolean;
    description?: string;
    value?: string;
    placeholder?: string;
    rows?: number;
    error: string | undefined;
  }

  let {
    label = '',
    isRequired = false,
    description = '',
    value = $bindable(''),
    placeholder = 'Enter some text...',
    error,
    rows = 5,
    ...rest
  }: Props = $props();
</script>

<FormElement {label} {isRequired} {description} {error}>
  <textarea
    {...rest}
    class={cn(
      'aria-[invalid]:border-destructive [&>span]:data-placeholder:text-muted-foreground smText focus-visible:outline-primary flex w-full max-w-[388px] items-center justify-between rounded-md border-1 bg-white px-3 py-2 leading-[25px] disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      !rows && 'h-10 min-h-10',
      error ? 'border-error' : 'border-gray3',
      rest.class
    )}
    {rows}
    {placeholder}
    bind:value
  ></textarea>
</FormElement>
