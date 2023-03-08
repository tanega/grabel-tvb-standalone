// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import { resolve } from 'path'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [
    mdsvex(mdsvexConfig),
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    alias: {
      $lib: resolve('./src/lib'),
      $data: resolve('./src/data'),
      $stores: resolve('./src/stores'),
    },
    adapter: adapter(),
  },
}

export default config
