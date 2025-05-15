<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Footer from './Footer.svelte';

  const { Story } = defineMeta({ title: 'UI Components/Features/Footer', component: Footer });
</script>

<Story name="Footer" args={{ privacyHref, type }}>
  {#snippet children(args)}
    <Footer {...args} />
  {/snippet}
</Story>
