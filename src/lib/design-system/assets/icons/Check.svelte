<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements';

  let { ...rest }: SVGAttributes<SVGElement> = $props();
</script>

<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class={rest.class}>
  <g clip-path="url(#clip0_2578_353)">
    <path
      d="M9.80685 1.78353L3.65879 9.16121L0.23584 5.64046L1.43083 4.47867L3.56344 6.67221L8.52648 0.716553L9.80685 1.78353Z"
      fill="currentColor"
    />
  </g>
  <defs>
    <clipPath id="clip0_2578_353">
      <rect width="10" height="10" fill="currentColor" />
    </clipPath>
  </defs>
</svg>
