<script>
	import { chapters } from '$lib/utils/navigation.js';

	const sections = [
		{
			name: 'Introdução & Conceitos Básicos',
			items: chapters.slice(0, 4)
		},
		{
			name: 'Seção 1: Pontos e Círculos',
			items: chapters.slice(4, 8)
		},
		{
			name: 'Seção 2: Retângulos',
			items: chapters.slice(8, 12)
		},
		{
			name: 'Seção 3: Linhas',
			items: chapters.slice(12, 17)
		},
		{
			name: 'Seção 4: Polígonos',
			items: chapters.slice(17, 23)
		},
		{
			name: 'Seção 5: Triângulos & Orientação a Objetos',
			items: chapters.slice(23)
		}
	];
</script>

<div class="toc-container">
	<h1>SUMÁRIO DO LIVRO</h1>
	<p class="intro">
		Selecione um capítulo abaixo para navegar pelas explicações detalhadas e demonstrações interativas de detecção de colisão 2D.
	</p>

	{#each sections as section}
		<div class="toc-section">
			<h2>{section.name}</h2>
			<ol>
				{#each section.items as chapter}
					<li>
						<a href="/{chapter.slug}">
							{chapter.title}
						</a>
					</li>
				{/each}
			</ol>
		</div>
	{/each}
</div>

<style>
	.toc-container {
		margin: 2rem 0;
	}

	h1 {
		font-family: var(--font-heading, 'Raleway', sans-serif);
		font-size: 2rem;
		font-weight: 800;
		color: var(--color-primary, #ff9600);
		margin-bottom: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.intro {
		font-family: var(--font-body, 'Lora', serif);
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 2rem;
		color: var(--color-text, #333);
	}

	.toc-section {
		margin-bottom: 2rem;
	}

	h2 {
		font-family: var(--font-heading, 'Raleway', sans-serif);
		font-size: 1.25rem;
		font-weight: 700;
		color: #2b6cb0;
		border-bottom: 2px solid #e2e8f0;
		padding-bottom: 0.4rem;
		margin-bottom: 0.75rem;
	}

	ol {
		padding-left: 1.5rem;
		margin: 0;
	}

	li {
		font-family: var(--font-heading, 'Raleway', sans-serif);
		font-size: 1.05rem;
		margin-bottom: 0.5rem;
	}

	a {
		color: var(--color-text, #2d3748);
		text-decoration: none;
		transition: color 0.15s ease;
	}

	a:hover {
		color: var(--color-primary, #ff9600);
		text-decoration: underline;
	}
</style>
