<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Accordion from './Accordion.svelte';

  const { Story } = defineMeta({
    title: 'UI Components/Features',
    component: Accordion,
  });

  const defaultItems = [
    {
      value: '1',
      title: 'What is the meaning of life?',
      content: 'To become a better person, to help others, and to leave the world a better place than you found it.',
    },
    {
      value: '2',
      title: 'How do I become a better person?',
      content: 'Read books, listen to podcasts, and surround yourself with people who inspire you.',
    },
    {
      value: '3',
      title: 'What is the best way to help others?',
      content: 'Give them your time, attention, and love.',
    },
  ];
</script>

<Story name="Default Accordion" args={{ ...Accordion.props, items: defaultItems }}>
  {#snippet children(args)}
    <Accordion {...args} />
  {/snippet}
</Story>

{#snippet Content1()}
  <p class="bg-red-300">
    To become a better person, to help others, and to leave the world a better place than you found it.
  </p>
{/snippet}

{#snippet Content2()}
  <p class="bg-yellow-300">Read books, listen to podcasts, and surround yourself with people who inspire you.</p>
{/snippet}

{#snippet Content3()}
  <p class="bg-green-300">Give them your time, attention, and love.</p>
{/snippet}

<Story
  name="Accordion With Snippet"
  args={{
    ...Accordion.props,
    items: [
      { value: '1', title: 'What is the meaning of life?', content: Content1 },
      { value: '2', title: 'How do I become a better person?', content: Content2 },
      { value: '3', title: 'What is the best way to help others?', content: Content3 },
    ],
  }}
>
  {#snippet children(args)}
    <Accordion {...args} />
  {/snippet}
</Story>
