/**
 * Build the package.json for the actual publishing
 */
// eslint-disable-next-line
const fs = require('fs');
// eslint-disable-next-line
const path = require('path');

// eslint-disable-next-line
const rootPackage = require('../package.json');

// Don't keep scripts
rootPackage['scripts'] = {};

rootPackage.main = 'index.js';
rootPackage.module = 'index.js';
rootPackage.exports = {
  '.': {
    types: './index.d.ts',
    svelte: './index.js',
    default: './index.js',
  },
  './tailwind.config': './tailwind.config.js',
  './tailwindColors': './styles/tailwindColors.js',
  './styles': './styles/index.css',
};

rootPackage.style = {
  './styles': './styles/index.css',
};

// Don't keep dev dependencies
delete rootPackage['devDependencies'];

// Update @config import path to match the dist file structure
const cssPath = './dist/styles/index.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');

cssContent = cssContent.replace(
  "@config '../../../tailwind.config.ts';",
  "@config '../tailwind.config.js';"
);

fs.writeFileSync(cssPath, cssContent);

// Write it out
// eslint-disable-next-line no-undef
fs.writeFileSync(`${path.join(__dirname, '../dist', 'package.json')}`, JSON.stringify(rootPackage, null, 2), (err) => {
  if (err) throw new Error(err);
});
