<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import { Exit } from '../../../design-system/assets/index';
  import * as Dialog from './index.js';
  import { cn, flyAndScale } from '../../../utils/utils';

  type $$Props = DialogPrimitive.ContentProps;

  interface Props extends $$Props {
    transition?: $$Props['transition'];
    transitionConfig?: $$Props['transitionConfig'];
    children?: import('svelte').Snippet;
  }

  let {
    transition = flyAndScale,
    transitionConfig = {
      duration: 200,
    },
    children,
    ...rest
  }: Props = $props();
</script>

<Dialog.Portal>
  <Dialog.Overlay />
  <DialogPrimitive.Content
    {...rest}
    {transition}
    {transitionConfig}
    class={cn(
      'normal gap-f24 p-f48 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white shadow-lg md:w-full',
      rest.class
    )}
  >
    {@render children?.()}
    <DialogPrimitive.Close class="right-f24 top-f24 absolute cursor-pointer disabled:pointer-events-none">
      <Exit class="h-4 w-4 text-black" />
      <span class="sr-only">Close</span>
    </DialogPrimitive.Close>
  </DialogPrimitive.Content>
</Dialog.Portal>
