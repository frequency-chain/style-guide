// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
// @ts-ignore
import tsParser from '@typescript-eslint/parser';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import svelteConfig from './svelte.config.js';
import globals from 'globals';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...eslintPluginSvelte.configs['flat/recommended'],
  ...eslintPluginSvelte.configs['flat/prettier'],
  {
    ignores: [
      '.storybook/',
      'postcss.config.cjs',
      '.svelte-kit/',
      '.DS_Store',
      'node_modules/',
      '.env',
      '.env.*',
      '!.env.example',
      'dist',
      'storybook-static',
      'pnpm-lock.yaml',
      'package-lock.json',
      'yarn.lock',
    ],
  },
  {
    rules: {
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^[_$]',
          varsIgnorePattern: '^[_$]',
          caughtErrorsIgnorePattern: '^[_$]',
        },
      ],
      'no-unused-vars': 'off',
      indent: ['warn', 2],
      'linebreak-style': ['error', 'unix'],
      semi: 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        extraFileExtensions: ['.svelte'],
      },
    },
  },
  {
    files: ['**/*.svelte', '*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
        svelteConfig,
      },
    },
  }
);
