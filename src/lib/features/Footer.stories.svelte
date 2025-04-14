<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Footer from './Footer.svelte';

  const { Story } = defineMeta({ title: 'UI Components/Features/Footer', component: Footer });
</script>

<!--Primary-->
<Story name="Footer - Light Background (Gray example)" id="footerLight">
  <div class="bg-gray-100 p-6">
    <Footer type="light" />
  </div>
</Story>

<!--Primary-->
<Story name="Footer - Dark Background (Navy example)" id="footerDark">
  <div class="bg-navy p-6">
    <Footer type="dark" />
  </div>
</Story>
