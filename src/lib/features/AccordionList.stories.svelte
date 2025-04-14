<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import AccordionList from './AccordionList.svelte';
  import Accordion from './Accordion.svelte';

  const { Story } = defineMeta({ title: 'UI Components/Features/AccordionList', component: AccordionList });
</script>

<!-- Primary -->
<Story name="Primary" id="accordionlist">
  <AccordionList>
    <Accordion trigger="Hello world." content="Hello there." />
  </AccordionList>
  <AccordionList>
    <Accordion trigger="Are you there?" content="Yes I am!" />
  </AccordionList>
</Story>
