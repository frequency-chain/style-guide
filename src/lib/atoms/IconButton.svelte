<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../utils/utils';

  interface Props extends HTMLAttributes<HTMLAnchorElement> {
    label?: string;
    href?: string;
    isRound?: boolean;
    type?: 'light' | 'dark';
    children?: import('svelte').Snippet;
  }

  let { label = '', href = '', isRound = false, type = 'light', children, ...rest }: Props = $props();

  let iconBgColor = {
    light: 'bg-black',
    dark: 'bg-white',
  }[type];

  let iconFgColor = {
    light: 'text-white',
    dark: 'text-black',
  }[type];
</script>

<a
  {...rest}
  aria-label={label}
  class={cn(
    'h-f32 w-f32 hover:bg-primary flex items-center justify-center p-1 transition-colors duration-[0.3s]',
    isRound ? 'rounded-full' : 'rounded-sm',
    iconBgColor,
    rest.class
  )}
  {href}
  target="_blank"
>
  <div class="h-auto w-full {iconFgColor}">
    {@render children?.()}
  </div>
</a>
