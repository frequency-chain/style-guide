<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { UserKey, Wallet } from '/src/lib/assets';
  import Card from './Card.svelte';

  const { Story } = defineMeta({ title: 'UI Components/Features', component: Card });
</script>

<Story name="Default Card" args={{ ...Card.props }}>
  {#snippet children(args)}
    <Card {...args} />
  {/snippet}
</Story>
