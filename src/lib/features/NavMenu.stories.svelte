<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
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

  const { Story } = defineMeta({ title: 'UI Components/Features/NavMenu', component: NavMenu });
</script>

<p class="xs:block lg:hidden">*** If you are not seeing the menu, try increasing the window size.</p>

<Story name="Desktop" id="navMenu" args={{ ...NavMenu.props, menuItems }}>
  {#snippet children(args)}
    <NavMenu {...args} />
  {/snippet}
</Story>

<!-- This section will not render unless outside of the storytags, which in turn does not
   have the desired effect. It should be inside of a sticky block (removed). -->
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
