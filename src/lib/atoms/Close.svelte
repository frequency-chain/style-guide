<script lang="ts">
  import { Close } from '../shadcnComponents/ui/dialog';
  interface Props {
    children?: import('svelte').Snippet;
    [key: string]: any;
  }

  let { children, ...rest }: Props = $props();
</script>

<Close {...rest}>
  {@render children?.()}
</Close>
