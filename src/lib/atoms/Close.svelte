<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { Close } from '../shadcnComponents/ui/dialog';

  interface Props extends SvelteComponent {
    children?: import('svelte').Snippet;
  }

  let { children, ...rest }: Props = $props();
</script>

<Close {...rest}>
  {@render children?.()}
</Close>
