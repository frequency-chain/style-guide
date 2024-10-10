<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import Check from './Check.svelte';
  import Chevron from './Chevron.svelte';
  import Error from './Error.svelte';

  const icons = {
    Check,
    Chevron,
    Error,
  };
</script>

<Meta title="Icons/IconList" />

<Story name="IconList">
  <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
    {#each Object.entries(icons) as [name, Icon]}
      <div class="p-4">
        <h2 class="mb-2 text-lg font-semibold">{name}</h2>
        <svelte:component this={Icon} class="mb-1 h-8 w-8" />
      </div>
    {/each}
  </div>
</Story>
