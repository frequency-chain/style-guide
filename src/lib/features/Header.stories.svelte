<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Header from './Header.svelte';

  const menuItems = [
    { label: 'Mission', href: '#mission', viewportHighlightId: 'mission' },
    { label: 'About', href: '#about', viewportHighlightId: 'about' },
    { label: 'User', href: '#user', viewportHighlightId: 'user' },
    { label: 'Developers', href: '#developers', viewportHighlightId: 'developers' },
    { label: 'Contact', href: '#contact', viewportHighlightId: 'contact' },
    { label: 'Developer Portal', href: '/', isButton: true },
  ];

  const menuItemsActive = [
    { label: 'Mission', href: '#mission', viewportHighlightId: 'mission' },
    { label: 'About', href: '#about', viewportHighlightId: 'about' },
    { label: 'User', href: '#user', viewportHighlightId: 'user' },
    { label: 'Developers', href: '#developers', viewportHighlightId: 'developers' },
    { label: 'Contact', href: '#contact', viewportHighlightId: 'contact' },
    { label: 'Developer Portal', href: '/', isButton: true, isActive: true },
  ];

  const { Story } = defineMeta({ title: 'UI Components/Features/Header', component: Header });
</script>

<!--Primary-->
<Story name="Primary" id="primary">
  <Header {menuItems} class="fixed top-0 left-0 w-full" innerClass="px-4" />
</Story>

<!--Active Button-->
<Story name="ActiveButton" id="activeButton">
  <Header menuItems={menuItemsActive} class="fixed top-0 left-0 w-full" innerClass="px-4" />
</Story>

<!--Logo Link-->
<Story name="LogoLink">
  <Header {menuItems} class="fixed top-0 left-0 w-full" innerClass="px-4" logoLink="/" />
</Story>
