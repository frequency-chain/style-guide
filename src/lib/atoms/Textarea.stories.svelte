<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Textarea from './Textarea.svelte';

  export let label = 'Tell me about your favorite food.';
  export let description = 'Please provide a paragraph about your choice.';
  export let placeholder = 'Enter your response...';
  export let isRequired = false;
  export let value = '';
  export let error = 'Error message.';

  const { Story } = defineMeta({ title: 'UI Components/Atoms/Textarea', component: Textarea });
</script>

<!-- Primary -->
<Story name="Textarea Primary" args={{ label, description, placeholder, isRequired, value }}>
  <Textarea {label} {description} {placeholder} {isRequired} {value} />
</Story>

<!-- Required Example -->
<Story
  name="Textarea Required"
  args={{ label: 'Required Textarea', description: 'This is required', isRequired: true }}
>
  <Textarea {label} {description} {placeholder} isRequired={true} {value} />
</Story>

<!-- No Description Example -->
<Story name="SelectNoDescription" args={{ label: 'Select without Description' }}>
  <Textarea {label} {placeholder} {isRequired} {value} />
</Story>

<!-- Error Example -->
<Story name="Textarea Error" args={{ label: 'Textarea with Error' }}>
  <Textarea {label} {placeholder} {isRequired} {value} {error} />
</Story>

<!-- Extra classes Example -->
<Story name="Textarea + Class" args={{ label: 'Textarea with extra classes and rows' }}>
  <Textarea {label} {placeholder} {value} rows={5} class="max-w-[800px]"></Textarea>
</Story>
