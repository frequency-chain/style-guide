<script>
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import colors from '../../styles/colors';
</script>

<Meta title="Colors/ColorPalette" />

<Story name="ColorPalette">
  <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
    {#each Object.entries(colors) as [colorName, color]}
      <div class="p-4">
        <h2 class="mb-2 text-lg font-semibold">{colorName}</h2>
        <div class="mb-1 flex items-center">
          <div class="h-12 w-12" style="background-color: {color};" />
          <span class="ml-2">{color}</span>
        </div>
      </div>
    {/each}
  </div>
</Story>
