<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Arrow } from '../assets';
  import IconButton from './IconButton.svelte';
</script>

<Meta title="UI Components/Atoms/IconButton" component={IconButton} />

<!--Primary-->
<Story name="IconButton" id="iconButton">
  <IconButton>
    <Arrow />
  </IconButton>
</Story>

<!-- Secondary -->
<Story name="IconButton Alt" id="iconButtonAlt">
  <IconButton>
    <Arrow />
  </IconButton>
</Story>

<!-- Round -->
<Story name="IconButton Round" id="iconButtonRound">
  <IconButton isRound="true">
    <Arrow />
  </IconButton>
</Story>
