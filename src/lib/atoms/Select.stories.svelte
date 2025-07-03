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

  let curOption = $state(null);

  const { Story } = defineMeta({ title: 'UI Components/Atoms', component: Select });
</script>

<Story name="Default Select" args={{ ...Select.props, label, description, options }}>
  {#snippet children(args)}
    <Select {...args} bind:value={curOption} />
  {/snippet}
</Story>

<hr class="m-4" />
<div>Selected Option: {`${curOption.label}- ${curOption.value}` || 'None'}</div>
