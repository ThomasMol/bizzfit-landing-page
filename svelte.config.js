import preprocess from 'svelte-preprocess';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
        postcss: true
    }),
		mdsvex({
      extensions: ['.md']
    })
	],
	extensions: ['.svelte', '.md'],
	kit: {	
		adapter: netlifyAdapter({
			edge: false,
			split: true
		})
	}
};

export default config;
