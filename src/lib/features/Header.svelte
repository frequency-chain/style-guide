<script lang="ts">
  import { FrequencyLogo } from '../design-system/assets/index';
  import NavMenu from './NavMenu.svelte';
  import NavMenuMobile from './NavMenuMobile.svelte';
  import type { Intent, MenuItem } from '$lib/utils/types.js';
  import { cn, flipIntent } from '../utils/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    intent?: Intent;
    logoLink?: string;
    menuItems?: MenuItem[];
    highlightMarginTop?: string;
    innerClass?: string;
  }

  let {
    intent = 'light',
    logoLink = '',
    menuItems = [],
    highlightMarginTop = '90px',
    innerClass = '',
    ...rest
  }: Props = $props();

  const navIntent = $derived(flipIntent(intent));
</script>

<div {...rest} class={cn('header-shadow flex', intent === 'light' ? 'bg-white' : 'bg-black', rest.class)}>
  <div class={cn('m-auto flex h-[85px] w-full max-w-(--breakpoint-xl) flex-row justify-between', innerClass)}>
    <!-- For Desktop -->
    <a href={logoLink} class={`self-center ${logoLink ? '' : 'pointer-events-none'}`}>
      <FrequencyLogo class={cn('w-[146px]  md:w-[200px]', intent === 'light' ? 'text-black' : 'text-cream')} />
    </a>

    <NavMenu {highlightMarginTop} {menuItems} intent={navIntent} />
    <!-- For Mobile -->
    <NavMenuMobile {menuItems} intent={navIntent} />
  </div>
</div>

<style>
  .header-shadow {
    box-shadow: 0 4px 4px 0 #00000040;
  }
</style>
