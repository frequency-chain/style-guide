<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import { Exit } from '../../../assets/index';
  import * as Dialog from './index.js';
  import { cn, flyAndScale } from '../../../utils/utils';

  type $$Props = DialogPrimitive.ContentProps;

  let className: $$Props['class'] = undefined;
  export let transition: $$Props['transition'] = flyAndScale;
  export let transitionConfig: $$Props['transitionConfig'] = {
    duration: 200,
  };
  export { className as class };
</script>

<Dialog.Portal>
  <Dialog.Overlay />
  <DialogPrimitive.Content
    {transition}
    {transitionConfig}
    class={cn(
      'normal fixed left-[50%] top-[50%] z-50 grid w-full max-w-[500px] translate-x-[-50%] translate-y-[-50%] gap-f24 rounded-lg bg-white p-f48 shadow-lg md:w-full',
      className
    )}
    {...$$restProps}
  >
    <slot />
    <DialogPrimitive.Close class="absolute right-f24 top-f24 disabled:pointer-events-none">
      <Exit class="h-4 w-4 text-primary" />
      <span class="sr-only">Close</span>
    </DialogPrimitive.Close>
  </DialogPrimitive.Content>
</Dialog.Portal>
