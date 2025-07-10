<script lang="ts">
  import { Select, type WithoutChildren } from 'bits-ui';

  type Props = WithoutChildren<Select.RootProps> & {
    placeholder?: string;
    items: { value: string; label: string; disabled?: boolean }[];
    contentProps?: WithoutChildren<Select.ContentProps>;
    // any other specific component props if needed
  };

  let { value = $bindable(), items, contentProps, placeholder, ...restProps }: Props = $props();

  const selectedLabel = $derived(items.find((item) => item.value === value)?.label);
</script>

<Select.Root bind:value={value as never} {...restProps}>
  <Select.Trigger>
    {selectedLabel ? selectedLabel : placeholder}
  </Select.Trigger>
  <Select.Portal>
    <Select.Content {...contentProps}>
      <Select.ScrollUpButton>up</Select.ScrollUpButton>
      <Select.Viewport>
        {#each items as { value, label, disabled } (value)}
          <Select.Item {value} {label} {disabled}>
            {#snippet children({ selected })}
              {selected ? '✅' : ''}
              {label}
            {/snippet}
          </Select.Item>
        {/each}
      </Select.Viewport>
      <Select.ScrollDownButton>down</Select.ScrollDownButton>
    </Select.Content>
  </Select.Portal>
</Select.Root>
