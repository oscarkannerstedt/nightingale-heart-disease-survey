// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/nightingale-heart-disease-survey/",
  server: {
    proxy: {
      "/api": {
        target: "https://designer.mydatahelps.org",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api/v1/administration"),
      },
    },
  },
});
