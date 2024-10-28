<script lang="ts">
  import { Error } from '../assets/index';

  export let label = '';
  export let isRequired = false;
  export let description = '';
  export let value: string = '';
  export let placeholder = 'Enter some text...';
  export let error: string | undefined;
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
    <slot />

    {#if error}
      <Error />
    {/if}
  </div>

  {#if error}
    <span class="form-error">{error}</span>
  {/if}
</div>
