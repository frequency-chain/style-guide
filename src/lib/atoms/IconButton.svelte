<script lang="ts">
  import { cn } from '$lib/utils/utils';

  export let label: string = '';
  export let href: string = '';
  export let isRound = false;
</script>

<a
  aria-label={label}
  class={cn(
    `flex h-f32 w-f32 items-center justify-center bg-black p-1 transition-colors duration-[0.3s] hover:bg-brightBlue`,
    isRound ? 'rounded-full' : 'rounded',
    $$restProps.class
  )}
  {href}
  target="_blank"
>
  <div class="h-auto w-full text-white">
    <slot />
  </div>
</a>
