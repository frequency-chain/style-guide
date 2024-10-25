<script lang="ts">
    import {Meta, Story} from '@storybook/addon-svelte-csf';
    import Modal from './Modal.svelte';
    import Button from '../atoms/Button.svelte';
    import Select from '../atoms/Select.svelte';
    import {Close} from '../shadcnComponents/ui/dialog';

    // select props
    export let label = 'Select Option';
    export let selectDescription = 'Please choose an option';
    export let placeholder = 'Select an option...';
    export let isRequired = false;
    export let options = [
        {optionLabel: 'Option 1', value: '1'},
        {optionLabel: 'Option 2', value: '2'},
        {optionLabel: 'Option 3', value: '3'},
    ];

    // Modal props
    export let title = "Title";
    export let description = "This is the description.";
</script>

<Meta title="UI Components/Features/Modal" component={Modal}/>

<!--Primary-->
<Story name="Primary Modal">
    <Modal {title} {description}>
        <Button slot="trigger">Open</Button>
        <form slot="body">
            <Select {label} description={selectDescription} {placeholder} {isRequired} {options}/>
            <Close>
                <Button class="mt-f20">Submit</Button>
            </Close>
        </form>
    </Modal>
</Story>

<!--No Description-->
<Story name="No Description">
    <Modal {title}>
        <Button slot="trigger">Open</Button>
        <form slot="body">
            <Select {label} description={selectDescription} {placeholder} {isRequired} {options}/>
            <Close>
                <Button class="mt-f20">Submit</Button>
            </Close>
        </form>
    </Modal>
</Story>

<!--Text Body-->
<Story name="Text Body">
    <Modal {title} {description}>
        <Button slot="trigger">Open</Button>
        <div slot="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad aliquam animi aperiam blanditiis
            excepturi inventore ipsum iste, labore maiores minus nostrum obcaecati, quasi, ratione reprehenderit rerum
            suscipit temporibus.
        </div>
    </Modal>
</Story>
