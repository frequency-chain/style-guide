<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import { fade } from 'svelte/transition';
  import { cn } from '../../../utils/utils.js';

  type $$Props = DialogPrimitive.OverlayProps;

  interface Props extends $$Props {
    transition?: $$Props['transition'];
    transitionConfig?: $$Props['transitionConfig'];
  }

  let {
    transition = fade,
    transitionConfig = {
      duration: 150,
    },
    ...rest
  }: Props = $props();
</script>

<DialogPrimitive.Overlay
  {...rest}
  {transition}
  {transitionConfig}
  class={cn('bg-shadow/5 fixed inset-0 z-50 backdrop-blur-xs', rest.class)}
/>
