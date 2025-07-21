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
    {
      label: 'Logout',
      href: '/',
      isButton: true,
      onclick: () => {
        console.log('onclick executed');
      },
    },
    {
      label: 'Logout No Href',
      isButton: true,
      onclick: () => {
        console.log('onclick no href executed');
      },
    },
    {
      label: 'Logout not button',
      href: '/',
      onclick: () => {
        console.log('onclick not button executed');
      },
    },
    {
      label: 'Logout No Href not button',
      onclick: () => {
        console.log('onclick no href not button executed');
      },
    },
  ];

  const { Story } = defineMeta({ title: 'UI Components/Features/NavMenu', component: NavMenu });
</script>

<p class="xs:block lg:hidden">*** If you are not seeing the menu, try increasing the window size.</p>

<Story name="Desktop" id="navMenu" args={{ ...NavMenu.props, menuItems }}>
  {#snippet children(args)}
    <NavMenu {...args} />
  {/snippet}
</Story>
