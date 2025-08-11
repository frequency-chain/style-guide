<script lang="ts">
  import type { DialogProps } from 'bits-ui';
  import { Root, Trigger, Content, Header, Title, Description } from '../shadcnComponents/ui/dialog';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends DialogProps, HTMLAttributes<HTMLElement> {
    title?: string;
    description?: string;
    trigger?: import('svelte').Snippet;
    body?: import('svelte').Snippet;
  }

  let { title = '', description = '', trigger, body, ...rest }: Props = $props();
</script>

<Root {...rest}>
  <Trigger>
    {@render trigger?.()}
  </Trigger>
  <Content id={rest.id}>
    <Header>
      <Title>{title}</Title>
      {#if description}
        <Description>{description}</Description>
      {/if}
    </Header>
    {@render body?.()}
  </Content>
</Root>
