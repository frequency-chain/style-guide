<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Button from './Button.svelte';

  const { Story } = defineMeta({ title: 'UI Components/Atoms/Button', component: Button });
</script>

<!-- Primary Button - Type Button -->
<Story name="PrimaryButton">
  <div class="gap-f8 flex flex-col">
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
  <div class="gap-f8 p-f24 bg-gray3 flex flex-col">
    <Button variant="secondary" size="xs">S-XS</Button>
    <Button variant="secondary" size="xs" active="true">S-XS Active</Button>
    <Button variant="secondary" size="sm">Secondary SM</Button>
    <Button variant="secondary" size="normal">Secondary Normal</Button>
    <Button variant="secondary" size="md">Secondary MD</Button>
    <Button variant="secondary" size="lg">Secondary LG</Button>
    <Button variant="secondary" size="auto">Secondary Auto</Button>
    <Button variant="secondary" size="full">Secondary Full</Button>
  </div>
</Story>

<!-- Disabled -->
<Story name="Disabled">
  <div class="gap-f8 flex flex-col">
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
