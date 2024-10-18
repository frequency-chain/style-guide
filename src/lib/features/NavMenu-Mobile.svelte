<script lang="ts">
  import { MenuItem } from '../../utils/types.js';
  import Button from '../atoms/Button.svelte';

  export let menuItems: MenuItem[] = [];
  export let isOpen: boolean;
</script>

<div
  class={`z-1 fixed right-0 top-0 z-10 flex w-[100vw] flex-col justify-between gap-f24 overflow-y-scroll bg-navy px-[12%] transition-[height] duration-[1s] sm:flex md:hidden lg:hidden ${isOpen ? 'h-[100vh]' : 'h-0'}`}
  aria-expanded={isOpen}
>
  <nav id="mobile-navigation" aria-label="Main" class="mt-[60px] flex flex-col gap-4 uppercase text-cream">
    {#each menuItems as item}
      {#if item.isButton}
        <Button size="xs">
          <a href={item.href} target={item.isExternal ? '_blank' : '_self'}>{item.label}</a>
        </Button>
      {:else}
        <a
          href={item.href}
          target={item.isExternal ? '_blank' : '_self'}
          class={`h6 underline-on-hover font-bold after:bg-current`}>{item.label}.</a
        >
      {/if}
    {/each}
  </nav>
</div>
