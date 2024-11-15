<script lang="ts">
  import Typography from '../typography/Typography.svelte';
  import { cn } from '../utils/utils';

  export let onClick = () => {};

  export let href = '';

  /**
   * Specify the kind of button.
   */
  export let type: 'primary' | 'secondary' = 'primary';

  /**
   * Specify the size of the component.
   */
  export let size: 'xs' | 'sm' | 'normal' | 'md' | 'lg' | 'auto' | 'full' = 'normal';

  /**
   * Specify if the component is disabled.
   */
  export let disabled: boolean = false;

  /**
   * Specify if the component is supposed to be active.
   */
  export let active: boolean = false;

  // Define button type classes
  $: typeClass =
    type === 'primary'
      ? 'bg-teal text-black hover:text-black hover:bg-tealDark hover:shadow-md'
      : 'bg-transparent border text-white border-white hover:border-primary hover:text-primary';

  // Define classes
  $: disabledClass = disabled ? 'bg-gray3 text-white cursor-default pointer-events-none' : '';
  $: activeClass = active
    ? type === 'primary'
      ? 'bg-primary text-teal shadow-md'
      : 'border-primary text-primary'
    : '';

  // Define button size classes
  $: btnSizeClass =
    {
      xs: 'w-[115px]',
      sm: 'w-[197px]',
      md: 'w-[339px]',
      lg: 'w-[388px]',
      normal: 'w-[263px]',
      auto: 'w-auto',
      full: 'w-full',
    }[size] || 'w-[263px]';
</script>

<!--TODO: once we have upgraded to svelte 5, implement snippets for duplicate code.-->
{#if href.length > 0}
  <a {...$$restProps} {href} class={disabled ? 'pointer-events-none block' : 'pointer-events-auto block'}>
    <button
      {...$$restProps}
      class={cn(
        'rounded-full px-f24 py-f8 text-center transition-all',
        typeClass,
        activeClass,
        disabledClass,
        btnSizeClass,
        $$restProps.class
      )}
      {disabled}
    >
      <Typography bold={true} class="flex items-center justify-center gap-f8 font-sans">
        <slot />
      </Typography>
    </button>
  </a>
{:else}
  <button
    {...$$restProps}
    on:click|preventDefault={onClick}
    class={cn(
      'rounded-full p-f8 text-center transition-all',
      typeClass,
      activeClass,
      disabledClass,
      btnSizeClass,
      $$restProps.class
    )}
    {disabled}
  >
    <Typography bold={true} class="flex items-center justify-center gap-f8 font-sans">
      <slot />
    </Typography>
  </button>
{/if}
