import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: 'https://to-do-list-7k2u.onrender.com',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        },
      },
    },
  };
});
