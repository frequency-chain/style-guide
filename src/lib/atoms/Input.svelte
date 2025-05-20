<script lang="ts">
  import FormElement from './FormElement.svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { formItem } from '../styles/formItemStyles';

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
    class={formItem({ error: !!error, height: 'sm', class: rest.class })}
    type="text"
    {placeholder}
    {disabled}
    bind:value
  />
</FormElement>
