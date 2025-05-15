<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';

  const { Story } = defineMeta({ title: 'UI Components/Atoms', component: Button });
</script>

<Story
  name="Default Button"
  args={{
    href,
    variant,
    size,
    disabled,
    active,
    target,
    children,
  }}
>
  {#snippet children(args)}
    <Button {...args}>Click Here</Button>
  {/snippet}
</Story>
