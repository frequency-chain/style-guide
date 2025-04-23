<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import type { SvelteComponent } from 'svelte';

  interface Props extends SvelteComponent {
    children?: import('svelte').Snippet;
  }

  let { children, ...rest }: Props = $props();
  type $$Props = DialogPrimitive.PortalProps;
</script>

<DialogPrimitive.Portal {...rest}>
  {@render children?.()}
</DialogPrimitive.Portal>
