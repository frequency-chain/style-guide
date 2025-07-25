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

  let onSelectedChange = (x) => (primarySelected = x.value);

  let isLoading = $state(false);
  let error = $state();

  let onSelectedChangeAsync = async (x) => {
    isLoading = true;
    primarySelected = x.value;

    setTimeout(() => {
      isLoading = false;
    }, 2000);
  };

  let onSelectedChangeError = (x) => {
    error = 'error!!!';
    primarySelected = x.value;
  };

  const { Story } = defineMeta({ title: 'UI Components/Atoms', component: Select });
</script>

<Story name="Default Select" args={{ ...Select.props, label, description, options, onSelectedChange }}>
  {#snippet children(args)}
    <Select {...args} />
  {/snippet}
</Story>

<Story
  name="Async Func Select"
  args={{ label, description, options, isLoading, onSelectedChange: onSelectedChangeAsync }}
>
  {#snippet children(args)}
    <Select {...args} />
  {/snippet}
</Story>

<Story name="Error" args={{ label, description, options, error, onSelectedChange: onSelectedChangeError }}>
  {#snippet children(args)}
    <Select {...args} />
  {/snippet}
</Story>

<hr class="m-4" />
<div>Selected Option: {primarySelected || 'None'}</div>
