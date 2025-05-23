<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Checkbox from './Checkbox.svelte';

  const { Story } = defineMeta({
    title: 'UI Components/Atoms',
    component: Checkbox,
  });

  let checked = $state(false);
</script>

<Story name="Default Checkbox" args={{ ...Checkbox.props, label: 'Click Here', intent: 'dark' }}>
  {#snippet children(args)}
    <Checkbox {...args} bind:checked />
  {/snippet}
</Story>
