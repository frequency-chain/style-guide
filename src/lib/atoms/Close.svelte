<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Close } from '../shadcnComponents/ui/dialog';

  interface Props extends HTMLAttributes<HTMLElement> {
    children?: import('svelte').Snippet;
  }

  let { children, ...rest }: Props = $props();
</script>

<Close {...rest}>
  {@render children?.()}
</Close>
