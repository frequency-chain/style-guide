<script lang="ts">
  import { FrequencyAccessLogo, FrequencyLogo, OpenClose } from '../assets/index';
  import NavMenu from './NavMenu.svelte';
  import NavMenuMobile from './NavMenuMobile.svelte';
  import { MenuItem } from '$lib/utils/types.js';

  export let menuItems: MenuItem[] = [];
  export let logoType: 'primary' | 'access' = 'primary';
  $: isNavOpen = false;

  $: innerWidth = window.innerWidth;

  $: hasMobileNav = innerWidth <= 900;

  $: {
    window.addEventListener('resize', () => {
      innerWidth = window.innerWidth;
      hasMobileNav = innerWidth <= 900;
      if (!hasMobileNav) isNavOpen = false;
    });
  }
</script>

<div class="flex justify-between bg-navy p-f16 md:bg-transparent md:p-0" style="color: #55B1AB;">
  <!-- For Desktop -->
  {#if logoType == 'primary'}
    <FrequencyLogo />
  {:else if logoType == 'access'}
    <FrequencyAccessLogo accessColor={hasMobileNav ? '#fff' : '#000'} />
  {/if}

  <NavMenu {menuItems} />

  <!-- For Mobile -->
  <OpenClose onClick={() => (isNavOpen = !isNavOpen)} isOpen={isNavOpen} classes="stroke-white md:hidden lg:hidden" />
  <NavMenuMobile isOpen={isNavOpen} {menuItems} />
</div>
