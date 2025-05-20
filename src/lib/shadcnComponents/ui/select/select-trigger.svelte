<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import { cn } from '../../../utils/utils';
  import { Error, Chevron } from '../../../design-system/assets/index';
  import { formItem } from '../../../styles/formItemStyles';

  type $$Props = SelectPrimitive.TriggerProps;
  type $$Events = SelectPrimitive.TriggerEvents;

  interface Props extends $$Props {
    error: string | undefined;
    class?: $$Props['class'];
    children?: import('svelte').Snippet;
  }

  let { error, children, ...rest }: Props = $props();
</script>

<div class="gap-f12 flex items-center">
  <SelectPrimitive.Trigger
    {...rest}
    class={formItem({
      error: !!error,
      height: 'sm',
      class: cn(
        'aria-expanded:border-primary cursor-pointer aria-expanded:border-2',
        'ring-offset-background focus-visible:ring-offset-2',
        rest.class
      ),
    })}
  >
    {@render children?.()}
    <Chevron class="h-4 w-4" />
  </SelectPrimitive.Trigger>
  {#if error}
    <Error />
  {/if}
</div>
