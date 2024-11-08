<script lang="ts">
  import { cn } from '../utils/utils';

  export let label: string = '';
  export let href: string = '';
  export let isRound = false;
  export let type: 'light' | 'dark' = 'light';

  let iconBgColor = {
    light: 'bg-navy',
    dark: 'bg-white',
  }[type];

  let iconFgColor = {
    light: 'text-white',
    dark: 'text-black',
  }[type];
</script>

<a
  aria-label={label}
  class={cn(
    'flex h-f32 w-f32 items-center justify-center p-1 transition-colors duration-[0.3s] hover:bg-teal',
    isRound ? 'rounded-full' : 'rounded',
    iconBgColor,
    $$restProps.class
  )}
  {href}
  target="_blank"
>
  <div class="h-auto w-full {iconFgColor}">
    <slot />
  </div>
</a>
