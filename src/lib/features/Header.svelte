<script lang="ts">
  import { FrequencyLogo, OpenClose } from '../assets/index';
  import NavMenu from './NavMenu.svelte';
  import NavMenuMobile from './NavMenuMobile.svelte';
  import { MenuItem } from '$lib/utils/types.js';

  export let menuItems: MenuItem[] = [];
  export let logoType: 'primary' = 'primary';
  // logoHex = teal
  export let logoHex = '#55B1AB';

  $: isNavOpen = false;

  $: innerWidth = window.innerWidth;

  $: hasMobileNav = innerWidth <= 744;

  $: {
    window.addEventListener('resize', () => {
      innerWidth = window.innerWidth;
      hasMobileNav = innerWidth <= 744;
      if (!hasMobileNav) isNavOpen = false;
    });
  }
</script>

<div class={`flex justify-between bg-navy p-f16 md:bg-transparent md:p-0 ${$$restProps.class}`}>
  <!-- For Desktop -->
  <FrequencyLogo logoHex={hasMobileNav ? '#fff' : logoHex} />

  <NavMenu {menuItems} />

  <!-- For Mobile -->
  <OpenClose onClick={() => (isNavOpen = !isNavOpen)} isOpen={isNavOpen} classes="stroke-white md:hidden lg:hidden" />
  <NavMenuMobile isOpen={isNavOpen} {menuItems} />
</div>
