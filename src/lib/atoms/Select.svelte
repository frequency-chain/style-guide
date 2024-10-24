<script lang="ts">
    import {Root, Trigger, Value, Content, Item, Label} from '../shadcnComponents/ui/select';

    export let label: string;
    export let description: string | undefined;
    export let placeholder: string | undefined;
    export let isRequired: boolean = false;
    export let error: string | undefined;
    export let options: { optionLabel: string; value: string }[];
</script>

<Root>
    <Label {isRequired}>{label}</Label>
    {#if description}
        <span class="form-item-description">{description}</span>
    {/if}
    <Trigger {error}>
        <Value {placeholder}/>
    </Trigger>
    <Content class={'border border-gray3'}>
        {#each options as option}
            <Item value={option.value}>{option.optionLabel}</Item>
        {/each}
    </Content>
    {#if error}
        <span class="form-error">{error}</span>
    {/if}
</Root>