<script>
	import { onDestroy } from 'svelte';

	let { sketchName = '', caption = '' } = $props();
	let container = $state(null);
	let p5Instance = null;
	let errorMsg = $state('');

	function destroySketch() {
		if (p5Instance) {
			p5Instance.remove();
			p5Instance = null;
		}
	}

	$effect(() => {
		let active = true;
		const currentSketch = sketchName;
		const currentContainer = container;

		if (!currentSketch || !currentContainer) return;

		destroySketch();

		async function loadSketch() {
			try {
				const p5Module = await import('p5');
				const p5 = p5Module.default;
				const sketches = await import('$lib/sketches/index.js');
				const sketchFn = sketches[currentSketch];

				if (sketchFn && active && currentContainer) {
					currentContainer.innerHTML = '';
					p5Instance = new p5(sketchFn(currentContainer), currentContainer);
				}
			} catch (err) {
				console.error('Erro ao carregar o sketch p5.js:', err);
				if (active) errorMsg = 'Erro ao carregar a demonstração interativa.';
			}
		}

		loadSketch();

		return () => {
			active = false;
			destroySketch();
		};
	});

	onDestroy(() => {
		destroySketch();
	});
</script>

<div class="sketch-container" role="img" aria-label={caption || `Demonstração interativa em Canvas/p5.js de colisão ${sketchName}`}>
	<div class="sketch-wrapper" bind:this={container}>
		{#if errorMsg}
			<p class="error">{errorMsg}</p>
		{/if}
	</div>
</div>

<style>
	.sketch-container {
		margin: 0 0 2rem 0;
		padding: 0;
	}

	.sketch-wrapper {
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #ffffff;
		border-radius: 4px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
		overflow: hidden;
		min-height: 200px;
	}

	:global(.sketch-wrapper canvas) {
		display: block;
		max-width: 100%;
		height: auto !important;
	}

	.error {
		color: #e53e3e;
		padding: 1rem;
		font-family: sans-serif;
	}
</style>
