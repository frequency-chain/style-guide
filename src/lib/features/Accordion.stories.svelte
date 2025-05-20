<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Accordion from './Accordion.svelte';

  const { Story } = defineMeta({ title: 'UI Components/Features', component: Accordion });
</script>

<Story name="Default Accordion" args={{ ...Accordion.props, trigger: 'Hello world.', content: 'Hello there.' }}>
  {#snippet children(args)}
    <Accordion {...args} />
  {/snippet}
</Story>
