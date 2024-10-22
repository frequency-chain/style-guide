<script lang="ts">
  import { MenuItem } from '../../utils/types.js';
  import Button from '../atoms/Button.svelte';

  export let menuItems: MenuItem[] = [];
</script>

<nav class="hidden items-center gap-f32 uppercase md:flex">
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
