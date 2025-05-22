import '../src/lib/styles/index.css';

export const parameters = {
  backgrounds: {
    values: [
      { name: 'Black', value: '#242527' },
      { name: 'DarkPurple', value: '#331e49' },
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
