<script lang="ts">
  // Note: Shows the buttons still in md view, but not the non-buttons
  import { onMount, tick } from 'svelte';
  import { MenuItem } from '../utils/types.js';
  import Button from '../atoms/Button.svelte';

  export let menuItems: MenuItem[] = [];
  export let highlightMarginTop = '0px';

  let viewportTrackingItems: [string, boolean][] = menuItems
    .filter((item) => item.viewportHighlightId)
    .map((item) => [item.viewportHighlightId as string, false]);

  // Order matters, so we just want the first one
  $: highlightId = viewportTrackingItems.find(([id, inViewport]) => inViewport === true)?.[0];

  onMount(() => {
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const index = viewportTrackingItems.findIndex(([id]) => id === e.target.id);
          if (index > -1) tick().then(() => (viewportTrackingItems[index][1] = e.isIntersecting));
        });
      },
      {
        threshold: 0.05,
        rootMargin: `${highlightMarginTop} 0px 0px 0px`,
      }
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

<nav class="hidden gap-f32 text-navy md:flex">
  {#each menuItems as item}
    {#if item.isButton}
      <div class="content-center">
        <Button
          size="auto"
          active={item.isActive || false}
          href={item.href}
          target={item.isExternal ? '_blank' : '_self'}
        >
          {item.label}
        </Button>
      </div>
    {:else}
      <a
        href={item.href}
        target={item.isExternal ? '_blank' : '_self'}
        class={`h6 underline-on-nav-hover border-color hidden content-center px-2 text-navy transition-all duration-1000 after:bg-current lg:block ${item.viewportHighlightId && highlightId === item.viewportHighlightId ? 'underline-on-nav' : ''}`}
      >
        {item.label}
      </a>
    {/if}
  {/each}
</nav>

<style>
  /* Underline on hover animation */
  .underline-on-nav-hover,
  .underline-on-nav {
    @apply relative cursor-pointer overflow-hidden;
  }

  .underline-on-nav-hover::after,
  .underline-on-nav::after {
    @apply absolute bottom-0 left-0 h-[13px] w-full bg-teal opacity-0 transition-opacity content-[''];
    transition:
      opacity 300ms,
      transform 300ms;
    transform: translate3d(0, 200%, 0);
  }

  .underline-on-nav-hover:hover::after,
  .underline-on-nav-hover:focus::after,
  .underline-on-nav::after {
    @apply opacity-100;
    transform: translate3d(0, 0, 0);
  }
</style>
