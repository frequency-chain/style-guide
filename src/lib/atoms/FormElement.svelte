<script lang="ts">
  import LoadingIcon from '../design-system/assets/icons/LoadingIcon.svelte';
  import { Error } from '../design-system/assets/index';

  interface Props {
    label?: string;
    isRequired?: boolean;
    description?: string;
    error: string | undefined;
    isLoading?: boolean;
    elementId?: string | null;
    children?: import('svelte').Snippet;
  }

  let {
    label = '',
    isRequired = false,
    description = '',
    error,
    isLoading = false,
    elementId = '',
    children,
  }: Props = $props();

  const labelNoSpaces = label.split(' ').join('');
  const id = `form-element-${labelNoSpaces}`;
</script>

<div class="gap-f4 flex flex-col" {id}>
  <label class="form-item-label" for={elementId}>
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
    {:else if isLoading}
      <LoadingIcon />
    {/if}
  </div>

  {#if error}
    <span class="form-error">{error}</span>
  {/if}
</div>
