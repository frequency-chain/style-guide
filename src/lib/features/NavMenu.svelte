<script lang="ts">
    type MenuItem = { label: string; href: string; isExternal?: boolean };
    export let menuItems: MenuItem[] = [];
</script>

<nav class="flex gap-f32 uppercase sm:hidden md:flex lg:flex">
    {#each menuItems as item}
        <a href={item.href} target={item.isExternal ? '_blank' : '_self'}
           class={`h6 underline-on-hover font-bold after:bg-current`}
        >{item.label}</a>
    {/each}
</nav>
