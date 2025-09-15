<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Select from './Select.svelte';

  let label = 'Favorite Food';
  let description = 'Choose your favorite food.';
  let options = [
    { optionLabel: 'Option 1', value: '1' },
    { optionLabel: 'Option 2', value: '2' },
    { optionLabel: 'Option 3', value: '3' },
  ];

  const { Story } = defineMeta({ title: 'UI Components/Atoms/Select', component: Select });
</script>

<Story name="Default Select">
  {#snippet children(args)}
    <Select />
  {/snippet}
</Story>
