<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Root, Trigger, Value, Content, Item, Label } from '../shadcnComponents/ui/select';
  import type { OnChangeFn } from 'bits-ui/dist/internal/types';
  import type { Selected } from 'bits-ui';

  interface Props extends HTMLAttributes<HTMLSelectElement> {
    label: string;
    description?: string | undefined;
    placeholder: string | undefined;
    isRequired?: boolean;
    error?: string | undefined;
    isLoading?: boolean;
    options: { optionLabel: string; value: string }[];
    onSelectedChange: OnChangeFn<Selected<unknown> | undefined>;
  }

  let {
    label,
    description = undefined,
    placeholder,
    isRequired = false,
    error = undefined,
    isLoading = false,
    options,
    onSelectedChange,
    ...rest
  }: Props = $props();
</script>

<div>
  <Root {...rest} {onSelectedChange}>
    <Label {isRequired}>{label}</Label>
    {#if description}
      <span class="form-item-description">{description}</span>
    {/if}
    <Trigger {error} {isLoading}>
      <Value class="text-nowrap overflow-ellipsis" {placeholder} />
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
</div>
