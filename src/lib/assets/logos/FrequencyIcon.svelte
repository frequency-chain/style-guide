<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements';

  interface Props extends SVGAttributes<SVGSVGElement> {
    fillColor?: string;
    letterColor?: string;
  }

  let { fillColor = '#790E70', letterColor = '#FCF3E4', ...rest }: Props = $props();
</script>

<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class={rest.class}>
  <circle fill={fillColor} cx="100" cy="100" r="100" />
  <path
    d="m163.44 52.423h-110.94c-3.8364 0-6.9464 3.1104-6.9464 6.9474v97.065c-0.01993 2.4199 1.2207 4.6758 3.2747 5.9549 2.0464 1.2599 4.5986 1.3725 6.748 0.29774l83.258-41.783c5.8846-3.5128 3.6671-12.523-3.1755-12.902h-53.785l84.746-42.379c6.7179-3.2496 4.2851-13.362-3.1755-13.2z"
    fill={letterColor}
  />
</svg>
