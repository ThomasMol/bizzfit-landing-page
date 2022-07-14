import preprocess from 'svelte-preprocess';
import netlifyAdapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({
        postcss: true
    })],

	kit: {	
		adapter: netlifyAdapter({
			edge: true,
			split: false
		}),
		prerender: {
			crawl: true,
			enabled: true,
			onError: "continue",
			entries: ['*'],
	},
	}
};

export default config;
