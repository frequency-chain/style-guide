<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';

  type $$Props = DialogPrimitive.PortalProps;

  interface Props extends $$Props {
    children?: import('svelte').Snippet;
  }

  let { children, ...rest }: Props = $props();
</script>

<DialogPrimitive.Portal {...rest}>
  {@render children?.()}
</DialogPrimitive.Portal>
