<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { UserKey, Wallet } from '/src/lib/assets';
  import Card from './Card.svelte';

  const { Story } = defineMeta({ title: 'UI Components/Features/Card', component: Card });
</script>

<Story name="Card" args={{ title, bgColor, titleColor, icon, content }}>
  {#snippet children(args)}
    <Card {...args} />
  {/snippet}
</Story>
