<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils';

  export let isRequired: boolean;

  type $$Props = SelectPrimitive.LabelProps & { isRequired: boolean };

  let className: $$Props['class'] = undefined;
  export { className as class };
</script>

<SelectPrimitive.Label class={cn('form-item-label', className)} {...$$restProps}>
  <slot />
  {#if isRequired}
    <span class="text-error">*</span>
  {/if}
</SelectPrimitive.Label>
