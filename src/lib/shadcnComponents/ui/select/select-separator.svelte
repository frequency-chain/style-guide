<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils';
  import type { SvelteComponent } from 'svelte';

  type $$Props = SelectPrimitive.SeparatorProps;

  interface Props extends SvelteComponent {
    class?: $$Props['class'];
  }

  let { class: className = undefined, ...rest }: Props = $props();
</script>

<SelectPrimitive.Separator class={cn('bg-muted -mx-1 my-1 h-px', className)} {...rest} />
