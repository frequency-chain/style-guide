<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements';

  let { ...rest }: SVGAttributes<SVGElement> = $props();
</script>

<svg viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" class={rest.class}>
  <path
    d="M2 20H25.625M2 11H25.625M2 2H25.625"
    stroke="currentColor"
    stroke-width="3.375"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
