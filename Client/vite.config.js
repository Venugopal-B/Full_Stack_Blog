import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000, // Change this to your preferred port number (e.g., 8080)
  },
  plugins: [react()],
});