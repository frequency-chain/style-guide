<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Input from './Input.svelte';

  export let label = 'What is your favorite food?';
  export let description = 'Ex: Spaghetti and Meatballs';
  export let placeholder = 'Enter your response...';
  export let isRequired = false;
  export let value = '';
  export let error = 'Error message.';

  const { Story } = defineMeta({ title: 'UI Components/Atoms', component: Input });
</script>

<Story name="Default Input" args={{ label, description, placeholder, isRequired, value }}>
  {#snippet children(args)}
    <Input {...args} />
  {/snippet}
</Story>
