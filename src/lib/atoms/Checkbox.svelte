<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Checkbox } from '../shadcnComponents/ui/checkbox';
  import { cn } from '../utils/utils';
  import type { Intent } from '../utils/types';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    label: string;
    intent?: Intent;
    checked?: boolean;
  }

  let { label, intent = 'dark', checked = $bindable(false), ...rest }: Props = $props();
</script>

<div {...rest} class={cn('gap-f8 flex items-center', rest.class)}>
  <Checkbox bind:checked {intent} />
  <div class={cn('smText', intent === 'dark' ? 'text-black' : 'text-white')}>{label}</div>
</div>
