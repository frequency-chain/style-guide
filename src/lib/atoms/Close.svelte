<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import { Close } from '../shadcnComponents/ui/dialog';

  interface Props extends DialogPrimitive.Close {
    children?: import('svelte').Snippet;
  }

  let { children, ...rest }: Props = $props();
</script>

<Close {...rest}>
  {@render children?.()}
</Close>
