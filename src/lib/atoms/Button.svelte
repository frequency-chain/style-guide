<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import Typography from '../design-system/Typography.svelte';
  import { cn } from '../utils/utils';
  import type { Snippet } from 'svelte';
  import { cva, type VariantProps } from 'class-variance-authority';

  const button = cva(
    [
      'h-[46px]',
      'px-f24',
      'cursor-pointer',
      'rounded-full',
      'text-center',
      'transition-all',
      'text-nowrap',
      'hover:shadow-md',
    ],
    {
      variants: {
        intent: {
          'filled-dark': ['bg-black', 'hover:bg-primary', 'text-white'],
          'filled-light': ['bg-white', 'text-black'],
          'outlined-dark': ['bg-transparent', 'border-2', 'text-black', 'border-black'],
          'outlined-light': ['text-white', 'border-2', 'border-white'],
        },
        size: {
          xs: ['w-[115px]'],
          sm: ['w-[197px]'],
          normal: ['w-[263px]'],
          md: ['w-[339px]'],
          lg: ['w-[388px]'],
          auto: ['w-auto'],
          full: ['w-full'],
        },
        active: {
          true: '',
          false: '',
        },
        disabled: {
          false: null,
          true: ['bg-gray3', 'text-gray2', 'cursor-default', 'pointer-events-none'],
        },
      },
      compoundVariants: [
        {
          intent: 'filled-dark',
          active: true,
          class: ['bg-primary', 'text-white', 'hover:text-white', 'hover:bg-primary', 'shadow-md'],
        },
      ],
      defaultVariants: {
        intent: 'filled-dark',
        size: 'normal',
        disabled: false,
      },
    }
  );

  type ButtonVariants = Omit<VariantProps<typeof button>, 'defaultVariants'>;

  interface Props extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, ButtonVariants {
    href?: string;
    target?: HTMLAnchorElement['target'];
    children?: Snippet;
  }

  let {
    href = '',
    intent = 'filled-dark',
    size = 'normal',
    disabled = false,
    active = false,
    target = '',
    children,
    ...rest
  }: Props = $props();
</script>

{#snippet content()}
  <Typography bold={true} class="gap-f8 text-normal flex items-center justify-center font-sans"
    >{@render children?.()}</Typography
  >
{/snippet}

{#if href.length > 0}
  <a {...rest} {href} {target} class={disabled ? 'pointer-events-none block' : 'pointer-events-auto block'}>
    <button {...rest} class={cn(button({ intent, size, disabled, active }))} {disabled}>
      {@render content()}
    </button>
  </a>
{:else}
  <button {...rest} class={cn(button({ intent, size, disabled, active }))} {disabled}>
    {@render content()}
  </button>
{/if}
