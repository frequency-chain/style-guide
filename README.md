# Frequency Style Guide

**Svelte + Storybook + TailwindCSS**

## Prerequisites

This package is designed to work specifically with **Svelte v5 + Tailwind v4** projects.

## Index

1. [Installation](#installation)
2. [Development](#development)

## Installation

When installing this package into your project, follow the steps below.

1. Install the style guide package:

```zsh
npm i @frequency-chain/style-guide
```

2. [Install and configure Tailwind](https://tailwindcss.com/docs/guides/sveltekit).

- **Skip the step where you add `@import "tailwindcss";`** to your css file as it has already been imported in the
  library.

3. Edit your `app.css` file to import the style guide and set the source.

```css
@import '@frequency-chain/style-guide/styles';

/* may need to update path depending on your file structure */
@source '../../node_modules/@frequency-chain/style-guide/**/*.{svelte,js,ts}';
```

You should now be able to access the Frequency Style Guide Tailwind theme and custom css classes in your Svelte
components!

### Best Practices

- Refer to the style guide `lib/index.css` for all branded classes. **Your local project css file, should be close to
  empty, only importing the style guide and containing project specific styles.** This file defines the following:
  - colors
  - gradients
  - fonts
  - font sizes
  - shadows
  - breakpoints
  - form element utilities
  - animations
- When setting the font size, refer to `Text Utilities` in `lib/index.css`.
  ```html
  <div class="lgText">Hello world</div>
  <div class="xsText">Aside Text</div>
  ```
- When setting the size of anything from width to gaps, refer to `Spacing` in `lib/index.css`. The convention is
  `f{pixels}`.
  ```html
  <div class="gap-f12 flex">Hello world</div>
  <div class="h-f40">Hello world</div>
  <div class="p-f32">Hello world</div>
  ```

---

## Development

### Storybook Quickstart

To spin up the style guide and see what icons, features, atoms, typography, and colors are included, run the commands
below.

```zsh
npm i
npm run storybook
```

- In the storybook UI, select a component and view the controls tab to checkout available props.
- The `*/stories.svelte` files are great examples for how to use each component.

### Shadcn Notes

- Some components are difficult to customize from scratch, leading us to use the
  [Shadcn](https://www.shadcn-svelte.com/) library.
- You can view these components in `lib/shadcnComponents/ui`.

### Dev Notes

- Anything that should be exported for the package should be in `src/lib`.
- **Any components that you wish to export must be exported in `index.ts`.**

### Package Testing

1. Build the /dist.

```zsh
npm run build
```

2. Create pack.

```zsh
cd dist
npm pack
```

3. Install local package into a new project.
   - Navigate to a new Svelte project.
   - Follow the [installation steps](#installation).
   - When installing the package, remember to **use the local version you just created** by copying the path to the .tgz
     file or using npm link.
