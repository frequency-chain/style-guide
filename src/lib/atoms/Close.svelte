<script lang="ts">
  import { Close } from '../shadcnComponents/ui/dialog';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLElement> {
    id?: string;
    children?: import('svelte').Snippet;
  }

  let { id = '', children, ...rest }: Props = $props();
</script>

<Close {id} {...rest}>
  {@render children?.()}
</Close>
