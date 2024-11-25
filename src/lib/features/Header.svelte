<script lang="ts">
  import { FrequencyLogo } from '../assets/index';
  import NavMenu from './NavMenu.svelte';
  import NavMenuMobile from './NavMenuMobile.svelte';
  import type { MenuItem } from '$lib/utils/types.js';
  import { cn } from '../utils/utils.js';

  export let logoLink = '';
  export let menuItems: MenuItem[] = [];
  export let highlightMarginTop = '90px';
  export let innerClass = '';
</script>

<div class={cn('header-shadow flex', $$restProps.class)}>
  <div class={cn('m-auto flex h-[85px] w-full max-w-screen-xl justify-between font-title', innerClass)}>
    <!-- For Desktop -->
    <a href={logoLink} class={`self-center ${logoLink ? '' : 'pointer-events-none'}`}>
      <FrequencyLogo class="w-[146px] text-teal md:w-[200px]" />
    </a>

    <NavMenu {highlightMarginTop} {menuItems} />
    <!-- For Mobile -->
    <NavMenuMobile {menuItems} />
  </div>
</div>

<style>
  .header-shadow {
    box-shadow: 0 4px 4px 0 #00000040;
  }
</style>
