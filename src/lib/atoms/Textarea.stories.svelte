<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Textarea from './Textarea.svelte';

  export let label = 'Tell me about your favorite food.';
  export let description = 'Please provide a paragraph about your choice.';
  export let placeholder = 'Enter your response...';
  export let isRequired = false;
  export let value = '';
  export let error = '';

  const { Story } = defineMeta({ title: 'UI Components/Atoms', component: Textarea });
</script>

<Story name="Default Textarea" args={{ label, description, placeholder, isRequired, value, error }}>
  {#snippet children(args)}
    <Textarea {label} {description} {placeholder} {isRequired} {value} />
  {/snippet}
</Story>
