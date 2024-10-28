<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Arrow } from '../assets';
  import IconButton from './IconButton.svelte';
</script>

<Meta title="UI Components/Atoms/IconButton" component={IconButton} />

<!--Primary-->
<Story name="IconButton">
  <IconButton>
    <Arrow />
  </IconButton>
</Story>

<!-- Secondary -->
<Story name="IconButton Alt">
  <IconButton>
    <Arrow />
  </IconButton>
</Story>

<!-- Round -->
<Story name="IconButton Round">
  <IconButton isRound="true">
    <Arrow />
  </IconButton>
</Story>
