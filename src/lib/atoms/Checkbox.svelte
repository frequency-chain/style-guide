<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Checkbox } from '../shadcnComponents/ui/checkbox';
  import { Label } from 'bits-ui';
  import { cn } from '../utils/utils';
  import type { Intent } from '../utils/types';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    label: string;
    intent?: Intent;
    checked?: boolean;
    id?: string;
  }

  let { label, intent = 'dark', checked = $bindable(false), id: curId, ...rest }: Props = $props();

  const labelToId = (label: string): string => {
    return label
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-_]/g, '');
  };
  let id = $state(curId || labelToId(label));
</script>

<div {...rest} class={cn('gap-f8 flex items-center', rest.class)}>
  <Checkbox bind:checked {intent} {id} />
  <Label.Root for={id} class={cn('smText', intent === 'dark' ? 'text-black' : 'text-white')}>{label}</Label.Root>
</div>
