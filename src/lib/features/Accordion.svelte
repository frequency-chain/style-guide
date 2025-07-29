<script lang="ts">
  import { Accordion } from 'bits-ui';

  import type { Snippet } from 'svelte';
  import type { Intent } from '../utils/types';
  import { cn } from '../utils/utils';
  import { Chevron } from '../design-system/assets';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    trigger: string;
    content: string | Snippet;
    intent?: Intent;
  }

  let { trigger, content, intent = 'light', ...rest }: Props = $props();
</script>

<Accordion.Root type="single">
  <Accordion.Item
    value={trigger}
    class={cn('border-gray3 group border-b', intent === 'dark' ? 'text-white' : 'text-black')}
  >
    <Accordion.Header>
      <Accordion.Trigger
        class={cn(
          'mdText flex w-full flex-1 cursor-pointer items-center justify-between py-4 font-bold transition-all [&[data-state=open]>span>svg]:rotate-360',
          rest.class
        )}
      >
        <span class="w-full text-left">
          {trigger}
        </span>
        <span class="inline-flex size-8 items-center justify-center rounded-[7px] bg-transparent">
          <Chevron
            class={cn(
              'h-5 w-5 rotate-270 p-1 transition-transform duration-200',
              intent === 'dark' ? 'text-white' : 'text-black'
            )}
          />
        </span>
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content
      class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down mdtext overflow-hidden tracking-[-0.01em]"
    >
      <div class="pb-[25px]">
        {#if typeof content === 'function'}
          {@render content()}
        {:else}
          {content}
        {/if}
      </div>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
