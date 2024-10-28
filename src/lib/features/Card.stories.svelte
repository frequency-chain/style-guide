<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { UserKey, Wallet } from '/src/lib/assets';
  import Card from './Card.svelte';
</script>

<Meta title="UI Components/Features/Card" component={Card} />

<!-- Primary -->
<Story name="Default Card">
  <Card></Card>
</Story>

<!-- 320px Width -->
<Story name="Specific Width">
  <Card title="320px width" class="my-4 w-f320" icon={UserKey} />
</Story>

<!-- Half Width -->
<Story name="Half Width">
  <Card title="Half width" icon={Wallet} class="mb-4 w-1/2">
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
  </Card>
</Story>

<!-- Another color -->
<Story name="Alt Color">
  <Card title="Alternate color card" titleColor="cream" bgColor="teal">
    <div slot="content">
      <h4 class="md font-bold text-navy">Slot content title</h4>
      <p class="w-fit rounded bg-white px-2 text-error">Slot content: Error text!</p>
      <p class="text-white">Slot content: error message!</p>
    </div>
  </Card>
</Story>
