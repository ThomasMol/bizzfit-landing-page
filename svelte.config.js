import preprocess from 'svelte-preprocess';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import vercelAdapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({
        postcss: true
    })],

	kit: {
		// hydrate the <body id="svelte"> element in src/app.html		
		target: '#svelte',
		adapter: vercelAdapter()
	}
};

export default config;
