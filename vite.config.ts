import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        base: './',
        define: {
            'process.env.GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY)
        },
        build: {
            outDir: 'dist',
            assetsDir: 'assets',
            sourcemap: false,
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true
                }
            },
            rollupOptions: {
                output: {
                    manualChunks: {
                        vendor: ['react', 'react-dom'],
                        gemini: ['@google/generative-ai']
                    }
                }
            }
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '.')
            }
        }
    };
});
