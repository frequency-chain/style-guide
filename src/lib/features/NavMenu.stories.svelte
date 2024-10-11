<script>
    import {Meta, Story} from '@storybook/addon-svelte-csf';
    import NavMenu from './NavMenu.svelte';

    const menuItems = [
        {label: "Home.", href: "/", isExternal: false},
        {label: "FAQ.", href: "/faq", isExternal: false},
        {label: "External.", href: "https://www.google.com/", isExternal: true},
    ]
</script>

<Meta title="UI Components/Features/NavMenu" component={NavMenu}/>

<Story name="NavMenu">
    <NavMenu menuItems={menuItems}/>
</Story>