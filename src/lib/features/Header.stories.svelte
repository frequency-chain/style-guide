<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import Header from './Header.svelte';
  import { MenuItem } from '../utils/types.js';

  const menuItems: MenuItem[] = [
    { label: 'Mission', href: '#mission', viewportHighlightId: 'mission' },
    { label: 'About', href: '#about', viewportHighlightId: 'about' },
    { label: 'User', href: '#user', viewportHighlightId: 'user' },
    { label: 'Developers', href: '#developers', viewportHighlightId: 'developers' },
    { label: 'Contact', href: '#contact', viewportHighlightId: 'contact' },
    { label: 'Developer Portal', href: '/', isButton: true },
  ];
</script>

<Meta title="UI Components/Features/Header" component={Header} />

<!--Primary-->
<Story name="Primary" id="primary">
  <Header {menuItems} class="fixed left-0 top-0 w-full" />
</Story>

<!--Logo Link-->
<Story name="LogoLink">
  <Header {menuItems} class="fixed left-0 top-0 w-full" logoLink="/" />
</Story>
