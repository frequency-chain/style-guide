<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Textarea from './Textarea.svelte';

  export let label = 'Tell me about your favorite food.';
  export let description = 'Please provide a paragraph about your choice.';

  const { Story } = defineMeta({ title: 'UI Components/Atoms', component: Textarea });
</script>

<Story name="Default Textarea" args={{ ...Textarea.props, label, description }}>
  {#snippet children(args)}
    <Textarea {...args} />
  {/snippet}
</Story>
