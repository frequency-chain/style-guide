<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

    import Accordion from './Accordion.svelte';
</script>

<Meta title="UI Components/Features/Accordion" component={Accordion}/>

<!-- Primary -->
<Story name="Accordion">
  <Accordion trigger="Hello world." content="Hello there." />
</Story>
