<script lang="ts">
  import { Checkbox as CheckboxPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils.js';
  import Check from '../../../design-system/assets/icons/Check.svelte';

  interface Props extends CheckboxPrimitive.Props {
    checked: boolean;
  }

  let { checked = $bindable(false), ...rest }: Props = $props();
</script>

<CheckboxPrimitive.Root
  {...rest}
  class={cn(
    ' border-gray2 focus-visible:ring-darkPurple data-[state=checked]:bg-darkPurple data-[state=checked]:text-darkPurple peer data-[state=checked]:border-darkPurple box-content h-4 w-4 shrink-0 cursor-pointer rounded-sm border focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
    rest.class
  )}
  bind:checked
  {onclick}
>
  <div class={cn('flex h-4 w-4 items-center justify-center text-white')}>
    {#if checked}
      <Check class="h-[12px] w-[12px]" />
    {:else}
      <div class="h-3.5 w-3.5"></div>
    {/if}
  </div>
</CheckboxPrimitive.Root>
