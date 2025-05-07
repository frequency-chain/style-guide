<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import Typography from '../typography/Typography.svelte';
  import { cn } from '../utils/utils';
  import type { Snippet } from 'svelte';

  interface Props extends HTMLAttributes<HTMLElement> {
    href?: string;
    variant?: 'primary' | 'secondary';
    size?: 'xs' | 'sm' | 'normal' | 'md' | 'lg' | 'auto' | 'full';
    disabled?: boolean;
    active?: boolean;
    target?: HTMLAnchorElement['target'];
    children?: Snippet;
  }

  let {
    href = '',
    variant = 'primary',
    size = 'normal',
    disabled = false,
    active = false,
    target = '',
    children,
    ...rest
  }: Props = $props();

  let generalStyles = cn('cursor-pointer rounded-full text-center transition-all text-nowrap');

  // Define button type classes
  let typeClass = $derived(
    variant === 'primary'
      ? 'bg-teal text-black hover:text-black hover:bg-tealDark hover:shadow-md'
      : 'bg-transparent border text-white border-white hover:border-primary hover:text-primary'
  );

  // Define classes
  let disabledClass = $derived(disabled ? 'bg-gray3 text-white cursor-default pointer-events-none' : '');
  let activeClass = $derived(
    active
      ? variant === 'primary'
        ? 'bg-primary text-teal hover:text-teal shadow-md'
        : 'border-primary text-primary'
      : ''
  );

  // Define button size classes
  let btnSizeClass = $derived(
    {
      xs: 'w-[115px]',
      sm: 'w-[197px]',
      md: 'w-[339px]',
      lg: 'w-[388px]',
      normal: 'w-[263px]',
      auto: 'w-auto',
      full: 'w-full',
    }[size] || 'w-[263px]'
  );
</script>

{#snippet Content()}
  <Typography bold={true} class="gap-f8 text-normal flex items-center justify-center font-sans"
    >{@render children?.()}</Typography
  >
{/snippet}

{#if href.length > 0}
  <a {...rest} {href} {target} class={disabled ? 'pointer-events-none block' : 'pointer-events-auto block'}>
    <button
      {...rest}
      class={cn('px-f24 py-f8 ', generalStyles, typeClass, activeClass, disabledClass, btnSizeClass, rest.class)}
      {disabled}
    >
      {@render Content()}
    </button>
  </a>
{:else}
  <button
    {...rest}
    class={cn('p-f8', generalStyles, typeClass, activeClass, disabledClass, btnSizeClass, rest.class)}
    {disabled}
  >
    {@render Content()}
  </button>
{/if}
