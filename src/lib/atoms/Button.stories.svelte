<script>
    import {Meta, Story} from '@storybook/addon-svelte-csf';

    import Button from './Button.svelte';
</script>

<Meta title="UI Components/Atoms/Button" component={Button}/>

<Story name="PrimaryButton">
    <div class="flex flex-col gap-f8">
        <Button size="xs">P-XS</Button>
        <Button size="sm">Primary SM</Button>
        <Button size="normal">Primary Normal</Button>
        <Button size="md">Primary MD</Button>
        <Button size="lg">Primary LG</Button>
    </div>
</Story>

<!-- Secondary -->
<Story name="Secondary">
    <div class="flex flex-col gap-f8">
        <Button type="secondary" size="xs">S-XS</Button>
        <Button type="secondary" size="sm">Secondary SM</Button>
        <Button type="secondary" size="normal">Secondary Normal</Button>
        <Button type="secondary" size="md">Secondary MD</Button>
        <Button type="secondary" size="lg">Secondary LG</Button>
    </div>
</Story>

<!-- Disabled -->
<Story name="Disabled">
    <div class="flex flex-col gap-f8">
        <Button size="xs" disabled={true}>P-XS</Button>
        <Button size="sm" disabled={true}>Primary SM</Button>
        <Button size="normal" disabled={true}>Primary Normal</Button>
        <Button size="md" disabled={true}>Primary MD</Button>
        <Button size="lg" disabled={true}>Primary LG</Button>
    </div>
</Story>
