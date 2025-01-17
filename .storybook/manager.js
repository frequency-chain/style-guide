import { addons } from '@storybook/manager-api';
import customTheme from './CustomTheme';

addons.setConfig({
  theme: customTheme,
});
