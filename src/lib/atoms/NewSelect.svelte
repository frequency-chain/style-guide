<script lang="ts">
  import { Select } from 'bits-ui';
  import { CaretDoubleDown, CaretDoubleUp, CaretUpDown, Palette } from 'phosphor-svelte';
  import Check from '../design-system/assets/icons/Check.svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLSelectElement> {
    label: string;
    description?: string | undefined;
    placeholder: string | undefined;
    isRequired?: boolean;
    error?: string | undefined;
    options: { label: string; value: string; disabled?: boolean }[];
    value?: { getValue: () => string; setValue: (v: string) => void };
  }

  let {
    label,
    description = undefined,
    placeholder,
    isRequired = false,
    error = undefined,
    options,
    value = $bindable(''),
    ...rest
  }: Props = $props();

  const selectedLabel = $derived(value ? options.find((theme) => theme.value === value)?.label : label);
</script>

<Select.Root type="single" items={options} bind:value={getValue, setValue}>
  <Select.Trigger
    class="h-input rounded-9px border-border-input bg-background data-placeholder:text-foreground-alt/50 inline-flex w-[296px] touch-none items-center border px-[11px] text-sm transition-colors select-none"
    aria-label={label}
  >
    <Palette class="text-muted-foreground mr-[9px] size-6" />
    {selectedLabel}
    <CaretUpDown class="text-muted-foreground ml-auto size-6" />
  </Select.Trigger>
  <Select.Portal>
    <Select.Content
      class="focus-override border-muted bg-background shadow-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 h-96 max-h-[var(--bits-select-content-available-height)] w-[var(--bits-select-anchor-width)] min-w-[var(--bits-select-anchor-width)] rounded-xl border px-1 py-3 outline-hidden select-none data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
      sideOffset={10}
    >
      <Select.ScrollUpButton class="flex w-full items-center justify-center">
        <CaretDoubleUp class="size-3" />
      </Select.ScrollUpButton>
      <Select.Viewport class="p-1">
        {#each options as theme, i (i + theme.value)}
          <Select.Item
            class="rounded-button data-highlighted:bg-muted flex h-10 w-full items-center py-3 pr-1.5 pl-5 text-sm capitalize outline-hidden select-none data-disabled:opacity-50"
            value={theme.value}
            label={theme.label}
            disabled={theme.disabled}
          >
            {#snippet children({ selected })}
              {theme.label}
              {#if selected}
                <div class="ml-auto">
                  <Check aria-label="check" />
                </div>
              {/if}
            {/snippet}
          </Select.Item>
        {/each}
      </Select.Viewport>
      <Select.ScrollDownButton class="flex w-full items-center justify-center">
        <CaretDoubleDown class="size-3" />
      </Select.ScrollDownButton>
    </Select.Content>
  </Select.Portal>
</Select.Root>
