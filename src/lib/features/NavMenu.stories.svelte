<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import NavMenu from './NavMenu.svelte';

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq' },
    { label: 'External', href: 'https://www.google.com/', isExternal: true },
    { label: 'Login', href: '/', isButton: true },
  ];
</script>

<Meta title="UI Components/Features/NavMenu" component={NavMenu} />

<Story name="NavMenu">
  <NavMenu {menuItems} />
  <p class="block md:hidden">*** If you are not seeing the menu, try increasing the window size.</p>
</Story>
