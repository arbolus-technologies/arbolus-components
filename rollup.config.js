export default {
  entry: 'src/index.ts',
  dest: 'bundle.js',
  format: 'cjs',
  external: ['react-i18next', 'i18next', 'react', 'react-dom']
};
