<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import { Exit } from '../../../assets/index';
  import * as Dialog from './index.js';
  import { cn, flyAndScale } from '../../../utils/utils';

  type $$Props = DialogPrimitive.ContentProps;

  interface Props {
    class?: $$Props['class'];
    transition?: $$Props['transition'];
    transitionConfig?: $$Props['transitionConfig'];
    children?: import('svelte').Snippet;
    [key: string]: any;
  }

  let {
    class: className = undefined,
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
    {transition}
    {transitionConfig}
    class={cn(
      'normal gap-f24 p-f48 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white shadow-lg md:w-full',
      className
    )}
    {...rest}
  >
    {@render children?.()}
    <DialogPrimitive.Close class="right-f24 top-f24 absolute disabled:pointer-events-none">
      <Exit class="text-primary h-4 w-4" />
      <span class="sr-only">Close</span>
    </DialogPrimitive.Close>
  </DialogPrimitive.Content>
</Dialog.Portal>
