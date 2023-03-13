// .storybook/main.ts

import type { StorybookViteConfig } from '@storybook/builder-vite';
import path from 'path';
import { mergeConfig } from 'vite';


const config: StorybookViteConfig = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
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
                    @import '../src/assets/_variables.scss';
                    @import '../src/assets/_typography.scss';
                  `
                },
            },
        },
    });
  },
};

export default config;