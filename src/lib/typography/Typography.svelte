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

<svelte:element
  this={tag === 'h0' ? 'h1' : tag}
  {...$$restProps}
  class={`${tag === 'h0' ? 'h0' : ''} ${isBold} ${$$restProps.class ?? ''}`}
>
  <slot />
</svelte:element>
