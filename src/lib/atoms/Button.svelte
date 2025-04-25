<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import Typography from '../typography/Typography.svelte';
  import { cn } from '../utils/utils';
  import type { Snippet } from 'svelte';

  interface Props extends HTMLAttributes<HTMLElement> {
    href?: string;
    type?: 'primary' | 'secondary';
    size?: 'xs' | 'sm' | 'normal' | 'md' | 'lg' | 'auto' | 'full';
    disabled?: boolean;
    active?: boolean;
    target?: HTMLAnchorElement['target'];
    children?: Snippet;
  }

  let {
    href = '',
    type = 'primary',
    size = 'normal',
    disabled = false,
    active = false,
    target = '',
    children,
    ...rest
  }: Props = $props();

  // Define button type classes
  let typeClass = $derived(
    type === 'primary'
      ? 'bg-teal text-black hover:text-black hover:bg-tealDark hover:shadow-md'
      : 'bg-transparent border text-white border-white hover:border-primary hover:text-primary'
  );

  // Define classes
  let disabledClass = $derived(disabled ? 'bg-gray3 text-white cursor-default pointer-events-none' : '');
  let activeClass = $derived(
    active ? (type === 'primary' ? 'bg-primary text-teal shadow-md' : 'border-primary text-primary') : ''
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

{#if href.length > 0}
  <a {...rest} {href} {target} class={disabled ? 'pointer-events-none block' : 'pointer-events-auto block'}>
    <button
      {...rest}
      class={cn(
        'px-f24 py-f8 cursor-pointer rounded-full text-center transition-all',
        typeClass,
        activeClass,
        disabledClass,
        btnSizeClass,
        rest.class
      )}
      {disabled}
    >
      <Typography bold={true} class="gap-f8 flex items-center justify-center font-sans">
        {@render children?.()}
      </Typography>
    </button>
  </a>
{:else}
  <button
    {...rest}
    class={cn(
      'p-f8 cursor-pointer rounded-full text-center transition-all',
      typeClass,
      activeClass,
      disabledClass,
      btnSizeClass,
      rest.class
    )}
    {disabled}
  >
    <Typography bold={true} class="gap-f8 flex items-center justify-center font-sans">
      {@render children?.()}
    </Typography>
  </button>
{/if}
