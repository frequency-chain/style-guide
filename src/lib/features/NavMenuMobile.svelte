<script lang="ts">
  // Note: Menu "Buttons" are shown on the nav bar in "md" view

  import { OpenClose } from '../design-system/assets/index';
  import type { Intent, MenuItem } from '$lib/utils/types.js';
  import Button from '../atoms/Button.svelte';
  import { cn } from '../utils/utils';

  interface Props {
    intent?: Intent;
    menuItems?: MenuItem[];
    toggleIdentifier?: string;
  }

  let { intent = 'dark', menuItems = [], toggleIdentifier = 'mobile-menu-toggle' }: Props = $props();

  // isOpen is bound to the checkbox state
  let isOpen: boolean = $state(false);
</script>

<input type="checkbox" class="peer hidden" bind:checked={isOpen} id={toggleIdentifier} />
<OpenClose
  {toggleIdentifier}
  bind:isOpen
  class={cn(
    ' xs:flex cursor-pointer self-center lg:hidden',
    intent === 'dark'
      ? 'hover:peer-checked:text-purple50 hover:text-primary peer-checked:text-cream text-black'
      : 'hover:peer-checked:text-primary hover:text-purple50 text-cream peer-checked:text-black'
  )}
/>
<div
  class={cn(
    'gap-f24 xs:flex fixed top-0 left-0 z-1 h-0 w-[100vw] flex-col justify-between overflow-y-scroll  px-[12%] transition-[height] duration-[1s] peer-checked:h-[100vh] lg:hidden',
    intent === 'dark' ? 'bg-black' : 'bg-white'
  )}
  aria-expanded={isOpen}
>
  <nav id="mobile-navigation" aria-label="Main" class="mb-f48 gap-f24 xs:flex text-cream mt-[85px] flex-col">
    {#each menuItems as item, index (index)}
      {#if item.isButton}
        <Button
          onclick={item.onclick}
          intent={intent === 'dark' ? 'filled-light' : 'filled-dark'}
          size="full"
          class="mt-f24 max-w-[360px] md:hidden"
          href={item.href}
          target={item.isExternal ? '_blank' : '_self'}
        >
          {item.label}
        </Button>
      {:else}
        <a
          href={item.href}
          target={item.isExternal ? '_blank' : '_self'}
          class={cn(
            'h4 underline-on-hover font-bold uppercase after:bg-current',
            intent === 'dark' ? 'text-cream' : 'text-black'
          )}
          onclick={(e) => {
            item.isExternal ? null : (isOpen = false);
            item?.onclick && item.onclick(e);
          }}
        >
          {item.label}.
        </a>
      {/if}
    {/each}
  </nav>
</div>
