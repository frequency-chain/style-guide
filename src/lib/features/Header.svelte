<script lang="ts">
  import { FrequencyAccessLogo, FrequencyLogo, OpenClose } from '../assets/index';
  import NavMenu from './NavMenu.svelte';
  import NavMenuMobile from './NavMenuMobile.svelte';
  import { MenuItem } from '$lib/utils/types.js';

  export let menuItems: MenuItem[] = [];
  export let logoType: 'primary' | 'access' = 'primary';
  export let logoHex;

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

  const textColor = () => {
    if (hasMobileNav) return 'text-white';
    if (logoHex) return `text-[${logoHex}]`;
    // default to teal
    return 'text-teal';
  };
</script>

<div class={`flex justify-between bg-navy p-f16 md:bg-transparent md:p-0 ${$$restProps.class}`}>
  <!-- For Desktop -->
  {#if logoType == 'primary'}
    <FrequencyLogo class={textColor()} />
  {:else if logoType == 'access'}
    <FrequencyAccessLogo accessColor={hasMobileNav ? '#fff' : '#000'} frequencyColor={logoHex} />
  {/if}

  <NavMenu {menuItems} />

  <!-- For Mobile -->
  <OpenClose onClick={() => (isNavOpen = !isNavOpen)} isOpen={isNavOpen} classes="stroke-white md:hidden lg:hidden" />
  <NavMenuMobile isOpen={isNavOpen} {menuItems} />
</div>
