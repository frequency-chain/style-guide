<script>
  import {Meta, Story} from '@storybook/addon-svelte-csf';

  import Button from './Button.svelte';
</script>

<Meta title="Design System/Atoms/Button" component={Button} />

<!-- Primary -->
<Story name="PrimaryButton">
  <div class="flex flex-col gap-2">
    <Button size="xs" href="https://google.com">Primary XS</Button>
    <Button size="sm" href="https://google.com">Primary SM</Button>
    <Button size="normal" href="https://google.com">Primary Normal</Button>
    <Button size="md" href="https://google.com">Primary MD</Button>
    <Button size="lg" href="https://google.com">Primary LG</Button>
  </div>
</Story>

<!-- Secondary -->
<Story name="Secondary">
  <Button type="secondary" href="https://google.com">Secondary</Button>
</Story>
<!-- <Story name="Secondary with icon on left">
    <Button left type="secondary" href="https://google.com"
        ><Icon symbol="github" type="dark" />Github</Button>
</Story>
<Story name="Secondary with icon on right">
    <Button right type="secondary" href="https://google.com"
        >Github<Icon symbol="github" type="dark" /></Button>
</Story> -->
