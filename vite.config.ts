import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              'react-vendor': ['react', 'react-dom'],
              'data': [
                './data/curriculum.ts',
                './data/ebooks.ts',
                './data/g10.ts',
                './data/g11.ts',
                './data/g12.ts',
                './data/otherPrograms.ts',
                './data/sm1.ts',
                './data/sm2.ts',
                './data/sm3.ts',
                './data/sm4.ts',
                './data/sw6.ts',
                './data/sw7.ts',
                './data/sw8.ts',
                './data/sw9.ts'
              ]
            }
          }
        },
        chunkSizeWarningLimit: 1000,
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        }
      }
    };
});
