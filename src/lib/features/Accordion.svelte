<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { Intent } from '../utils/types';
  import * as Accordion from '../shadcnComponents/ui/accordion';

  interface Props {
    intent?: Intent;
    items: { value: string; title: string; content: string | Snippet }[];
  }

  let { intent = 'dark', items }: Props = $props();
</script>

<Accordion.Root type="multiple">
  {#each items as item (item.value)}
    <Accordion.Item value={item.value} class={intent === 'light' ? 'text-white' : 'text-black'}>
      <Accordion.Trigger {intent}>{item.title}</Accordion.Trigger>
      <Accordion.Content
        >{#if typeof item.content === 'function'}
          {@render item.content()}
        {:else}
          {item.content}
        {/if}</Accordion.Content
      >
    </Accordion.Item>
  {/each}
</Accordion.Root>
