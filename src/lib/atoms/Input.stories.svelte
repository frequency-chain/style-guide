<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import Input from './Input.svelte';

  export let label = 'Select Option';
  export let description = 'Please choose an option';
  export let placeholder = 'Select an option...';
  export let isRequired = false;
  export let value = '';
  export let error = 'Error message.';
</script>

<Meta title="UI Components/Atoms/Input" component={Input} />

<!-- Primary -->
<Story name="Input Primary" args={{ label, description, placeholder, isRequired, value }}>
  <Input {label} {description} {placeholder} {isRequired} {value} />
</Story>

<!-- Required Example -->
<Story
  name="Input Required"
  args={{
    label: 'Required Input',
    description: 'This is required',
    isRequired: true,
  }}
>
  <Input {label} {description} {placeholder} isRequired={true} {value} />
</Story>

<!-- No Description Example -->
<Story
  name="SelectNoDescription"
  args={{
    label: 'Select without Description',
  }}
>
  <Input {label} {placeholder} {isRequired} {value} />
</Story>

<!-- Error Example -->
<Story
  name="Input Error"
  args={{
    label: 'Input with Error',
  }}
>
  <Input {label} {placeholder} {isRequired} {value} {error} />
</Story>
