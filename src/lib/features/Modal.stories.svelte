<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Modal from './Modal.svelte';
  import Button from '../atoms/Button.svelte';

  const title = 'Title';
  const description = 'This is the description.';

  const { Story } = defineMeta({ title: 'UI Components/Features', component: Modal });
</script>

{#snippet trigger()}
  <Button>Open</Button>
{/snippet}
{#snippet body()}
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugit iste labore sit suscipit nisi cumque iure! Sed
    exercitationem eos sint eum eaque quos quo, impedit cumque eveniet accusantium nam?
  </div>
{/snippet}

<Story name="Default Modal" args={{ ...Modal.props, title, description, trigger, body, id: '' }}>
  {#snippet children(args)}
    <Modal {...args} />
  {/snippet}
</Story>
