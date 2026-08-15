<script>
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
		<p class="nav-container">
			<span class="nav-prev">
				{#if info?.prev}
					<a
						href="/{info.prev.slug}"
						onmouseenter={() => handlePrevHover(true)}
						onmouseleave={() => handlePrevHover(false)}
					>
						&larr;
					</a>
				{:else}
					&nbsp;
				{/if}
			</span>

			<span class="nav-title">
				{#if slug === 'table_of_contents'}
					<a href="/">Detecção de Colisão</a>
				{:else}
					<a
						href="/table_of_contents"
						onmouseenter={() => handleTitleHover(true)}
						onmouseleave={() => handleTitleHover(false)}
					>
						{titleText}
					</a>
				{/if}
			</span>

			<span class="nav-next">
				{#if info?.next}
					<a
						href="/{info.next.slug}"
						onmouseenter={() => handleNextHover(true)}
						onmouseleave={() => handleNextHover(false)}
					>
						&rarr;
					</a>
				{:else}
					&nbsp;
				{/if}
			</span>
		</p>
	</header>
{/if}

<style>
	.header-nav {
		margin: 2rem 0 1.5rem 0;
		font-family: var(--font-heading, 'Raleway', sans-serif);
	}

	.nav-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0;
		padding: 0;
	}

	.nav-prev,
	.nav-next {
		font-size: 1.5rem;
		font-weight: bold;
		width: 40px;
		text-align: center;
	}

	.nav-title {
		font-size: 1.1rem;
		font-weight: 800;
		letter-spacing: 0.05em;
		text-transform: uppercase;
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
