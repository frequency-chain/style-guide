<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements';

  let { ...rest }: SVGAttributes<SVGElement> = $props();
</script>

<svg viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" class={rest.class}>
  <path
    d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM17 9C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7V9ZM1 9H17V7H1V9Z"
    fill="currentColor"
  />
</svg>
