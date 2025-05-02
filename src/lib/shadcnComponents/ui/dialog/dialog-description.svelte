<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils.js';

  type $$Props = DialogPrimitive.DescriptionProps;

  interface Props extends $$Props {
    children?: import('svelte').Snippet;
  }

  let { children, ...rest }: Props = $props();
</script>

<DialogPrimitive.Description {...rest} class={cn('sm', rest.class)}>
  {@render children?.()}
</DialogPrimitive.Description>
