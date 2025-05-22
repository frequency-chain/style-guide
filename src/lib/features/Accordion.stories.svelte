<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Accordion from './Accordion.svelte';
  import tailwindColors from '../styles/tailwindColors';

  const { Story } = defineMeta({
    title: 'UI Components/Features',
    component: Accordion,
    parameters: {
      backgrounds: {
        default: 'gray3',
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

<Story name="Default Accordion" args={{ ...Accordion.props, trigger: 'Hello world.', content: 'Hello there.' }}>
  {#snippet children(args)}
    <Accordion {...args} />
  {/snippet}
</Story>
