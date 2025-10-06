<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Typography from './Typography.svelte';

  const { Story } = defineMeta({ title: 'Design System/Typography', component: Typography });
</script>

<Story name="Header">
  <Typography tag="h0">H0</Typography>
  <Typography tag="h0" bold={true}>H0 Bold</Typography>
  <Typography tag="h1">H1</Typography>
  <Typography tag="h1" bold={true}>H1 Bold</Typography>
  <Typography tag="h2">H2</Typography>
  <Typography tag="h2" bold={true}>H2 Bold</Typography>
  <Typography tag="h3">H3</Typography>
  <Typography tag="h3" bold={true}>H3 Bold</Typography>
  <Typography tag="h4">H4</Typography>
  <Typography tag="h4" bold={true}>H4 Bold</Typography>
  <Typography tag="h5">H5</Typography>
  <Typography tag="h5" bold={true}>H5 Bold</Typography>
  <Typography tag="h6">H6</Typography>
  <Typography tag="h6" bold={true}>H6 Bold</Typography>
</Story>

<Story name="Body">
  <Typography class="lgText">Body Lg</Typography>
  <Typography class="lgText" bold={true}>Body Lg Bold</Typography>
  <Typography class="mdText">Body Md</Typography>
  <Typography class="mdText" bold={true}>Body Md Bold</Typography>
  <Typography>Body Normal</Typography>
  <Typography bold={true}>Body Normal Bold</Typography>
  <Typography class="smText">Body Sm</Typography>
  <Typography class="smText" bold={true}>Body Sm Bold</Typography>
  <Typography class="xsText">Body Xs</Typography>
  <Typography class="xsText" bold={true}>Body Xs Bold</Typography>
</Story>

<Story name="Docs">
  <div class="docsHeaderText">docsHeaderText</div>
  <div class="docsSubHeaderText" bold={true}>docsSubHeaderText</div>
  <div class="docsBodyText">docsBodyText</div>
</Story>
