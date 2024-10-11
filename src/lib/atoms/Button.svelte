<script lang="ts">
    import Typography from '../typography/Typography.svelte';

    export let onClick = () => {
    };

    /**
     * Specify the kind of button.
     */
    export let type: 'primary' | 'secondary' = 'primary';

    /**
     * Specify the size of the component.
     */
    export let size: 'xs' | 'sm' | 'normal' | 'md' | 'lg' = 'normal';

    /**
     * Specify if the component is disabled.
     */
    export let disabled: boolean = false;

    // Define button type classes
    $: typeClass =
        type === 'primary'
            ? 'bg-secondary border-secondary hover:border-white hover:bg-transparent'
            : 'bg-transparent border-white hover:border-primary hover:text-primary';

    // Define disabled classes
    $: disabledClass = disabled ? 'bg-gray3 border-gray3 cursor-default pointer-events-none' : '';

    // Define final brn style classes
    $: btnStylesClass = disabled ? disabledClass : typeClass;

    // Define button size classes
    $: btnSizeClass =
        {
            xs: 'w-[115px]',
            sm: 'w-[197px]',
            md: 'w-[339px]',
            lg: 'w-[388px]',
            normal: 'w-[263px]',
        }[size] || 'w-[263px]';
</script>

<button
        {...$$restProps}
        on:click|preventDefault={onClick}
        class={`rounded-full border p-2.5 text-center text-white transition-all ${btnStylesClass} ${btnSizeClass} ${$$restProps.class ?? ''}`
        }
        {disabled}
>
    <Typography bold={true} class="flex items-center justify-center gap-2">
        <slot/>
    </Typography>
</button>
