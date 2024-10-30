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

  const logoType = 'primary';
</script>

<Meta title="UI Components/Features/Header" component={Header} />

<!--Primary-->
<Story name="Header">
  <Header {menuItems} {logoType} />
</Story>
