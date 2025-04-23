<script lang="ts">
  interface Props {
    /**
     * Specify the type of svelte element
     */
    tag?: string;
    /**
     * Specify if the text is bold
     */
    bold?: boolean;
    children?: import('svelte').Snippet;
    [key: string]: any;
  }

  let { tag = 'div', bold = false, children, ...rest }: Props = $props();

  let isBold = $derived(bold ? 'font-bold	' : '');
</script>

<svelte:element
  this={tag === 'h0' ? 'h1' : tag}
  {...rest}
  class={`${tag === 'h0' ? 'h0' : ''} ${isBold} ${rest.class ?? ''}`}
>
  {@render children?.()}
</svelte:element>
