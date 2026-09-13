import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://walshgardenandtree.ie',
  output: 'static',
  integrations: [sitemap()]
});
