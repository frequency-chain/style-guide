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
    icon={UserKey}
    class="w-f320 my-4"
  />
  <Card
      title="Half width card"
      icon={Wallet}
      class="w-1/2 mb-4"
  >
    <p slot="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
    </p>
  </Card>
  <Card
    title="Another color card"
    titleColor="cream"
    bgColor="teal"
    color="white"
    >
    <div slot="content">
      <h4 class="font-bold md text-navy">Slot content title</h4>
      <p class="text-error bg-white w-fit px-2 rounded">Slot content: Error text!</p>
      <p class="">Slot content: error message!</p>
    </div>
  </Card>
</Story>
