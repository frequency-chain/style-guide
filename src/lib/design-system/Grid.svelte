<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div {...rest} class="m-f16 md:m-f32 lg:m-f120 {rest.class}">
  <div class="gap-f16 lg:gap-f32 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
    {@render children?.()}
  </div>
</div>
