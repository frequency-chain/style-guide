<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import Typography from './Typography.svelte';

  // Define the metadata for the story
  export const meta = {
    title: 'Typography/Type',
    component: Typography,
    argTypes: {
      bold: { control: 'boolean' }, // Control to toggle bold property
      tag: { control: 'text' }, // Control for the tag
      size: { control: 'text' } // Control for size
    },
  };
</script>

<Meta
  title="Typography/Type"
  component={Typography}
  argTypes={{
    bold: { control: 'boolean' }, // Correct control type for boolean
    tag: { control: 'text' }, // Control for tag
    size: { control: 'text' } // Control for size
  }} />

<Story name="Type" args={{ bold: false, tag: 'p', size: '' }}>
  {({ bold, tag, size }) => (
    <div class="flex gap-10">
      <div>
        <Typography tag={tag} bold={bold} size={size}>H1</Typography>
        <Typography tag={tag} bold={bold} size={size}>H2</Typography>
        <Typography tag={tag} bold={bold} size={size}>H3</Typography>
        <Typography tag={tag} bold={bold} size={size}>H4</Typography>
        <Typography tag={tag} bold={bold} size={size}>H5</Typography>
        <Typography tag={tag} bold={bold} size={size}>H6</Typography>
      </div>
      <div>
        <Typography className="lg" bold={bold} size={size}>Body Lg</Typography>
        <Typography className="md" bold={bold} size={size}>Body Md</Typography>
        <Typography bold={bold} size={size}>Body Normal</Typography>
        <Typography className="sm" bold={bold} size={size}>Body Sm</Typography>
        <Typography className="xs" bold={bold} size={size}>Body Xs</Typography>
      </div>
    </div>
  )}
</Story>
