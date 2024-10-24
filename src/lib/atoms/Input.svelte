<script lang="ts">
    import {cn} from "../../utils/utils";
    import {Error} from "../assets";

    export let label = 'Label';
    export let isRequired = false;
    export let description = '';
    export let value = '';
    export let placeholder = 'Enter some text...';
    export let error: string | undefined;

    function handleInput(event) {
        value = event.target.value;
    }
</script>

<div class="flex flex-col gap-f4">
    <label class="form-item-label">
        {label}
        {#if isRequired}
            <span class="text-error">*</span>
        {/if}
    </label>
    {#if description}
        <span class="form-item-description">{description}</span>
    {/if}
    <div class="flex items-center gap-f12">
        <input
                class={cn(
      'border-input bg-cream aria-[invalid]:border-destructive data-[placeholder]:[&>span]:text-muted-foreground flex h-10 w-full max-w-[388px] items-center justify-between rounded-md border px-3 py-2 sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      error ? 'border-2 border-error' : 'border border-gray3',
      $$restProps.class
    )}
                type="text"
                bind:value={value}
                placeholder={placeholder}
                on:input={handleInput}
        />
        {#if error}
            <Error/>
        {/if}
    </div>
    {#if error}
        <span class="form-error">{error}</span>
    {/if}
</div>