<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import IconButton from './IconButton.svelte';
  import { Arrow } from '../design-system/assets';

  const { Story } = defineMeta({
    title: 'UI Components/Atoms',
    component: IconButton,
    argTypes: { ...IconButton.props },
  });
</script>

<Story name="Default Icon Button">
  <Arrow />
</Story>
