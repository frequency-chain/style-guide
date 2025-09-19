<script lang="ts">
  import { Dialog as DialogPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import * as Dialog from './index.js';
  import { cn } from '../../../utils/utils.js';
  import Exit from '../../../design-system/assets/icons/Exit.svelte';
  let {
    ref = $bindable(null),
    class: className,
    portalProps,
    children,
    showCloseButton = true,
    ...restProps
  }: WithoutChildrenOrChild<DialogPrimitive.ContentProps> & {
    portalProps?: DialogPrimitive.PortalProps;
    children: Snippet;
    showCloseButton?: boolean;
  } = $props();
</script>

<Dialog.Portal {...portalProps}>
  <Dialog.Overlay />
  <DialogPrimitive.Content
    {...restProps}
    bind:ref
    data-slot="dialog-content"
    class={cn(
      'normal gap-f24 sm:p-f16 md:p-f48 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg border bg-white shadow-lg duration-200 sm:w-[90vw] md:w-[75vw]',
      className
    )}
  >
    {@render children?.()}
    {#if showCloseButton}
      <DialogPrimitive.Close class="sm:right-f8 sm:top-f8 md:right-f24 md:top-f24 absolute end-4">
        <Exit class="h-4 w-4 text-black" />
        <span class="sr-only">Close</span>
      </DialogPrimitive.Close>
    {/if}
  </DialogPrimitive.Content>
</Dialog.Portal>
