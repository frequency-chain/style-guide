<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Accordion from './Accordion.svelte';

  const { Story } = defineMeta({ title: 'UI Components/Features/Accordion', component: Accordion });
</script>

<Story name="Accordion" args={{ trigger: 'Hello world.', content: 'Hello there.' }}>
  {#snippet children(args)}
    <Accordion {...args} />
  {/snippet}
</Story>
