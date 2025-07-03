<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Root, Trigger, Value, Content, Item, Label } from '../shadcnComponents/ui/select';

  interface Props extends HTMLAttributes<HTMLSelectElement> {
    label: string;
    description?: string | undefined;
    placeholder: string | undefined;
    isRequired?: boolean;
    error?: string | undefined;
    options: { optionLabel: string; value: unknown }[];
    value?: unknown;
  }

  let {
    label,
    description = undefined,
    placeholder,
    isRequired = false,
    error = undefined,
    options,
    value,
    ...rest
  }: Props = $props();
</script>

<Root {...rest} bind:value>
  <Label {isRequired}>{label}</Label>
  {#if description}
    <span class="form-item-description">{description}</span>
  {/if}
  <Trigger {error}>
    <Value {placeholder} />
  </Trigger>
  <Content class="border-gray3 border">
    {#each options as option (option.value)}
      <Item value={option.value}>{option.optionLabel}</Item>
    {/each}
  </Content>
  {#if error}
    <span class="form-error">{error}</span>
  {/if}
</Root>
