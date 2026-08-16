<script>
	import { base } from '$app/paths';
	import { getChapterInfo } from '$lib/utils/navigation.js';

	let { slug = 'index' } = $props();

	let info = $derived(getChapterInfo(slug));
	let titleText = $state('Detecção de Colisão');

	function handleTitleHover(isHovered) {
		if (isHovered) {
			titleText = 'Sumário';
		} else {
			titleText = 'Detecção de Colisão';
		}
	}

	function handlePrevHover(isHovered) {
		if (isHovered && info?.prev) {
			titleText = `Ant: ${info.prev.title}`;
		} else {
			titleText = 'Detecção de Colisão';
		}
	}

	function handleNextHover(isHovered) {
		if (isHovered && info?.next) {
			titleText = `Próx: ${info.next.title}`;
		} else {
			titleText = 'Detecção de Colisão';
		}
	}
</script>

{#if slug !== 'index'}
	<header class="header-nav">
		<div class="nav-container">
			<div class="nav-prev">
				{#if info?.prev}
					<a
						href="{base}/{info.prev.slug}"
						onmouseenter={() => handlePrevHover(true)}
						onmouseleave={() => handlePrevHover(false)}
						aria-label="Capítulo anterior"
					>
						&larr;
					</a>
				{:else}
					&nbsp;
				{/if}
			</div>

			<div class="nav-title">
				{#if slug === 'table_of_contents'}
					<a href="{base}/">Detecção de Colisão</a>
				{:else}
					<a
						href="{base}/table_of_contents"
						onmouseenter={() => handleTitleHover(true)}
						onmouseleave={() => handleTitleHover(false)}
					>
						{titleText}
					</a>
				{/if}
			</div>

			<div class="nav-next">
				{#if info?.next}
					<a
						href="{base}/{info.next.slug}"
						onmouseenter={() => handleNextHover(true)}
						onmouseleave={() => handleNextHover(false)}
						aria-label="Próximo capítulo"
					>
						&rarr;
					</a>
				{:else}
					&nbsp;
				{/if}
			</div>
		</div>
	</header>
{/if}

<style>
	.header-nav {
		margin: 1.5rem 0 2rem 0;
		font-family: var(--font-heading, 'Raleway', sans-serif);
	}

	.nav-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin: 0;
		padding: 0;
	}

	.nav-prev,
	.nav-next {
		font-size: 1.5rem;
		font-weight: bold;
		width: 48px;
		flex-shrink: 0;
		text-align: center;
	}

	.nav-title {
		flex: 1;
		text-align: center;
		font-size: 1.1rem;
		font-weight: 800;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.nav-title a {
		display: block;
		width: 100%;
		padding: 0.2rem 0;
		text-align: center;
	}

	a {
		color: var(--color-text, #222);
		text-decoration: none;
		transition: color 0.15s ease;
	}

	a:hover {
		color: var(--color-primary, #ff9600);
	}
</style>
