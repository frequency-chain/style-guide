<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Select from './Select.svelte';

  let label = 'Favorite Food';
  let description = 'Choose your favorite food.';
  let options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];
  let placeholder = 'Cheese Burger?';
  let value = $state();
  let disabled = $state(false);
  let error = $state();

  const { Story } = defineMeta({
    title: 'UI Components/Atoms/Select',
    component: Select,
  });
</script>

<Story
  name="Default Select"
  args={{ ...Select.props, value, label, description, placeholder, options, disabled, error }}
>
  {#snippet children(args)}
    <Select {...args} bind:value={args.value} />
  {/snippet}
</Story>

<hr class="m-4" />
<div>{`Selected value: ${value}`}</div>
