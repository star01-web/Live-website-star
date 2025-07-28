import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr'; 

export default defineConfig({
  plugins: [react(), svgr(), tailwindcss()],
  build: {
     sourcemap: true,
    chunkSizeWarningLimit: 700, // prevent warning until chunk > 700KB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom')) return 'router';
            if (id.includes('framer-motion')) return 'framer';
            if (id.includes('react-icons')) return 'icons';
            if (id.includes('react-slick') || id.includes('slick-carousel')) return 'slider';
            if (id.includes('reactflow')) return 'reactflow';
            if (id.includes('@fontsource')) return 'fonts';
            if (id.includes('tailwindcss')) return 'tailwind';
            if (id.includes('react')) return 'react'; // catch-all for react + react-dom
          }
        },
      },
    },
  },
});
