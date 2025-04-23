<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils';
  import type { SvelteComponent, Snippet } from 'svelte';

  type $$Props = SelectPrimitive.LabelProps & { isRequired: boolean };

  interface Props extends SvelteComponent {
    isRequired: boolean;
    class?: $$Props['class'];
    children?: Snippet;
  }

  let { isRequired, class: className = undefined, children, ...rest }: Props = $props();
</script>

<SelectPrimitive.Label class={cn('form-item-label', className)} {...rest}>
  {@render children?.()}
  {#if isRequired}
    <span class="text-error">*</span>
  {/if}
</SelectPrimitive.Label>
