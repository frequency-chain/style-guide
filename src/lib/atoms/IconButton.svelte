<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../utils/utils';
  import { cva, type VariantProps } from 'class-variance-authority';
  import type { Snippet } from 'svelte';

  const iconButton = cva(
    [
      'h-f32',
      'w-f32',
      'flex',
      'items-center',
      'justify-center',
      'p-1',
      'transition-colors',
      'duration-[0.3s]',
      'cursor-pointer',
    ],
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
        disabled: {
          false: null,
          true: ['bg-gray3', 'text-gray2', 'cursor-default', 'pointer-events-none'],
        },
      },
      defaultVariants: {
        intent: 'dark',
        isRound: false,
      },
    }
  );

  type IconButtonVariants = Omit<VariantProps<typeof iconButton>, 'defaultVariants'>;

  interface Props extends HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>, IconButtonVariants {
    label: string;
    href?: string;
    target?: HTMLAnchorElement['target'];
    disabled?: boolean;
    children?: Snippet;
  }

  let {
    intent = 'dark',
    isRound = false,
    label = '',
    href = '',
    target = '',
    disabled = false,
    children,
    ...rest
  }: Props = $props();
</script>

{#if href.length > 0}
  <a
    {...rest}
    {href}
    {target}
    class={cn(disabled ? 'pointer-events-none block' : 'pointer-events-auto block')}
    aria-label={label}
  >
    <button {...rest} class={cn(iconButton({ intent, disabled, isRound }), rest.class)} {disabled}>
      {@render children?.()}
    </button>
  </a>
{:else}
  <button {...rest} class={cn(iconButton({ intent, disabled, isRound }), rest.class)} {disabled} aria-label={label}>
    {@render children?.()}
  </button>
{/if}
