import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr'; 

export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Better JSX runtime for smaller bundle
      jsxRuntime: 'automatic'
    }), 
    svgr({
      // Only include SVGs that are actually used
      include: '**/*.svg',
      svgrOptions: {
        icon: true,
        // Reduce SVG bundle size
        memo: true
      }
    }), 
    tailwindcss()
  ],
  
  // Optimize dev server
  server: {
    hmr: {
      overlay: false
    }
  },
  
  build: {
    // Disable sourcemap in production for smaller files
    sourcemap: false,
    // Reduce chunk size warning limit
    chunkSizeWarningLimit: 250,
    // Enable minification with better compression
    minify: 'terser',
    // Enhanced Terser options for maximum compression
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
        dead_code: true,
        global_defs: {
          "process.env.NODE_ENV": '"production"'
        },
        // More conservative settings to avoid breaking code
        hoist_funs: false,
        hoist_props: false,
        reduce_funcs: false,
        reduce_vars: false,
        side_effects: false
      },
      mangle: {
        safari10: true,
        toplevel: false,
        keep_fnames: true,
        keep_classnames: true,
        reserved: ['ReactGA', 'ReactPixel', 'getCLS', 'getFID', 'getFCP', 'getLCP', 'getTTFB', 'reportWebVitals']
      },
      format: {
        comments: false,
        beautify: false
      }
    },
    rollupOptions: {
      // Advanced tree-shaking configuration
        treeshake: {
        preset: 'recommended',
        moduleSideEffects: (id) => {
          // Don't tree-shake CSS imports and known side-effect modules
          return id.endsWith('.css') ||
                 id.includes('slick-carousel/slick/slick.css') ||
                 id.includes('slick-carousel/slick/slick-theme.css');
        },
        // Enable property reads tracking
        propertyReadSideEffects: false,
        // More aggressive dead code elimination
        unknownGlobalSideEffects: false
      },
      // External dependencies that should not be bundled
      external: (id) => id === 'jquery' || id === '$',
      output: {
        // Better chunk splitting for optimal loading with size limits
        manualChunks: (id) => {
          // Vendor libraries with size optimization
          if (id.includes('node_modules')) {
            // Core React (small, critical)
            if (id.includes('react/') || id.includes('react-dom/')) {
              return 'react-core';
            }
            // Router (medium size, route-specific)
            if (id.includes('react-router')) {
              return 'router';
            }
            // Animation libraries (large, split by usage)
            if (id.includes('framer-motion')) {
              return 'animations';
            }
            // Slider libraries (large, only needed on specific pages)
            if (id.includes('react-slick') || id.includes('slick-carousel') || id.includes('swiper')) {
              return 'sliders';
            }
            // Icons (medium size, used across app)
            if (id.includes('react-icons')) {
              return 'icons';
            }
            // Analytics (small, async loaded)
            if (id.includes('react-ga4') || id.includes('react-facebook-pixel') || id.includes('web-vitals')) {
              return 'analytics';
            }
            // Helmet (small, SEO critical)
            if (id.includes('react-helmet-async')) {
              return 'helmet';
            }
            // Other vendor packages (catch-all)
            return 'vendor';
          }
          
          // Split large components based on route usage
          if (id.includes('src/Component/Products') || id.includes('src/Component/Gallery')) {
            return 'heavy-components';
          }
          
          // Split blog-related components
          if (id.includes('src/Component/Blog') || id.includes('src/Component/blogSection')) {
            return 'blog-components';
          }
        },
        // Optimize asset naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Target modern browsers for better optimization
    target: 'esnext',
  },
  
  // Define global variables
  define: {
    global: 'globalThis',
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'react-helmet-async',
      'jquery'
    ],
    exclude: ['@vite/client', '@vite/env'],
    // Pre-bundle critical dependencies
    force: true
  },
  
  // Reduce initial bundle size with better splitting
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      // Add version/cache busting for better caching
      if (hostType === 'js') {
        return `/${filename}?v=${Date.now()}`
      }
      return filename
    }
  },
});
