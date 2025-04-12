<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import tailwindColors from '../styles/tailwindColors';
</script>

<Meta title="Design System/Colors" />

<Story name="Colors">
  <div class="gap-f16 p-f16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {#each Object.entries(tailwindColors) as [colorName, color] (color)}
      <div class="p-f16">
        <h2 class="mb-f8 text-lg font-bold">{colorName}</h2>
        <div class="mb-f4 flex items-center">
          <div class="h-f48 w-f48" style="background-color: {color};" />
          <span class="ml-f8">{color}</span>
        </div>
      </div>
    {/each}
  </div>
</Story>
