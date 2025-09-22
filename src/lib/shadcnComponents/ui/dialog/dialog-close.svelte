<script lang="ts">
  import { cn } from '../../../utils/utils';
  import { Dialog as DialogPrimitive } from 'bits-ui';
  let { ref = $bindable(null), ...restProps }: DialogPrimitive.CloseProps = $props();
</script>

<DialogPrimitive.Close
  {...restProps}
  bind:ref
  data-slot="dialog-close"
  class={cn(
    "ring-offset-background focus:ring-ring text-gray1 transition-text cursor-pointer rounded-xs hover:text-black focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    restProps.class
  )}
/>
