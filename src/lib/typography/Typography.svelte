<script>
  export let tag = 'div';
  export let className = '';
  export let bold = false;

  $: isBold = bold ? 'font-bold	' : '';
</script>

<svelte:element this={tag} class={`${className} ${isBold}`}>
  <slot />
</svelte:element>
