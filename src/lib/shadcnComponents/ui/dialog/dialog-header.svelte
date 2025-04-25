<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../../utils/utils.js';

  interface Props extends HTMLAttributes<HTMLElement> {
    class?: HTMLAttributes<HTMLElement>['class'];
    children?: import('svelte').Snippet;
  }

  let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<div class={cn('space-y-f4 flex flex-col', className)} {...rest}>
  {@render children?.()}
</div>
