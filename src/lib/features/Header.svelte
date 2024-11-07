<script lang="ts">
  import { FrequencyLogo, OpenClose } from '../assets/index';
  import NavMenu from './NavMenu.svelte';
  import NavMenuMobile from './NavMenuMobile.svelte';
  import { MenuItem } from '$lib/utils/types.js';

  export let menuItems: MenuItem[] = [];
</script>

<div class={`flex h-[80px] justify-between bg-navy p-f16 md:bg-white md:p-0 ${$$restProps.class}`}>
  <!-- For Desktop -->
  <div class="flex w-[146px] items-center text-teal md:w-[200px]">
    <FrequencyLogo />
  </div>

  <div class="hidden items-stretch md:flex">
    <NavMenu {menuItems} />
  </div>

  <!-- For Mobile -->
  <NavMenuMobile {menuItems} />
</div>

<!--

TODO:
- [x] JS or CSS + Checkbox?
- [ ] Update Logo Color
- [ ] Active state
- [ ] Scroll active state

-->

<style>
</style>
