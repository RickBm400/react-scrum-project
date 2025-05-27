import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
// https://vitejs.dev/config/
const legacyDeprecationApiSilence = {
  silenceDeprecations: ['legacy-js-api'],
  quietDeps: true,
};

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@sass': path.resolve(__dirname, './src/sass'),
    },
  },
  css: {
    preprocessorOptions: {
      sass: legacyDeprecationApiSilence,
      scss: legacyDeprecationApiSilence,
    },
  },
});
