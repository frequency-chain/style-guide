<script lang="ts">
  import { Accordion } from 'bits-ui';

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<Accordion.Root class="w-full" type="multiple">
  {@render children?.()}
</Accordion.Root>
