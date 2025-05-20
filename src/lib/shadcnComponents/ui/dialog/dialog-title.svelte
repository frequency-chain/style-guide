<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils.js';

  type $$Props = DialogPrimitive.TitleProps;

  interface Props extends $$Props {
    class?: $$Props['class'];
    children?: import('svelte').Snippet;
  }

  let { children, ...rest }: Props = $props();
</script>

<DialogPrimitive.Title {...rest} class={cn('lgText font-bold text-black', rest.class)}>
  {@render children?.()}
</DialogPrimitive.Title>
