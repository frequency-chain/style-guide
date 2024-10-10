<script lang="ts">
  import { Root, Item, Trigger, Content } from '../shadcnComponents/ui/accordion';

  export let trigger = '';
  export let content = '';
</script>

<Root>
  <Item value="item-1">
    <Trigger>{trigger}</Trigger>
    <Content>{content}</Content>
  </Item>
</Root>
