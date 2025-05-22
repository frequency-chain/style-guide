<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../utils/utils';
  import { cva, type VariantProps } from 'class-variance-authority';
  import type { Snippet } from 'svelte';

  const button = cva(
    [
      'h-f32',
      'w-f32',
      'flex',
      'items-center',
      'justify-center',
      'p-1',
      'transition-colors',
      'duration-[0.3s]',
      'hover:bg-primary',
    ],
    {
      variants: {
        intent: {
          light: ['bg-cream', 'text-black', 'hover:shadow-md-gray3', 'hover:text-white'],
          dark: ['bg-black', 'text-white', 'hover:shadow-md'],
        },
        isRound: {
          true: 'rounded-full',
          false: 'rounded-sm',
        },
        defaultVariants: {
          intent: 'light',
          isRound: false,
        },
      },
    }
  );

  type ButtonVariants = Omit<VariantProps<typeof button>, 'defaultVariants'>;

  interface Props extends HTMLAttributes<HTMLAnchorElement>, ButtonVariants {
    label: string;
    href?: string;
    target?: HTMLAnchorElement['target'];
    children?: Snippet;
  }

  let { intent = 'light', isRound = false, label = '', href = '', children, ...rest }: Props = $props();
</script>

<a {...rest} aria-label={label} class={cn(button({ intent, isRound }), rest.class)} {href} target="_blank">
  {@render children?.()}
</a>
