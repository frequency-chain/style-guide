<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../../utils/utils.js';

  type $$Props = HTMLAttributes<HTMLDivElement>;

  let className: $$Props['class'] = undefined;
  export { className as class };
</script>

<div class={cn('space-y-f4 flex flex-col', className)} {...$$restProps}>
  <slot />
</div>
