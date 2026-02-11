import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.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),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.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)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
