<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Footer from './Footer.svelte';
</script>

<Meta title="UI Components/Features/Footer" component={Footer} />

<!--Primary-->
<Story name="Footer">
  <Footer />
</Story>

<Story name="FooterDark">
  <Footer classes="bg-navy text-white border-opacity-25" />
</Story>
