<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Button from './Button.svelte';
</script>

<Meta title="UI Components/Atoms/Button" component={Button} />

<!-- Primary Button - Type Button -->
<Story name="PrimaryButton">
  <div class="flex flex-col gap-f8">
    <Button size="xs">P-XS</Button>
    <Button size="xs" active="true">P-XS Active</Button>
    <Button size="sm">Primary SM</Button>
    <Button size="normal">Primary Normal</Button>
    <Button size="md">Primary MD</Button>
    <Button size="lg">Primary LG</Button>
    <Button size="auto">Primary Auto</Button>
    <Button size="full">Primary Full</Button>
  </div>
</Story>

<!-- Primary Button - Type Link -->
<Story name="PrimaryLinkButton">
  <div class="m-6">
    <Button size="normal" href="https://www.google.com/" target="_blank">Primary</Button>
  </div>
  <div class="m-6">
    <Button size="normal" href="?path=/story/ui-components-atoms-button--primary-button">Internal</Button>
  </div>
  <div class="m-6">
    <Button size="normal" href="https://www.google.com/" target="_blank" disabled={true}>Disabled</Button>
  </div>
</Story>

<!-- Secondary -->
<Story name="Secondary">
  <div class="flex flex-col gap-f8">
    <Button type="secondary" size="xs">S-XS</Button>
    <Button type="secondary" size="xs" active="true">S-XS Active</Button>
    <Button type="secondary" size="sm">Secondary SM</Button>
    <Button type="secondary" size="normal">Secondary Normal</Button>
    <Button type="secondary" size="md">Secondary MD</Button>
    <Button type="secondary" size="lg">Secondary LG</Button>
    <Button type="secondary" size="auto">Secondary Auto</Button>
    <Button type="secondary" size="full">Secondary Full</Button>
  </div>
</Story>

<!-- Disabled -->
<Story name="Disabled">
  <div class="flex flex-col gap-f8">
    <Button size="xs" disabled={true}>P-XS</Button>
    <Button size="xs" disabled={true} active="true">P-XS</Button>
    <Button size="sm" disabled={true}>Primary SM</Button>
    <Button size="normal" disabled={true}>Primary Normal</Button>
    <Button size="md" disabled={true}>Primary MD</Button>
    <Button size="lg" disabled={true}>Primary LG</Button>
    <Button size="auto" disabled={true}>Primary Auto</Button>
    <Button size="full" disabled={true}>Primary Full</Button>
  </div>
</Story>
