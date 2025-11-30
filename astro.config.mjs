import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://www.draganakorhner.photography',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  image: {
    // Image optimization settings
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Configure Sharp's image optimization
        // Keep files under 300KB
        jpeg: { quality: 80, progressive: true },
        jpg: { quality: 80, progressive: true },
        png: { quality: 80, compressionLevel: 8 },
        webp: { quality: 85 },
        avif: { quality: 85 }
      }
    },
    // Set default image dimensions
    defaultQuality: 80
  }
});