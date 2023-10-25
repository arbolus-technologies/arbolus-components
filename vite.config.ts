import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'arbolus-ui-components',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: [react(), dts(), cssInjectedByJsPlugin()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/theme/sass/_variables.scss";
          @import "./src/theme/sass/_typography.scss";
          @import "./src/theme/sass/_mixins.scss";
        `
      }
    }
  }
});
