<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements';

  let { ...rest }: SVGAttributes<SVGElement> = $props();
</script>

<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class={`h-f20 w-f20 ${rest.class}`}>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM8.54851 4.43184H11.4511L11.1857 12.6319H8.81395L8.54851 4.43184ZM11.5031 14.917C11.4915 15.748 10.7933 16.4174 10.0027 16.4174C9.17173 16.4174 8.4908 15.748 8.50234 14.917C8.4908 14.0976 9.17173 13.434 10.0027 13.434C10.7933 13.434 11.4915 14.0976 11.5031 14.917Z"
    fill="#EB5757"
  />
</svg>
