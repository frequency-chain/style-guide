<script lang="ts">
  import FrequencyAccessLogo from '../../assets/logos/FrequencyAccessLogo.svelte';
  import NavMenu from './NavMenu.svelte';
  import NavMenuMobile from './NavMenu-Mobile.svelte';
  import { MenuItem } from '../../utils/types.js';
  import OpenClose from '../../assets/icons/OpenClose.svelte';

  export let menuItems: MenuItem[] = [];

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

<div class="flex justify-between bg-navy p-f16 md:bg-transparent md:p-0">
  <!-- For Desktop -->
  <FrequencyAccessLogo accessColor={hasMobileNav ? '#fff' : '#000'} />
  <NavMenu {menuItems} />

  <!-- For Mobile -->
  <OpenClose onClick={() => (isNavOpen = !isNavOpen)} isOpen={isNavOpen} classes="stroke-white md:hidden lg:hidden" />
  <NavMenuMobile isOpen={isNavOpen} {menuItems} />
</div>
