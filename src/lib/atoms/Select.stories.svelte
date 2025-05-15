<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Select from './Select.svelte';

  export let label = 'Favorite Food';
  export let description = 'Choose your favorite food.';
  export let placeholder = 'Select an option';
  export let isRequired = false;
  export let options = [
    { optionLabel: 'Option 1', value: '1' },
    { optionLabel: 'Option 2', value: '2' },
    { optionLabel: 'Option 3', value: '3' },
  ];
  export let error = '';
  export let onSelectedChange = (x) => (primarySelected = x.value);

  let primarySelected = $state('');

  const { Story } = defineMeta({ title: 'UI Components/Atoms', component: Select });
</script>

<Story name="Default Select" args={{ label, description, placeholder, isRequired, options, error, onSelectedChange }}>
  {#snippet children(args)}
    <Select {...args} />
  {/snippet}
</Story>

<hr class="m-4" />
<div>Selected Option: {primarySelected || 'None'}</div>
