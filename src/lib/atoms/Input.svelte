<script lang="ts">
  import { cn } from '../utils/utils';
  import FormElement from './FormElement.svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLInputElement> {
    label?: string;
    isRequired?: boolean;
    description?: string;
    value?: string;
    placeholder?: string;
    error: string | undefined;
    disabled: boolean | undefined;
  }

  let {
    label = '',
    isRequired = false,
    description = '',
    value = $bindable(''),
    placeholder = 'Enter some text...',
    error,
    disabled,
    ...rest
  }: Props = $props();
</script>

<FormElement {label} {isRequired} {description} {error}>
  <input
    {...rest}
    class={cn(
      'border-input aria-[invalid]:border-destructive [&>span]:data-placeholder:text-muted-foreground smText flex h-10 w-full max-w-[388px] items-center justify-between rounded-md border bg-white px-3 py-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      error ? 'border-error border-2' : 'border-gray3 border',
      rest.class
    )}
    type="text"
    {placeholder}
    {disabled}
    bind:value
  />
</FormElement>
