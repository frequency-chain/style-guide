<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui-old';
  import { cn } from '../../../utils/utils';
  import type { Snippet } from 'svelte';

  type $$Props = SelectPrimitive.LabelProps;

  interface Props extends $$Props {
    isRequired: boolean;
    children?: Snippet;
  }

  let { isRequired, children, ...rest }: Props = $props();
</script>

<SelectPrimitive.Label {...rest} class={cn('form-item-label', rest.class)}>
  {@render children?.()}
  {#if isRequired}
    <span class="text-error">*</span>
  {/if}
</SelectPrimitive.Label>
