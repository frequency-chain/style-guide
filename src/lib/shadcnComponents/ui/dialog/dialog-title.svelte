<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils.js';

  type $$Props = DialogPrimitive.TitleProps;

  let className: $$Props['class'] = undefined;
  export { className as class };
</script>

<DialogPrimitive.Title class={cn('lg text-primary font-bold', className)} {...$$restProps}>
  <slot />
</DialogPrimitive.Title>
