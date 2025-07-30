<script lang="ts">
  import { Root } from '../shadcnComponents/ui/accordion';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<Root>
  {@render children?.()}
</Root>
