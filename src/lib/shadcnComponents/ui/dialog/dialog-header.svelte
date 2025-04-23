<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../../utils/utils.js';
  import type { SvelteComponent } from 'svelte';

  type $$Props = HTMLAttributes<HTMLDivElement>;

  interface Props extends SvelteComponent {
    class?: $$Props['class'];
    children?: import('svelte').Snippet;
  }

  let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<div class={cn('space-y-f4 flex flex-col', className)} {...rest}>
  {@render children?.()}
</div>
