<script lang="ts">
  import { FrequencyLogo, OpenClose } from '../assets/index';
  import NavMenu from './NavMenu.svelte';
  import NavMenuMobile from './NavMenuMobile.svelte';
  import { MenuItem } from '$lib/utils/types.js';

  export let menuItems: MenuItem[] = [];
</script>

<div class={`flex h-[80px] justify-between p-f16 md:p-0 ${$$restProps.class}`}>
  <!-- For Desktop -->
  <div class="flex w-[146px] items-center text-teal md:w-[200px]">
    <FrequencyLogo />
  </div>

  <div class="hidden items-stretch lg:flex">
    <NavMenu {menuItems} />
  </div>

  <!-- For Mobile -->
  <NavMenuMobile {menuItems} />
</div>
