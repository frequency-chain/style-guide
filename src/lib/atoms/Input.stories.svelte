<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Input from './Input.svelte';

  export let label = 'What is your favorite food?';
  export let description = 'Ex: Spaghetti and Meatballs';

  const { Story } = defineMeta({ title: 'UI Components/Atoms', component: Input });
</script>

<Story name="Default Input" args={{ ...Input.props, label, description }}>
  {#snippet children(args)}
    <Input {...args} />
  {/snippet}
</Story>
