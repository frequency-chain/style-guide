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
    rows,
    ...rest
  }: Props = $props();
</script>

<FormElement {label} {isRequired} {description} {error}>
  <textarea
    {...rest}
    class={cn(
      'border-input aria-[invalid]:border-destructive [&>span]:data-placeholder:text-muted-foreground smText flex w-full max-w-[388px] items-center justify-between rounded-md border bg-white px-3 py-2 leading-[25px] focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      !rows && 'h-10 min-h-10',
      error ? 'border-error border-2' : 'border-gray3 border',
      rest.class
    )}
    {rows}
    {placeholder}
    bind:value
  ></textarea>
</FormElement>
