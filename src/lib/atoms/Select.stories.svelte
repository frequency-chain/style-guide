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
  export let error = 'Error message.';

  let primarySelected = $state('');

  const { Story } = defineMeta({ title: 'UI Components/Atoms/Select', component: Select });
</script>

<!-- Primary -->
<Story name="SelectPrimary" args={{ label, description, placeholder, isRequired, options }}>
  <Select
    {label}
    {description}
    {placeholder}
    {isRequired}
    {options}
    onSelectedChange={(x) => (primarySelected = x.value)}
  />
  <hr class="m-4" />
  <div>Selected Option: {primarySelected || 'None'}</div></Story
>

<!-- Required Example -->
<Story name="SelectRequired" args={{ label: 'Required Select', description: 'This is required', isRequired: true }}>
  <Select {label} {description} {placeholder} isRequired={true} {options} />
</Story>

<!-- No Description Example -->
<Story name="SelectNoDescription" args={{ label: 'Select without Description' }}>
  <Select {label} {placeholder} {isRequired} {options} />
</Story>

<!-- Error Example -->
<Story name="SelectError" args={{ label: 'Select with Error' }}>
  <Select {label} {placeholder} {isRequired} {options} {error} />
</Story>

<!-- Disabled Example -->
<Story name="SelectDisabled" args={{ label: 'Select Disabled' }}>
  <Select {label} {description} {placeholder} {isRequired} {options} disabled={true} />
</Story>
