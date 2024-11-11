<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import NavMenu from './NavMenu.svelte';

  const menuItems = [
    { label: 'Mission', href: '#mission', viewportHighlightId: 'mission' },
    { label: 'About', href: '#about', viewportHighlightId: 'about' },
    { label: 'User', href: '#user', viewportHighlightId: 'user' },
    { label: 'Developers', href: '#developers', viewportHighlightId: 'developers' },
    { label: 'Partners', href: '#partners', viewportHighlightId: 'partners' },
    { label: 'External', href: 'https://www.google.com/', isExternal: true },
    { label: 'Developer Portal', href: '/', isButton: true },
    { label: 'Portal Active', href: '/', isButton: true, isActive: true },
  ];
</script>

<Meta title="UI Components/Features/NavMenu" component={NavMenu} />

<Story name="NavMenu" id="navMenu">
  <div class="sticky top-0 bg-white">
    <NavMenu {menuItems} />
    <p class="block md:hidden">*** If you are not seeing the menu, try increasing the window size.</p>
  </div>

  <p class="block">You may need to have a shorter browser to test the highlight moving</p>

  <div id="mission" class="bg-red-900 py-96">
    <h2>Mission</h2>
  </div>
  <div id="about" class="bg-blue-900 py-96">
    <h2>About</h2>
  </div>
  <div id="other" class="bg-green-900 py-96">
    <h2>Other</h2>
  </div>
  <div id="user" class="bg-red-900 py-96">
    <h2>User</h2>
  </div>

  <div id="developers" class="bg-blue-900 py-96">
    <h2>Developers</h2>
  </div>

  <div id="partners" class="bg-green-900 py-96">
    <h2>Partners</h2>
  </div>
</Story>
