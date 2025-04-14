<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Accordion from './Accordion.svelte';

  const { Story } = defineMeta({ title: 'UI Components/Features/Accordion', component: Accordion });
</script>

<!-- Primary -->
<Story name="Primary" id="accordion">
  <Accordion trigger="Hello world." content="Hello there." />
</Story>
