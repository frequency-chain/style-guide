<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import Typography from '../typography/Typography.svelte';
  import { cn } from '../utils/utils';
  import type { Snippet } from 'svelte';
  import { cva, type VariantProps } from 'class-variance-authority';

  const button = cva(
    ['cursor-pointer', 'rounded-full', 'text-center', 'transition-all', 'text-nowrap', 'hover:shadow-md'],
    {
      variants: {
        intent: {
          'filled-dark': ['bg-black', 'hover:bg-primary', 'text-white', 'hover:text-white'],
          'filled-light': ['bg-white', 'hover:bg-purple75', 'text-black', 'hover:text-black'],
          'outlined-dark': ['bg-transparent', 'border-2', 'text-black', 'border-black'],
          'outlined-light': ['text-white', 'border-2', 'border-white', 'hover:text-purple75', 'hover:border-purple75'],
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
        defaultVariants: {
          intent: 'filled-dark',
          size: 'normal',
          disabled: false,
        },
      },
    }
  );

  interface Props extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, VariantProps<typeof button> {
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

  // Define classes
  // let activeClass = $derived(
  //   cn(
  //     active
  //       ? variant === 'primary'
  //         ? 'bg-primary text-white hover:text-white hover:bg-primary shadow-md'
  //         : 'border-primary text-primary'
  //       : ''
  //   )
  // );
</script>

{#snippet content()}
  <Typography bold={true} class="gap-f8 text-normal flex items-center justify-center font-sans"
    >{@render children?.()}</Typography
  >
{/snippet}

{#if href.length > 0}
  <a {...rest} {href} {target} class={disabled ? 'pointer-events-none block' : 'pointer-events-auto block'}>
    <button {...rest} class={cn('px-f24 py-f8', button({ intent, size, disabled, active }))} {disabled}>
      {@render content()}
    </button>
  </a>
{:else}
  <button {...rest} class={cn('p-f8', cn(button({ intent, size, disabled, active })))} {disabled}>
    {@render content()}
  </button>
{/if}
