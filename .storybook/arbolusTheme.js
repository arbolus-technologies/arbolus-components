import { create } from '@storybook/theming';

import arbolusLogo from './arbolusLogo.png';

export default create( {
  base: 'light',
  brandTitle: 'Arbolus Storybook',
  brandUrl: 'https://www.arbolus.com',
  brandImage: arbolusLogo,
  brandTarget: '_self',
} );
