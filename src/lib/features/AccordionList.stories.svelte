<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import AccordionList from './AccordionList.svelte';
  import Accordion from './Accordion.svelte';

  const { Story } = defineMeta({ title: 'UI Components/Features/AccordionList', component: AccordionList });
</script>

{#snippet htmlContent1()}
  <div>
    <h2 class="font-bold">Hello there.</h2>
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
  {#snippet children(args)}
    <AccordionList {...args}>
      <Accordion trigger="Hello world." content="Hello there." />
      <Accordion trigger="Are you there?" content="Yes I am!" />
    </AccordionList>
  {/snippet}
</Story>

<!-- With HTML Content -->
<Story name="HTMLContent" id="accordionlistHtmlContent">
  {#snippet children(args)}
    <AccordionList {...args}>
      <Accordion trigger="Hello world." content={htmlContent1} />
      <Accordion trigger="Are you there?" content={htmlContent2} />
    </AccordionList>
  {/snippet}
</Story>
