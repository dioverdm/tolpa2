import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  const isProduction = mode === 'production';

  const backendURL = isProduction
    ? 'https://buzzhive-4zkh.onrender.com' // Production backend URL
    : 'http://localhost:5000'; // Development backend URL

  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: backendURL,
          changeOrigin: true,
          credentials: true,
        },
      },
    },
  });
};
