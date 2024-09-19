<script>
  /**
   * Specify the type of svelte element
   * @type {string}
   * @default div
   */
  export let tag = 'div';

  /**
   * Specify if the text is bold
   * @type {boolean}
   * @default false
   */
  export let bold = false;

  $: isBold = bold ? 'font-bold	' : '';
</script>

<svelte:element this={tag} {...$$restProps} class={`${isBold} ${$$restProps.class ?? ''}`}>
  <slot />
</svelte:element>
