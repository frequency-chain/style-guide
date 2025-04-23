<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Modal from './Modal.svelte';
  import Button from '../atoms/Button.svelte';
  import Select from '../atoms/Select.svelte';
  import Close from '../atoms/Close.svelte';

  // select props
  export let label = 'Select Option';
  export let selectDescription = 'Please choose an option';
  export let placeholder = 'Select an option...';
  export let isRequired = false;
  export let options = [
    { optionLabel: 'Option 1', value: '1' },
    { optionLabel: 'Option 2', value: '2' },
    { optionLabel: 'Option 3', value: '3' },
  ];

  // Modal props
  export let title = 'Title';
  export let description = 'This is the description.';

  const { Story } = defineMeta({ title: 'UI Components/Features/Modal', component: Modal });
</script>

<!--Primary-->
<Story name="Primary Modal" id="modalPrimary">
  <Modal {title} {description}>
    {#snippet trigger()}
      <Button>Open</Button>
    {/snippet}
    {#snippet body()}
      <form>
        <Select {label} description={selectDescription} {placeholder} {isRequired} {options} />
        <Close>
          <Button class="mt-f20">Submit</Button>
        </Close>
      </form>
    {/snippet}
  </Modal>
</Story>

<!--No Description-->
<Story name="No Description" id="modalNoDesc">
  <Modal {title}>
    {#snippet trigger()}
      <Button>Open</Button>
    {/snippet}
    {#snippet body()}
      <form>
        <Select {label} description={selectDescription} {placeholder} {isRequired} {options} />
        <Close>
          <Button class="mt-f20">Submit</Button>
        </Close>
      </form>
    {/snippet}
  </Modal>
</Story>

<!--Text Body-->
<Story name="Text Body" id="modalText">
  <Modal {title} {description}>
    {#snippet trigger()}
      <Button>Open</Button>
    {/snippet}
    {#snippet body()}
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad aliquam animi aperiam blanditiis
        excepturi inventore ipsum iste, labore maiores minus nostrum obcaecati, quasi, ratione reprehenderit rerum
        suscipit temporibus.
      </div>
    {/snippet}
  </Modal>
</Story>
