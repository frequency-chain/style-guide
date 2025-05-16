<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../../utils/utils.js';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: import('svelte').Snippet;
  }

  let { children, ...rest }: Props = $props();
</script>

<div {...rest} class={cn('space-y-f4 flex flex-col text-center', rest.class)}>
  {@render children?.()}
</div>
