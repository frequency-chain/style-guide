<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Root, Item, Trigger, Content } from '../shadcnComponents/ui/accordion';

  interface Props {
    trigger: string;
    content: string | Snippet;
  }

  let { trigger, content }: Props = $props();

  console.log(content);
  console.log(typeof content);
</script>

<Root>
  <Item value="item-1">
    <Trigger>{trigger}</Trigger>
    <Content
      >{#if typeof content === 'function'}
        {@render content()}
      {:else}
        {content}
      {/if}</Content
    >
  </Item>
</Root>
