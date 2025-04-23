<script lang="ts">
  import { cn } from '../utils/utils';

  interface Props {
    label?: string;
    href?: string;
    isRound?: boolean;
    type?: 'light' | 'dark';
    children?: import('svelte').Snippet;
    [key: string]: any;
  }

  let { label = '', href = '', isRound = false, type = 'light', children, ...rest }: Props = $props();

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
    'h-f32 w-f32 hover:bg-teal flex items-center justify-center p-1 transition-colors duration-[0.3s]',
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
