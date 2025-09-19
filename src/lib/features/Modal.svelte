<script lang="ts">
  import * as Dialog from '../shadcnComponents/ui/dialog/index';
  import type { DialogRootProps } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends DialogRootProps, HTMLAttributes<HTMLElement> {
    title?: string;
    description?: string;
    open?: boolean;
    trigger?: import('svelte').Snippet;
    body?: import('svelte').Snippet;
    id?: string;
  }

  let { title = '', description = '', open, trigger, body, id, ...rest }: Props = $props();
</script>

<Dialog.Root {...rest} {open}>
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
    <div class="max-h-[60vh] overflow-y-scroll">
      {@render body?.()}
    </div>
  </Dialog.Content>
</Dialog.Root>
