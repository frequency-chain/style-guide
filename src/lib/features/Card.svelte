<script lang="ts">
  import { UserFilled } from '../assets';

  interface Props {
    title?: string;
    bgColor?: string;
    titleColor?: string;
    icon?: import('svelte').SvelteComponent;
    content?: import('svelte').Snippet;
    [key: string]: unknown;
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

<div class="card-shadow rounded-xl p-6 bg-{bgColor} {rest.class}">
  <div class="flex justify-between pb-6">
    <h5 class="font-bold text-{titleColor} inline">{title}</h5>
    <SvelteComponent class="h-f48 w-f48" />
  </div>
  {#if content}{@render content()}{:else}This is default content{/if}
</div>
