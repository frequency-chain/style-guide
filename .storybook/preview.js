import '../src/lib/styles/index.css';

export const parameters = {
  backgrounds: {
    values: [
      { name: 'Navy', value: '#18465E' },
      { name: 'White', value: '#FFFFFF' },
    ],
    default: 'White',
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
