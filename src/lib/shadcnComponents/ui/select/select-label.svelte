<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils';

  type $$Props = SelectPrimitive.LabelProps & { isRequired: boolean };

  interface Props {
    isRequired: boolean;
    class?: $$Props['class'];
    children?: import('svelte').Snippet;
    [key: string]: any;
  }

  let { isRequired, class: className = undefined, children, ...rest }: Props = $props();
</script>

<SelectPrimitive.Label class={cn('form-item-label', className)} {...rest}>
  {@render children?.()}
  {#if isRequired}
    <span class="text-error">*</span>
  {/if}
</SelectPrimitive.Label>
