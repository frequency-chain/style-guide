<script lang="ts">
  import * as Dialog from '../shadcnComponents/ui/dialog/index';
  import type { DialogRootProps } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends DialogRootProps, HTMLAttributes<HTMLElement> {
    title?: string;
    description?: string;
    trigger?: import('svelte').Snippet;
    body?: import('svelte').Snippet;
    id?: string;
  }

  let { title = '', description = '', trigger, body, id, ...rest }: Props = $props();
</script>

<Dialog.Root {...rest}>
  <Dialog.Trigger>{@render trigger?.()}</Dialog.Trigger>
  <Dialog.Content {id}>
    <Dialog.Header>
      <Dialog.Title>{title}</Dialog.Title>
      {#if description}
        <Dialog.Description>
          {description}
        </Dialog.Description>
      {/if}
    </Dialog.Header>
    {@render body?.()}
  </Dialog.Content>
</Dialog.Root>
