import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './remark-reading-time.mjs';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [remarkReadingTime],
    gfm: true
  },
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: vercel()
});