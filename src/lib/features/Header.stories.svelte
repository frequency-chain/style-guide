<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import Header from './Header.svelte';
  import { MenuItem } from '../utils/types.js';

  const menuItems: MenuItem[] = [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq' },
    { label: 'External', href: 'https://www.google.com/', isExternal: true },
    { label: 'Login', href: '/', isButton: true },
  ];

  // brightBlue
  const logoHex = '#5E69FF';
</script>

<Meta title="UI Components/Features/Header" component={Header} />

<!--Primary-->
<Story name="Header - Frequency Logo">
  <Header {menuItems} />
</Story>

<!--Text Color-->
<Story name="Header - Frequency Logo - Text Color">
  <Header {menuItems} class="text-navy" />
</Story>

<!--LogoHex + Text Color-->
<Story name="Header - Frequency Logo - LogoHex">
  <Header {menuItems} {logoHex} class="text-navy" />
</Story>
