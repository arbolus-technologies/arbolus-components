import 'material-symbols';
import '../src/index.scss'; // Your local styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-symbols';

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
    viewport: {
      viewports: INITIAL_VIEWPORTS // newViewports would be an ViewportMap. (see below for examples)
    }
  }
};

export default preview;
