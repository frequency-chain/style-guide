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

  const { Story } = defineMeta({ title: 'UI Components/Features', component: Header });
</script>

<Story name="Default Header" args={{ ...Header.props, menuItems }}>
  {#snippet children(args)}
    <Header {...args} class="fixed top-0 left-0 w-full" />
  {/snippet}
</Story>
