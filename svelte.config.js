import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',      // Output folder
      assets: 'build',     // Static assets folder
      fallback: "index.html", // SPA fallback (important for dynamic routes)
    }),
    prerender: {
      entries: ['*'], // Include all routes
    },
  },
};

export default config;

