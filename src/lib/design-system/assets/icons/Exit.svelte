<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements';

  let { ...rest }: SVGAttributes<SVGElement> = $props();
</script>

<svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" class={rest.class}>
  <path
    d="M2.525 24L0.125 21.6L9.725 12L0.125 2.4L2.525 0L12.125 9.6L21.725 0L24.125 2.4L14.525 12L24.125 21.6L21.725 24L12.125 14.4L2.525 24Z"
    fill="currentColor"
  />
</svg>
