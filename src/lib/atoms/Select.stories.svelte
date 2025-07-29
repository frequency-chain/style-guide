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

  let primarySelected = $state('');

  let onValueChange = (value) => (primarySelected = value);

  let isLoading = $state(false);

  let onValueChangeAsync = async (value) => {
    isLoading = true;
    primarySelected = value;

    setTimeout(() => {
      isLoading = false;
    }, 2000);
  };

  const { Story } = defineMeta({ title: 'UI Components/Atoms/Select', component: Select });
</script>

<Story name="Default Select" args={{ ...Select.props, label, description, options, onValueChange }}>
  {#snippet children(args)}
    <Select {...args} />
  {/snippet}
</Story>

<Story name="Async Func Select" args={{ label, description, options, isLoading, onValueChange: onValueChangeAsync }}>
  {#snippet children(args)}
    <Select {...args} />
  {/snippet}
</Story>

<hr class="m-4" />
<div>Selected Option: {primarySelected || 'None'}</div>
