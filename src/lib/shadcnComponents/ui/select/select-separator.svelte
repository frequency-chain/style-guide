<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils';
  import type { HTMLAttributes } from 'svelte/elements';

  type $$Props = SelectPrimitive.SeparatorProps;

  interface Props extends HTMLAttributes<HTMLElement> {
    class?: $$Props['class'];
  }

  let { class: className = undefined, ...rest }: Props = $props();
</script>

<SelectPrimitive.Separator class={cn('bg-muted -mx-1 my-1 h-px', className)} {...rest} />
