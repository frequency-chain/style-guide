<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import NewSelect from './NewSelect.svelte';

  let label = 'Favorite Food';
  let description = 'Choose your favorite food.';

  const items = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ];

  let fruit = $state('apple');

  const { Story } = defineMeta({ title: 'UI Components/Atoms', component: NewSelect });
</script>

<Story name="Default NewSelect" args={{ ...NewSelect.props, items }}>
  {#snippet children(args)}
    <NewSelect {...args} bind:value={fruit} />
  {/snippet}
</Story>

<hr class="m-4" />
<div>Selected Option: {fruit}</div>
