<script lang="ts">
  import { Root, Trigger, Content, Header, Title, Description } from '../shadcnComponents/ui/dialog';

  interface Props {
    title?: string;
    description?: string;
    trigger?: import('svelte').Snippet;
    body?: import('svelte').Snippet;
  }

  let { title = '', description = '', trigger, body }: Props = $props();
</script>

<Root>
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
