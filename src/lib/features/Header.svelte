<script lang="ts">
  import { FrequencyLogo } from '../assets/index';
  import NavMenu from './NavMenu.svelte';
  import NavMenuMobile from './NavMenuMobile.svelte';
  import type { MenuItem } from '$lib/utils/types.js';
  import { cn } from '../utils/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    logoLink?: string;
    menuItems?: MenuItem[];
    highlightMarginTop?: string;
    innerClass?: string;
  }

  let { logoLink = '', menuItems = [], highlightMarginTop = '90px', innerClass = '', ...rest }: Props = $props();
</script>

<div {...rest} class={cn('header-shadow flex', rest.class)}>
  <div class={cn('m-auto flex h-[85px] w-full max-w-(--breakpoint-xl) justify-between', innerClass)}>
    <!-- For Desktop -->
    <a href={logoLink} class={`self-center ${logoLink ? '' : 'pointer-events-none'}`}>
      <FrequencyLogo class="text-navy w-[146px] md:w-[200px]" />
    </a>

    <NavMenu {highlightMarginTop} {menuItems} />
    <!-- For Mobile -->
    <NavMenuMobile {menuItems} />
  </div>
</div>

<style>
  .header-shadow {
    box-shadow: 0 4px 4px 0 #00000040;
  }
</style>
