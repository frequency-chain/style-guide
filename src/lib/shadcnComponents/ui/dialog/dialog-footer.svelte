<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../../utils/utils.js';

  type $$Props = HTMLAttributes<HTMLDivElement>;

  interface Props extends $$Props {
    children?: import('svelte').Snippet;
  }

  let { children, ...rest }: Props = $props();
</script>

<div {...rest} class={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', rest.class)}>
  {@render children?.()}
</div>
