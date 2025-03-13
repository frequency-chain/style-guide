<script>
  import Grid from './Grid.svelte';
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  const content = [
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,',
    'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words:',
    'consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    'Quisque vitae ipsum enim.',
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    'Aliquam lobortis nisl mi, et ultrices mi gravida ac.',
  ];
</script>

<Meta title="Design System/Grid" />
Resize window or activate responsive sizing in the development panel to see grid changes.
<Story name="Grid" id="grid">
  <Grid class="xs:xs md:sm">
    {#each content as line, i (i)}
      <p>
        <b>Paragraph {i + 1}: </b>
        {line}
      </p>
    {/each}
  </Grid>
  <p>Source: <a class="text-brightBlue underline hover:text-gray2" href="https://www.lipsum.com/">Lorem Ipsum</a></p>
</Story>
