import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import autoPreprocess from 'svelte-preprocess';
import del from 'rollup-plugin-delete';

export default {
  input: 'src/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
  },
  plugins: [
    svelte({
      // Include only Svelte files from the src/lib directory and its subdirectories
      include: ['src/lib/**/*.svelte'],

      // Exclude Svelte story files and other unwanted files
      exclude: ['src/lib/**/*.stories.svelte', 'src/lib/**/*.mdx'],

      preprocess: autoPreprocess(),
      emitCss: true, // Emit separate CSS file
    }),
    resolve({
      extensions: ['.cjs', '.js', '.json', '.svelte'], // Resolve all necessary file types
      browser: true, // Ensure it resolves for the browser
      dedupe: ['svelte'], // Avoid multiple versions of svelte
    }),
    del({
      targets: ['public/**/*.stories.svelte', 'public/**/*.mdx'], // Delete .stories.svelte files from the public directory
      hook: 'generateBundle', // Ensures files are deleted after the bundle is generated
    }),
  ],
};
