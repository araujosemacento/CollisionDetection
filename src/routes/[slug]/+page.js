import { error } from '@sveltejs/kit';
import { chapters } from '$lib/utils/navigation.js';

export function entries() {
	return chapters.map((c) => ({ slug: c.slug }));
}

export async function load({ params }) {
	const { slug } = params;

	try {
		const post = await import(`../../lib/content/${slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		console.error(`Erro ao carregar o capítulo ${slug}:`, e);
		throw error(404, `Capítulo "${slug}" não encontrado.`);
	}
}
