import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 2333,
  },
  build: {
    outDir: 'build',
    lib: {
      entry: './src/qr-style.ts',
      name: 'QRStyle',
      formats: ['umd'],
      fileName: () => `qr-style.js`,
    },
    target: 'es2015',
  },
});
