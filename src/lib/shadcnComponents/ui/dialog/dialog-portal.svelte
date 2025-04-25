<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLElement> {
    children?: import('svelte').Snippet;
  }

  let { children, ...rest }: Props = $props();
</script>

<DialogPrimitive.Portal {...rest}>
  {@render children?.()}
</DialogPrimitive.Portal>
