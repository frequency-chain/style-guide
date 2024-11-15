<script lang="ts">
  import { FrequencyLogo } from '../assets/index';
  import NavMenu from './NavMenu.svelte';
  import NavMenuMobile from './NavMenuMobile.svelte';
  import { MenuItem } from '$lib/utils/types.js';

  export let logoLink = '';
  export let menuItems: MenuItem[] = [];
  export let highlightMarginTop = '90px';
</script>

<div class={`header-shadow flex h-[85px] font-title ${$$restProps.class}`}>
  <div class="m-auto flex h-[85px] w-full max-w-screen-xl justify-between sm:px-f20 md:px-f32">
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
