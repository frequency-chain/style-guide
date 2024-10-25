<script lang="ts">
  import { Root, Trigger, Content, Header, Title, Description } from '../shadcnComponents/ui/dialog';

  export let title = '';
  export let description;
</script>

<Root>
  <Trigger>
    <slot name="trigger" />
  </Trigger>
  <Content>
    <Header>
      <Title>{title}</Title>
      {#if description}
        <Description>{description}</Description>
      {/if}
    </Header>
    <slot name="body" />
  </Content>
</Root>
