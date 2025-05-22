<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';

  const { Story } = defineMeta({
    title: 'UI Components/Atoms',
    component: Button,
    argTypes: { ...Button.props },
  });
</script>

<!-- Apply the background conditionally using an inline style -->
<Story name="Default Button">Click Here</Story>
