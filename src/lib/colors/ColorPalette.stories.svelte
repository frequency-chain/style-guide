<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import tailwindColors from '../styles/tailwindColors';

  const { Story } = defineMeta({ title: 'Design System/Colors' });
</script>

<Story name="Colors">
  <div class="gap-f16 p-f16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <!-- Solid Colors -->
    {#each Object.entries(tailwindColors) as [colorName, color] (color)}
      <div class="p-f16">
        <h2 class="mb-f8 text-lg font-bold">{colorName}</h2>
        <div class="mb-f4 flex items-center">
          <div class="h-f48 w-f48" style="background-color: {color};"></div>
          <span class="ml-f8">{color}</span>
        </div>
      </div>
    {/each}

    <!-- Gradients -->
    <div class="p-f16">
      <h2 class="mb-f8 text-lg font-bold">gradient-primary</h2>
      <div class="mb-f4 flex flex-col items-start">
        <div class="h-f48 w-f48 bg-linear-(--gradient-primary)"></div>
        <span class="ml-f8">linear-gradient(-90deg, #311e48 0%, #790e70 50%, #aa40a1 100%)</span>
      </div>
    </div>
    <div class="p-f16">
      <h2 class="mb-f8 text-lg font-bold">gradient-secondary</h2>
      <div class="mb-f4 flex flex-col items-start">
        <div class="h-f48 w-f48 bg-linear-(--gradient-secondary)"></div>
        <span class="ml-f8">linear-gradient(-90deg, #ff5b2f 0%, #ff9a02 50%, #ffcf2c 100%)</span>
      </div>
    </div>
  </div>
</Story>
