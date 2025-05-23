<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../utils/utils';
  import { cva, type VariantProps } from 'class-variance-authority';
  import type { Snippet } from 'svelte';

  const iconButton = cva(
    ['h-f32', 'w-f32', 'flex', 'items-center', 'justify-center', 'p-1', 'transition-colors', 'duration-[0.3s]'],
    {
      variants: {
        intent: {
          light: ['bg-cream', 'text-black', 'hover:text-white', 'hover:bg-purple50'],
          dark: ['bg-black', 'text-white', 'hover:bg-primary'],
        },
        isRound: {
          true: 'rounded-full',
          false: 'rounded-sm',
        },
      },
      defaultVariants: {
        intent: 'dark',
        isRound: false,
      },
    }
  );

  type IconButtonVariants = Omit<VariantProps<typeof iconButton>, 'defaultVariants'>;

  interface Props extends HTMLAttributes<HTMLAnchorElement>, IconButtonVariants {
    label: string;
    href?: string;
    target?: HTMLAnchorElement['target'];
    children?: Snippet;
  }

  let { intent = 'dark', isRound = false, label = '', href = '', children, ...rest }: Props = $props();
</script>

<a {...rest} aria-label={label} class={cn(iconButton({ intent, isRound }), rest.class)} {href} target="_blank">
  {@render children?.()}
</a>
