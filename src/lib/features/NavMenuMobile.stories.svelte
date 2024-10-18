<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import NavMenuMobile from './NavMenu-Mobile.svelte';

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq' },
    { label: 'External', href: 'https://www.google.com/', isExternal: true },
    { label: 'Login', href: '/', isButton: true },
  ];
</script>

<Meta title="UI Components/Features/NavMenuMobile" component={NavMenuMobile} />

<Story name="NavMenuMobile">
  <NavMenuMobile {menuItems} isOpen={true} />
  <p class="hidden md:block">*** If you are not seeing the menu, try decreasing the window size.</p>
</Story>
