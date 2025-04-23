<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import { fade } from 'svelte/transition';
  import { cn } from '../../../utils/utils.js';

  type $$Props = DialogPrimitive.OverlayProps;

  interface Props {
    class?: $$Props['class'];
    transition?: $$Props['transition'];
    transitionConfig?: $$Props['transitionConfig'];

    [key: string]: unknown;
  }

  let {
    class: className = undefined,
    transition = fade,
    transitionConfig = {
      duration: 150,
    },
    ...rest
  }: Props = $props();
</script>

<DialogPrimitive.Overlay
  {transition}
  {transitionConfig}
  class={cn('bg-shadow/5 fixed inset-0 z-50 backdrop-blur-xs', className)}
  {...rest}
/>
