<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements';

  interface Props extends SVGAttributes<SVGSVGElement> {
    fillColor?: string;
    letterColor?: string;
  }

  let { fillColor = '#790E70', letterColor = '#FCF3E4', ...rest }: Props = $props();
</script>

<svg viewBox="0 0 200 184" fill="none" xmlns="http://www.w3.org/2000/svg" class={rest.class}>
  <rect fill={fillColor} width="200" height="184" rx="17" ry="17" />
  <path
    d="m174.12 18.503h-146.45c-5.0641 0-9.1693 4.1058-9.1693 9.1705v128.13c-0.02631 3.1942 1.6113 6.1721 4.3226 7.8604 2.7013 1.6632 6.0701 1.8118 8.9073 0.39309l109.9-55.154c7.7676-4.6369 4.8404-16.53-4.1917-17.031h-70.997l111.87-55.94c8.8676-4.2895 5.6564-17.638-4.1917-17.424z"
    fill={letterColor}
  />
</svg>
