<script lang="ts">
  import { preventDefault } from 'svelte/legacy';

  import Typography from '../typography/Typography.svelte';
  import { cn } from '../utils/utils';

  interface Props {
    onClick?: any;
    href?: string;
    /**
     * Specify the kind of button.
     */
    type?: 'primary' | 'secondary';
    /**
     * Specify the size of the component.
     */
    size?: 'xs' | 'sm' | 'normal' | 'md' | 'lg' | 'auto' | 'full';
    /**
     * Specify if the component is disabled.
     */
    disabled?: boolean;
    /**
     * Specify if the component is supposed to be active.
     */
    active?: boolean;
    children?: import('svelte').Snippet;
    [key: string]: any;
  }

  let {
    onClick = () => {},
    href = '',
    type = 'primary',
    size = 'normal',
    disabled = false,
    active = false,
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

<!--TODO: once we have upgraded to svelte 5, implement snippets for duplicate code.-->
{#if href.length > 0}
  <a {...rest} {href} class={disabled ? 'pointer-events-none block' : 'pointer-events-auto block'}>
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
    onclick={preventDefault(onClick)}
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
