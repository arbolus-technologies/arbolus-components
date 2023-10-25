import 'material-symbols';
import '../src/index.scss'; // Your local styles
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from '../i18next.ts';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    globals: {
      locale: 'en',
      locales: {
        en: 'English'
      }
    },
    parameters: {
      i18n
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS // newViewports would be an ViewportMap. (see below for examples)
    }
  }
};

export default preview;
