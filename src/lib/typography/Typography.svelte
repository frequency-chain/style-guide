<script lang="ts">
  /**
   * Specify the type of svelte element
   */
  export let tag = 'div';

  /**
   * Specify if the text is bold
   */
  export let bold = false;

  $: isBold = bold ? 'font-bold	' : '';
</script>

<svelte:element this={tag} {...$$restProps} class={`${isBold} ${$$restProps.class ?? ''}`}>
  <slot />
</svelte:element>
