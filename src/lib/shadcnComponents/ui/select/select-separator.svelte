<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils';

  type $$Props = SelectPrimitive.SeparatorProps;

  let { ...rest }: $$Props = $props();
</script>

<SelectPrimitive.Separator {...rest} class={cn('bg-muted -mx-1 my-1 h-px', rest.class)} />
