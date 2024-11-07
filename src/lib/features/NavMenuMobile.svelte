<script lang="ts">
  import { OpenClose } from '../assets/index';
  import { MenuItem } from '$lib/utils/types.js';
  import Button from '../atoms/Button.svelte';

  export let menuItems: MenuItem[] = [];
  export let toggleIdentifier: string = 'mobile-menu-toggle';

  // isOpen for updating Aria state only
  let isOpen: boolean = false;
</script>

<input type="checkbox" class="peer hidden" bind:checked={isOpen} id={toggleIdentifier} />
<OpenClose classes="stroke-white md:hidden lg:hidden" />
<div
  class="z-1 fixed right-0 top-0 z-10 flex h-0 w-[100vw] flex-col justify-between gap-f24 overflow-y-scroll bg-navy px-[12%] transition-[height] duration-[1s] peer-checked:h-[100vh] sm:flex md:hidden lg:hidden"
  aria-expanded={isOpen}
>
  <nav id="mobile-navigation" aria-label="Main" class="mt-[60px] flex flex-col gap-4 text-white">
    {#each menuItems as item}
      {#if item.isButton}
        <Button size="xs">
          <a href={item.href} target={item.isExternal ? '_blank' : '_self'}>{item.label}</a>
        </Button>
      {:else}
        <a
          href={item.href}
          target={item.isExternal ? '_blank' : '_self'}
          class={`h6 underline-on-hover font-bold after:bg-current`}>{item.label}</a
        >
      {/if}
    {/each}
  </nav>
</div>
