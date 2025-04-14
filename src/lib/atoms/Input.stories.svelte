<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Input from './Input.svelte';

  export let label = 'What is your favorite food?';
  export let description = 'Ex: Spaghetti and Meatballs';
  export let placeholder = 'Enter your response...';
  export let isRequired = false;
  export let value = '';
  export let error = 'Error message.';

  const { Story } = defineMeta({ title: 'UI Components/Atoms/Input', component: Input });
</script>

<!-- Primary -->
<Story name="Input Primary" args={{ label, description, placeholder, isRequired, value }}>
  <Input {label} {description} {placeholder} {isRequired} {value} />
</Story>

<!-- Required Example -->
<Story name="Input Required" args={{ label: 'Required Input', description: 'This is required', isRequired: true }}>
  <Input {label} {description} {placeholder} isRequired={true} {value} />
</Story>

<!-- No Description Example -->
<Story name="SelectNoDescription" args={{ label: 'Select without Description' }}>
  <Input {label} {placeholder} {isRequired} {value} />
</Story>

<!-- Error Example -->
<Story name="Input Error" args={{ label: 'Input with Error' }}>
  <Input {label} {placeholder} {isRequired} {value} {error} />
</Story>

<!-- Disabled Example -->
<Story name="Input Disabled" args={{ label: 'Input Disabled' }}>
  <Input {label} {placeholder} {isRequired} {value} disabled={true} />
</Story>
