# Frequency Style Guide

**Svelte + Storybook + TailwindCSS**

## Prerequisites

This package is designed to work specifically with **Svelte + Tailwind** projects.

## Installation

When installing this package into your project, follow the steps below.

1. Install the style guide package:

```zsh
npm i @frequency-chain/style-guide
```

2. [Install and configure Tailwind](https://tailwindcss.com/docs/guides/sveltekit).


3. Edit your `tailwind.config` file to contain the style guide config as a preset. See the example below.

```js
import frequencyConfig from "@frequency-chain/style-guide/tailwind.config";

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        // ... custom theme config
    },
    presets: [frequencyConfig]
};
```

4. You should now be able to access the Frequency Style Guide Tailwind theme and custom css classes in your Svelte
   components!

---

## Development

### Storybook Quickstart

To spin up the style guide and see what icons, features, atoms, typography, and colors are included, run the commands
below.

```zsh
npm i
npm run storybook
```

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
    - When installing the package, remember to **use the local version you just created**!

### Dev Notes

- Anything that should be exported for the package should be in `src/lib`.