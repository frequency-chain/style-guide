<script lang="ts">
  // Note: Menu "Buttons" are shown on the nav bar in "md" view

  import { OpenClose } from '../assets/index';
  import { MenuItem } from '$lib/utils/types.js';
  import Button from '../atoms/Button.svelte';

  export let menuItems: MenuItem[] = [];
  export let toggleIdentifier: string = 'mobile-menu-toggle';

  // isOpen is bound to the checkbox state
  let isOpen: boolean = false;
</script>

<input type="checkbox" class="peer hidden" bind:checked={isOpen} id={toggleIdentifier} />
<OpenClose
  classes="cursor-pointer text-primary peer-checked:text-white peer-checked:hover:text-teal hover:text-teal flex self-center lg:hidden"
/>
<div
  class="z-1 fixed left-0 top-0 z-10 flex h-0 w-[100vw] flex-col justify-between gap-f24 overflow-y-scroll bg-navy px-[12%] transition-[height] duration-[1s] peer-checked:h-[100vh] lg:hidden"
  aria-expanded={isOpen}
>
  <nav id="mobile-navigation" aria-label="Main" class="mb-f20 mt-[85px] flex flex-col gap-f24 text-white">
    {#each menuItems as item}
      {#if item.isButton}
        <Button
          size="full"
          class="mt-f24 max-w-[360px] text-navy md:hidden"
          href={item.href}
          target={item.isExternal ? '_blank' : '_self'}
        >
          {item.label}
        </Button>
      {:else}
        <a
          href={item.href}
          target={item.isExternal ? '_blank' : '_self'}
          class={`h4 underline-on-hover after:bg-current`}
          on:click={() => (item.isExternal ? null : (isOpen = false))}
        >
          {item.label}
        </a>
      {/if}
    {/each}
  </nav>
</div>
