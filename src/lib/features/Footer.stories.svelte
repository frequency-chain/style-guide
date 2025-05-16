<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Footer from './Footer.svelte';

  const { Story } = defineMeta({ title: 'UI Components/Features', component: Footer });
</script>

<Story name="Default Footer" args={Footer.props}>
  {#snippet children(args)}
    <Footer {...args} />
  {/snippet}
</Story>
