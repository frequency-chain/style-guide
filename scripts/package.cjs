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
    './tailwind': './tailwind.config.js',
    './tailwindColors': './tailwindColors.js',
};

// Don't keep dev dependencies
delete rootPackage['devDependencies'];

// Write it out
fs.writeFileSync(`${path.join(__dirname, '../dist', 'package.json')}`, JSON.stringify(rootPackage, null, 2), (err) => {
    if (err) throw new Error(err);
});
