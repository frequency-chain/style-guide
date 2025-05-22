<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Root, Item, Trigger, Content } from '../shadcnComponents/ui/accordion';

  interface Props {
    trigger: string;
    content: string | Snippet;
    intent?: 'light' | 'dark';
  }

  let { trigger, content, intent = 'dark' }: Props = $props();
</script>

<Root>
  <Item value="item-1" class={intent === 'light' ? 'text-white' : 'text-black'}>
    <Trigger {intent}>{trigger}</Trigger>
    <Content
      >{#if typeof content === 'function'}
        {@render content()}
      {:else}
        {content}
      {/if}</Content
    >
  </Item>
</Root>
