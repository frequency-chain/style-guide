<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Arrow } from '../assets';
  import IconButton from './IconButton.svelte';

  const { Story } = defineMeta({ title: 'UI Components/Atoms', component: IconButton });
</script>

<Story name="Default Icon Button" args={IconButton.props}>
  {#snippet children(args)}
    <IconButton {...args}>
      <Arrow />
    </IconButton>
  {/snippet}
</Story>
