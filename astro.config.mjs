// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: "https://jocular-gelato-58a66b.netlify.app",
  adapter: netlify(),
  integrations: [preact()]
});