<script>
    import {Meta, Story} from '@storybook/addon-svelte-csf';
    import {Arrow} from '../assets'
    import IconButton from './IconButton.svelte';
</script>

<Meta title="UI Components/Atoms/IconButton" component={IconButton}/>

<!--Primary-->
<Story name="IconButton">
    <IconButton>
        <Arrow class="text-white w-full h-auto" slot="icon"/>
    </IconButton>
</Story>

<!-- Secondary -->
<Story name="IconButton Alt">
    <IconButton>
        <Arrow class="text-white" slot="icon"/>
    </IconButton>
</Story>

<!-- Round -->
<Story name="IconButton Round">
    <IconButton isRound="true">
        <Arrow class="text-white" slot="icon"/>
    </IconButton>
</Story>
