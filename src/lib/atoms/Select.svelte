<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Root, Trigger, Value, Content, Item, Label } from '../shadcnComponents/ui/select';
  import type { SelectProps } from 'bits-ui';

  interface Props extends SelectProps<string, false>, HTMLAttributes<HTMLSelectElement> {
    label: string;
    description?: string | undefined;
    isRequired?: boolean;
    error?: string | undefined;
    isLoading?: boolean;
    options: { optionLabel: string; value: string }[];
  }

  let {
    id,
    label,
    description = undefined,
    placeholder,
    isRequired = false,
    error = undefined,
    isLoading = false,
    options,
    onSelectedChange,
    disabled,
    ...rest
  }: Props = $props();
</script>

<div class="flex flex-col">
  <Root {...rest} {onSelectedChange} {disabled}>
    <Label {isRequired}>{label}</Label>
    {#if description}
      <span class="form-item-description">{description}</span>
    {/if}
    <Trigger {error} {isLoading} {id}>
      <Value class="text-nowrap overflow-ellipsis" placeholder={placeholder || undefined} />
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
