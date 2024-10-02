import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 2333,
  },
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'QRStyle',
      formats: ['umd', 'es', 'cjs'],
      fileName: (format) => `qr-style.${format}.js`,
    },
    target: 'es2015',
  },
});
