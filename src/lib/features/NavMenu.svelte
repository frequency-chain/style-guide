<script lang="ts">
  // Note: Shows the buttons still in md view, but not the non-buttons
  import { onMount, tick } from 'svelte';
  import type { Intent, MenuItem } from '../utils/types.js';
  import Button from '../atoms/Button.svelte';
  import { cn } from '../utils/utils.js';

  interface Props {
    intent?: Intent;
    menuItems?: MenuItem[];
    highlightMarginTop?: string;
  }

  let { intent = 'dark', menuItems = [], highlightMarginTop = '0px' }: Props = $props();

  let viewportTrackingItems: [string, boolean][] = $state(
    menuItems.filter((item) => item.viewportHighlightId).map((item) => [item.viewportHighlightId as string, false])
  );

  // Order matters, so we just want the first one
  let highlightId = $derived(viewportTrackingItems.find(([_id, inViewport]) => inViewport === true)?.[0]);

  onMount(() => {
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const index = viewportTrackingItems.findIndex(([id]) => id === e.target.id);
          if (index > -1) tick().then(() => (viewportTrackingItems[index][1] = e.isIntersecting));
        });
      },
      { threshold: 0.05, rootMargin: `${highlightMarginTop} 0px 0px 0px` }
    );

    // Observe all sections that have corresponding menu items
    viewportTrackingItems.forEach(([highlightId]) => {
      const section = document.getElementById(highlightId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      // Cleanup on component destruction
      observer.disconnect();
    };
  });
</script>

<nav class={cn('gap-f32 xs:hidden md:flex', intent === 'dark' ? 'text-black' : 'text-cream')}>
  {#each menuItems as item, index (index)}
    {#if item.isButton}
      <div class="content-center">
        <Button
          onclick={item.onclick}
          size="normal"
          intent={intent === 'dark' ? 'filled-dark' : 'filled-light'}
          active={item.isActive || false}
          href={item.href}
          target={item.isExternal ? '_blank' : '_self'}
        >
          {item.label}
        </Button>
      </div>
    {:else}
      <a
        onclick={item.onclick}
        href={item.href}
        target={item.isExternal ? '_blank' : '_self'}
        class={cn(
          'h6 xs:hidden after:bg-primary relative cursor-pointer content-center overflow-hidden px-2 font-bold transition-all duration-1000 lg:block',
          intent === 'dark' ? 'text-black' : 'text-cream',
          "after:absolute after:bottom-0 after:left-0 after:h-[13px] after:w-full after:transform after:transition after:duration-300 after:content-['']",
          item.viewportHighlightId && highlightId === item.viewportHighlightId
            ? 'after:translate-y-0 after:opacity-100'
            : 'after:translate-y-[200%] after:opacity-0',
          'hover:after:translate-y-0 hover:after:opacity-100 focus:after:translate-y-0 focus:after:opacity-100'
        )}
      >
        {item.label}
      </a>
    {/if}
  {/each}
</nav>
