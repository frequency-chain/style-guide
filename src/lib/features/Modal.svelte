<script lang="ts">
  import type { DialogRootProps } from 'bits-ui';
  import { Root, Trigger, Content, Header, Title, Description } from '../shadcnComponents/ui/dialog';
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

<Root {...rest}>
  <Trigger>
    {@render trigger?.()}
  </Trigger>
  <Content {id}>
    <Header>
      <Title>{title}</Title>
      {#if description}
        <Description>{description}</Description>
      {/if}
    </Header>
    {@render body?.()}
  </Content>
</Root>
