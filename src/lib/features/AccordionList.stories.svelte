<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import AccordionList from './AccordionList.svelte';
  import Accordion from './Accordion.svelte';

  const { Story } = defineMeta({ title: 'UI Components/Features/AccordionList', component: AccordionList });
</script>

{#snippet htmlContent1()}
  <div class="bg-primary">
    <h2>Hello there.</h2>
    <b>Nice to see ya!!</b>
  </div>
{/snippet}

{#snippet htmlContent2()}
  <h2>Yes I am!</h2>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
{/snippet}

<!-- Primary -->
<Story name="Primary" id="accordionlist">
  <AccordionList>
    <Accordion trigger="Hello world." content="Hello there." />
  </AccordionList>
  <AccordionList>
    <Accordion trigger="Are you there?" content="Yes I am!" />
  </AccordionList>
</Story>

<!-- With HTML Content -->
<Story name="HTMLContent" id="accordionlistHtmlContent">
  <AccordionList>
    <Accordion trigger="Hello world." content={htmlContent1} />
  </AccordionList>
  <AccordionList>
    <Accordion trigger="Are you there?" content={htmlContent2} />
  </AccordionList>
</Story>
