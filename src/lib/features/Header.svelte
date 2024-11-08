<script lang="ts">
  import { FrequencyLogo, OpenClose } from '../assets/index';
  import NavMenu from './NavMenu.svelte';
  import NavMenuMobile from './NavMenuMobile.svelte';
  import { MenuItem } from '$lib/utils/types.js';

  export let menuItems: MenuItem[] = [];
</script>

<div class={`header-shadow flex h-[85px] font-title ${$$restProps.class}`}>
  <div class="m-auto flex h-[85px] w-full max-w-screen-lg items-stretch justify-around sm:px-f20 md:px-f32">
    <!-- For Desktop -->
    <div class="flex w-[146px] items-center text-teal md:w-[200px]">
      <FrequencyLogo />
    </div>

    <NavMenu {menuItems} />
    <!-- For Mobile -->
    <NavMenuMobile {menuItems} />
  </div>
</div>

<style>
  .header-shadow {
    box-shadow: 0 4px 4px 0 #00000040;
  }
</style>
