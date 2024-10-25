<script lang="ts">
    import {cn} from '../../utils/utils';

    export let label: string = '';
    export let href: string = '';
    export let isRound = false;
</script>

<a
        aria-label={label}
        class={cn(
    `h-f32 w-f32 bg-black p-1 transition-colors duration-[0.3s] hover:bg-brightBlue flex items-center justify-center`,
    isRound ? 'rounded-full' : 'rounded',
    $$restProps.class
  )}
        {href}
        target="_blank"
>
    <slot name="icon" class="text-white w-full h-auto"/>
</a>
