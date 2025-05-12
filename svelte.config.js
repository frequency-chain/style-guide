import { resolve } from 'path';
import preprocess from 'svelte-preprocess';

export default {
  // Preprocess your Svelte files (e.g., support for TailwindCSS and other preprocessors)
  preprocess: preprocess({
    postcss: true, // This will pick up your Tailwind config from postcss.config.js
  }),

  kit: {
    // Set up aliasing for cleaner imports
    alias: {
      $lib: resolve('./src/lib'),
      $styles: resolve('./src/styles'),
      $atoms: resolve('./src/lib/atoms'),
      $typography: resolve('./src/lib/typography'),
      $assets: resolve('./src/assets'),
    },
  },
};
