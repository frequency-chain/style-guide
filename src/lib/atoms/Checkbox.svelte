<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../utils/utils';
  import type { Intent } from '../utils/types';
  import { Checkbox, Label } from 'bits-ui';
  import Check from '../design-system/assets/icons/Check.svelte';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    label: string;
    intent?: Intent;
    checked?: boolean;
    id?: string;
    name?: string;
  };

  let { label, intent = 'dark', checked = $bindable(false), id = "", name = "checkbox", ...rest }: Props = $props();
</script>

<div {...rest} class={cn('gap-f8 flex items-center', rest.class)}>
  <Checkbox.Root
    {id}
    aria-labelledby={`${id}-label`}
    class="border-muted bg-foreground data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-background data-[state=unchecked]:hover:border-dark-40 peer inline-flex size-[25px] items-center justify-center rounded-md border transition-all duration-150 ease-in-out active:scale-[0.98]"
    {name}
    bind:checked
  >
    {#snippet children({ checked(boolean) })}
      <div class="text-background inline-flex items-center justify-center">
        {#if checked}
          <Check class="size-[15px]" weight="bold" />
        {/if}
      </div>
    {/snippet}
  </Checkbox.Root>

  <Label.Root
    id={`${id}-label`}
    for={name}
    class={cn(
      'smText peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      intent === 'dark' ? 'text-black' : 'text-white'
    )}
  >
    {label}
  </Label.Root>
</div>
