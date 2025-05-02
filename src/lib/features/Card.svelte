<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { UserFilled } from '../assets';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    bgColor?: string;
    titleColor?: string;
    icon?: import('svelte').Component;
    content?: import('svelte').Snippet;
  }

  let {
    title = 'Default Card Header',
    bgColor = 'white',
    titleColor = 'navy',
    icon = UserFilled,
    content,
    ...rest
  }: Props = $props();

  const SvelteComponent = $derived(icon);
</script>

<div {...rest} class="card-shadow rounded-xl p-6 bg-{bgColor} {rest.class}">
  <div class="flex justify-between pb-6">
    <h5 class="font-bold text-{titleColor} inline">{title}</h5>
    <SvelteComponent class="h-f48 w-f48" />
  </div>
  {#if content}{@render content()}{:else}This is default content{/if}
</div>
