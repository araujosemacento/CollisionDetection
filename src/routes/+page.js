import { load as loadSlug } from './[slug]/+page.js';

export async function load(event) {
	return loadSlug({ ...event, params: { slug: 'index' } });
}
