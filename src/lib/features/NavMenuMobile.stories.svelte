<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
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

  const { Story } = defineMeta({ title: 'UI Components/Features/NavMenu', component: NavMenuMobile });
</script>

<p class="hidden lg:block">*** If you are not seeing the menu, try decreasing the window size.</p>

<Story name="Mobile" id="navMenuMobile" args={{ ...NavMenuMobile.props, menuItems, isOpen: true }}>
  {#snippet children(args)}
    <NavMenuMobile {...args} />
  {/snippet}
</Story>
