<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import AccordionList from './AccordionList.svelte';
  import Accordion from './Accordion.svelte';
</script>

<Meta title="UI Components/Features/AccordionList" component={AccordionList} />

<!-- Primary -->
<Story name="AccordionList">
  <AccordionList>
    <Accordion trigger="Hello world." content="Hello there." />
  </AccordionList>
  <AccordionList>
    <Accordion trigger="Are you there?" content="Yes I am!" />
  </AccordionList>
</Story>
