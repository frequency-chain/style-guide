<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements';

  let { ...rest }: SVGAttributes<SVGElement> = $props();
</script>

<svg viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" class={rest.class}>
  <path
    d="M10.4711 0.229856L6.93879 4.08615L5.99461 5.1117L5.05522 4.08615L1.5325 0.229856C1.15866 -0.0945539 0.617074 -0.0788567 0.276785 0.297878C-0.0922616 0.700774 -0.0922616 1.34959 0.276785 1.75249L5.06001 6.97445L5.9994 8L6.94358 6.97445L11.7268 1.75249C11.9089 1.55366 12 1.2868 12 1.02518C12 0.763563 11.9089 0.49671 11.7268 0.297878C11.3817 -0.0788567 10.8401 -0.0945539 10.4711 0.229856Z"
    fill="currentColor"
  />
</svg>
