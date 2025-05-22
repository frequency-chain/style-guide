<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Footer from './Footer.svelte';
  import tailwindColors from '../styles/tailwindColors';

  const { Story } = defineMeta({
    title: 'UI Components/Features',
    component: Footer,
    parameters: {
      backgrounds: {
        default: 'black',
        values: [
          { name: 'white', value: tailwindColors.white },
          { name: 'gray3', value: tailwindColors.gray3 },
          { name: 'black', value: tailwindColors.black },
          { name: 'dark purple', value: tailwindColors.darkPurple },
        ],
      },
    },
  });
</script>

<Story name="Default Footer" args={Footer.props}>
  {#snippet children(args)}
    <Footer {...args} />
  {/snippet}
</Story>
