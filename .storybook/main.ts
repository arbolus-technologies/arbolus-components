// .storybook/main.ts

import type { StorybookConfig } from '@storybook/react-vite';

import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-coverage','@storybook/addon-interactions' //👈 Registers the addon
],
  core: {
    builder: '@storybook/builder-vite',
  },
  docs: {
    autodocs: true, // see below for alternatives
    defaultName: 'Docs', // set to change the name of generated docs entries
  },
  typescript: {
    reactDocgen: 'react-docgen', // 👈 react-docgen configured here.
  },
  async viteFinal(config) {
    return mergeConfig(config, {
        css: {
            postcss: null,
            preprocessorOptions: {
                scss: {
                  additionalData: `
                    @import '../src/theme/sass/_variables.scss';
                    @import '../src/theme/sass/_typography.scss';
                  `
                },
            },
        },
    });
  },
};

export default config;
