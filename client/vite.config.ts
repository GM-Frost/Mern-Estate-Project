import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://nova-estate-server.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
    host: true,
  },
  plugins: [react()],
});
