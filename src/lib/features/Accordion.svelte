<script lang="ts">
  import { Root, Item, Trigger, Content } from '../shadcnComponents/ui/accordion';

  interface Props {
    trigger?: string;
    content?: string;
  }

  let { trigger = '', content = '' }: Props = $props();
</script>

<Root>
  <Item value="item-1">
    <Trigger>{trigger}</Trigger>
    <Content>{content}</Content>
  </Item>
</Root>
