<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { Intent } from '../utils/types';
  import { Root, Item, Trigger, Content } from '../shadcnComponents/ui/accordion';

  interface Props {
    intent?: Intent;
    items: { value: string; title: string; content: string | Snippet }[];
  }

  let { intent = 'dark', items }: Props = $props();
</script>

<Root type="multiple">
  {#each items as item (item.value)}
    <Item value={item.value} class={intent === 'light' ? 'text-white' : 'text-black'}>
      <Trigger {intent}>{item.title}</Trigger>
      <Content
        >{#if typeof item.content === 'function'}
          {@render item.content()}
        {:else}
          {item.content}
        {/if}</Content
      >
    </Item>
  {/each}
</Root>
