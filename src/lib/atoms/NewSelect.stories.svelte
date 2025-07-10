<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import NewSelect from './NewSelect.svelte';

  let label = 'Favorite Food';
  let description = 'Choose your favorite food.';
  let options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  let value = $state(null);

  function getValue() {
    return value;
  }
  function setValue(newValue: string) {
    value = newValue;
  }

  const { Story } = defineMeta({ title: 'UI Components/Atoms', component: NewSelect });
</script>

<Story name="Default NewSelect" args={{ ...NewSelect.props, label, description, options }}>
  {#snippet children(args)}
    <NewSelect {...args} bind:value={getValue, setValue} />
  {/snippet}
</Story>

<hr class="m-4" />
<div>Selected Option: {value}</div>
