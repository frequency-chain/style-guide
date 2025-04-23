<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils.js';
  import type { SvelteComponent } from 'svelte';

  type $$Props = DialogPrimitive.TitleProps;

  interface Props extends $$Props {
    class?: $$Props['class'];
    children?: import('svelte').Snippet;
  }

  let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<DialogPrimitive.Title class={cn('lg text-primary font-bold', className)} {...rest}>
  {@render children?.()}
</DialogPrimitive.Title>
