<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import Typography from '../design-system/Typography.svelte';
  import { cn } from '../utils/utils';
  import type { Snippet } from 'svelte';
  import { cva, type VariantProps } from 'class-variance-authority';

  const button = cva(
    ['h-[46px]', 'px-f24', 'cursor-pointer', 'rounded-full', 'text-center', 'transition-all', 'text-nowrap'],
    {
      variants: {
        intent: {
          'filled-dark': ['bg-black', 'text-white', 'hover:bg-primary'],
          'filled-light': ['bg-cream', 'text-black', 'hover:bg-purple50', 'hover:text-white'],
          'outlined-dark': [
            'bg-transparent',
            'border-2',
            'text-black',
            'border-black',
            'hover:text-primary',
            'hover:border-primary',
          ],
          'outlined-light': [
            'text-cream',
            'border-2',
            'border-cream',
            'bg-transparent',
            'hover:text-purple50',
            'hover:border-purple50',
          ],
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
  <Typography bold={true} class="gap-f8 text-normal flex items-center justify-center">{@render children?.()}</Typography
  >
{/snippet}

{#if href.length > 0}
  <a
    {...rest}
    {href}
    {target}
    class={cn(disabled ? 'pointer-events-none block' : 'pointer-events-auto block', rest.class)}
  >
    <button {...rest} class={cn(button({ intent, size, disabled, active }))} {disabled}>
      {@render content()}
    </button>
  </a>
{:else}
  <button {...rest} class={cn(button({ intent, size, disabled, active }), rest.class)} {disabled}>
    {@render content()}
  </button>
{/if}
