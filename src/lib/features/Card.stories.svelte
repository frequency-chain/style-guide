<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { UserKey, Wallet } from '/src/lib/assets';
  import Card from './Card.svelte';
</script>

<Meta title="UI Components/Features/Card" component={Card} />

<!-- Primary -->
<Story name="Card">
  <Card></Card>
  <Card
    title="320px width card"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
    icon={UserKey}
    class="w-f320 my-4"
  />
  <Card
      title="Half width card"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
      icon={Wallet}
      class="w-1/2 mb-4"
  />
</Story>
