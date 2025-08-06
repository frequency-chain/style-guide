<script lang="ts">
  import { Error } from '../design-system/assets/index';

  interface Props {
    label?: string;
    isRequired?: boolean;
    description?: string;
    error: string | undefined;
    children?: import('svelte').Snippet;
  }

  let { label = '', isRequired = false, description = '', error, children }: Props = $props();

  const labelNoSpaces = label.split(' ').join('');
  const id = `form-element-${labelNoSpaces}`;
</script>

<div class="gap-f4 flex flex-col">
  <label class="form-item-label" for={id}>
    {label}
    {#if isRequired}
      <span class="text-error">*</span>
    {/if}
  </label>

  {#if description}
    <span class="form-item-description">{description}</span>
  {/if}

  <div class="gap-f12 flex items-center">
    {@render children?.()}

    {#if error}
      <Error />
    {/if}
  </div>

  {#if error}
    <span class="form-error">{error}</span>
  {/if}
</div>
