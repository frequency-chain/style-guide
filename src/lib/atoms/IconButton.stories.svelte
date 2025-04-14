<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Arrow } from '../assets';
  import IconButton from './IconButton.svelte';

  const { Story } = defineMeta({ title: 'UI Components/Atoms/IconButton', component: IconButton });
</script>

<!--Primary-->
<Story name="Primary">
  <IconButton>
    <Arrow />
  </IconButton>
</Story>

<!-- Secondary - Dark Mode -->
<Story name="DarkMode">
  <div class="p-f20 h-[500px] bg-black">
    <IconButton type="dark">
      <Arrow />
    </IconButton>
  </div>
</Story>

<!-- Round -->
<Story name="Round">
  <IconButton isRound="true">
    <Arrow />
  </IconButton>
</Story>
