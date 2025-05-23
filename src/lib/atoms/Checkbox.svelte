<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Checkbox } from '../../lib/shadcnComponents/ui/checkbox';
  import { cn } from '../utils/utils';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    label: string;
    checked?: boolean;
  }

  let { label, checked = $bindable(false), ...rest }: Props = $props();
</script>

<div {...rest} class={cn('gap-f8 flex items-center', rest.class)}>
  <Checkbox bind:checked />
  <div class="smText">{label}</div>
</div>
