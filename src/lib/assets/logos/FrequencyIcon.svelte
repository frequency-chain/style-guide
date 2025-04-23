<script lang="ts">
    interface Props {
        [key: string]: unknown;
    }

    let {...rest}: Props = $props();
</script>

<svg viewBox="0 0 110 171" fill="none" xmlns="http://www.w3.org/2000/svg" class={rest.class}>
    <path d="M0 171V0H109.615V29.2308H32.8846V84.0385L91.3462 58.4615V91.3462L32.8846 116.923V171H0Z" fill="black"/>
</svg>
