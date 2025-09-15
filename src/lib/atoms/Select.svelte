<script lang="ts">
  import { Root, Trigger, Content, Item } from '../shadcnComponents/ui/select';
</script>

<Root type="single">
  <Trigger class="w-[180px]">Trigger</Trigger>
  <Content>
    <Item value="light">Light</Item>
    <Item value="dark">Dark</Item>
    <Item value="system">System</Item>
  </Content>
</Root>
