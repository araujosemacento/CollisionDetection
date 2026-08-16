import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

const isDev = process.argv.includes('dev');
const repositoryName = process.env.GITHUB_REPOSITORY
	? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`
	: '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [mdsvex({ extensions: ['.svx', '.md'] })],
	extensions: ['.svelte', '.svx', '.md'],
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: isDev ? '' : (process.env.BASE_PATH ?? repositoryName)
		}
	}
};

export default config;
