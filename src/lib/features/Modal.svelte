<script lang="ts">
  import Button from '../atoms/Button.svelte';
  import { Root, Trigger, Content, Header, Title, Description } from '../shadcnComponents/ui/dialog';
</script>

<Root>
  <Trigger><Button>Open</Button></Trigger>
  <Content>
    <Header>
      <Title>Are you sure absolutely sure?</Title>
      <Description>
        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
      </Description>
    </Header>
  </Content>
</Root>
