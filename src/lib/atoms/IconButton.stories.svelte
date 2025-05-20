<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import IconButton from './IconButton.svelte';
  import { Arrow } from '../design-system/assets';
  import tailwindColors from '../styles/tailwindColors';

  const { Story } = defineMeta({
    title: 'UI Components/Atoms',
    component: IconButton,
    argTypes: { ...IconButton.props },
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

<Story name="Default Icon Button">
  <Arrow />
</Story>
