<script lang="ts">
  import FormElement from './FormElement.svelte';
  import type { HTMLTextAreaElement } from 'svelte/elements';
  import { formItem } from '../styles/formItemStyles';

  interface Props extends HTMLTextAreaElement {
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
    class={formItem({
      error: !!error,
      height: rows ? 'auto' : 'sm',
      class: rest.class,
    })}
    {rows}
    {placeholder}
    bind:value
  ></textarea>
</FormElement>
