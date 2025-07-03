<script lang="ts">
  import type { Dialog } from 'bits-ui';
  import { Root, Trigger, Content, Header, Title, Description } from '../shadcnComponents/ui/dialog';

  interface Props {
    title?: string;
    description?: string;
    trigger?: import('svelte').Snippet;
    body?: import('svelte').Snippet;
    rootProps?: Dialog.Root['props'];
  }

  let { title = '', description = '', trigger, body, rootProps }: Props = $props();
</script>

<Root {...rootProps}>
  <Trigger>
    {@render trigger?.()}
  </Trigger>
  <Content>
    <Header>
      <Title>{title}</Title>
      {#if description}
        <Description>{description}</Description>
      {/if}
    </Header>
    {@render body?.()}
  </Content>
</Root>
