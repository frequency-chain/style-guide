<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import NavMenuMobile from './NavMenuMobile.svelte';

  const menuItems = [
    { label: 'Mission', href: '#mission', viewportHighlightId: 'mission' },
    { label: 'About', href: '#about', viewportHighlightId: 'about' },
    { label: 'User', href: '#user', viewportHighlightId: 'user' },
    { label: 'Developers', href: '#developers', viewportHighlightId: 'developers' },
    { label: 'Partners', href: '#partners', viewportHighlightId: 'partners' },
    { label: 'External', href: 'https://www.google.com/', isExternal: true },
    { label: 'Developer Portal', href: '/', isButton: true },
  ];
</script>

<Meta title="UI Components/Features/NavMenuMobile" component={NavMenuMobile} />

<Story name="NavMenuMobile" id="navMenuMobile">
  <NavMenuMobile {menuItems} isOpen={true} />
  <p class="hidden md:block">*** If you are not seeing the menu, try decreasing the window size.</p>
</Story>
