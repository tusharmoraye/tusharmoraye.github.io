/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const config = {
	preprocess: sveltePreprocess(),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({})
	}
};

export default config;
