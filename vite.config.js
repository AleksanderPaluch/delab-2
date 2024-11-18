import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Папка для збереження зібраного коду
    assetsDir: 'assets', // Папка для статичних ресурсів (JS, CSS, зображення)
    sourcemap: false, // Виключення sourcemaps у продакшн
    cssCodeSplit: true, // Поділ CSS на окремі файли (оптимально для кешування)
    minify: 'esbuild', // Швидка мініфікація через esbuild
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Окремий файл для сторонніх бібліотек
        },
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
});
