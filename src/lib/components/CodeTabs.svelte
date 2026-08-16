<script>
	import { activeLanguage } from '$lib/stores/languageStore.js';

	let { children } = $props();
	let currentLang = $state($activeLanguage || 'p5js');
	let copied = $state(false);
	let wrapper = $state(null);

	$effect(() => {
		currentLang = $activeLanguage;
	});

	function selectLang(lang) {
		activeLanguage.set(lang);
	}

	async function copyCode() {
		if (!wrapper) return;
		const activePre = 
			(currentLang === 'p5js' && (wrapper.querySelector('pre.language-javascript') || wrapper.querySelector('pre.language-js'))) ||
			(currentLang === 'processing' && wrapper.querySelector('pre.language-java')) ||
			(currentLang === 'pygame' && (wrapper.querySelector('pre.language-python') || wrapper.querySelector('pre.language-py'))) ||
			wrapper.querySelector('pre');

		if (activePre) {
			try {
				await navigator.clipboard.writeText(activePre.textContent || '');
				copied = true;
				setTimeout(() => { copied = false; }, 2000);
			} catch (e) {
				console.error('Erro ao copiar código:', e);
			}
		}
	}
</script>

<div class="code-tabs-container" bind:this={wrapper}>
	<div class="code-tabs-header">
		<div class="tab-buttons">
			<button
				class="tab-btn"
				class:active={currentLang === 'p5js'}
				onclick={() => selectLang('p5js')}
				type="button"
			>
				<span class="dot js"></span> p5.js (JS)
			</button>
			<button
				class="tab-btn"
				class:active={currentLang === 'processing'}
				onclick={() => selectLang('processing')}
				type="button"
			>
				<span class="dot java"></span> Processing (Java)
			</button>
			<button
				class="tab-btn"
				class:active={currentLang === 'pygame'}
				onclick={() => selectLang('pygame')}
				type="button"
			>
				<span class="dot python"></span> Pygame (Python)
			</button>
		</div>

		<button class="copy-btn" onclick={copyCode} type="button" aria-label="Copiar código">
			{#if copied}
				<svg class="copy-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
				<span>Copiado!</span>
			{:else}
				<svg class="copy-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
				<span>Copiar</span>
			{/if}
		</button>
	</div>

	<div class="code-body-slotted" class:show-p5js={currentLang === 'p5js'} class:show-processing={currentLang === 'processing'} class:show-pygame={currentLang === 'pygame'}>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>

<style>
	.code-tabs-container {
		margin: 1.5rem 0 2rem 0;
		border-radius: 8px;
		background: #1e1e2e;
		border: 1px solid #313244;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
		overflow: hidden;
	}

	.code-tabs-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #181825;
		border-bottom: 1px solid #313244;
		padding: 0 0.5rem;
		user-select: none;
		flex-wrap: wrap;
	}

	.tab-buttons {
		display: flex;
		gap: 0.25rem;
		overflow-x: auto;
	}

	.tab-btn {
		background: transparent;
		border: none;
		color: #a6adc8;
		padding: 0.65rem 0.9rem;
		font-family: var(--font-heading, 'Raleway', sans-serif);
		font-size: 0.85rem;
		font-weight: 600;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		border-bottom: 2px solid transparent;
		transition: all 0.15s ease;
		white-space: nowrap;
	}

	.tab-btn:hover {
		color: #cdd6f4;
		background: rgba(255, 255, 255, 0.04);
	}

	.tab-btn.active {
		color: #ff9600;
		border-bottom-color: #ff9600;
		background: rgba(255, 150, 0, 0.08);
	}

	.dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		display: inline-block;
	}
	.dot.js { background: #f7df1e; }
	.dot.java { background: #ea2d2e; }
	.dot.python { background: #3776ab; }

	.copy-btn {
		background: transparent;
		border: 1px solid #45475a;
		color: #a6adc8;
		padding: 0.35rem 0.65rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-family: var(--font-heading, 'Raleway', sans-serif);
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.35rem;
		margin: 0.4rem;
		transition: all 0.15s ease;
	}

	.copy-btn:hover {
		background: #313244;
		color: #cdd6f4;
		border-color: #585b70;
	}

	.code-body-slotted {
		background: #1e1e2e;
	}

	:global(.code-body-slotted pre) {
		margin: 0 !important;
		border: none !important;
		border-radius: 0 !important;
		background: #1e1e2e !important;
		padding: 1.25rem 1rem !important;
		display: none;
	}

	:global(.code-body-slotted.show-p5js pre.language-javascript),
	:global(.code-body-slotted.show-p5js pre.language-js) {
		display: block !important;
	}

	:global(.code-body-slotted.show-processing pre.language-java) {
		display: block !important;
	}

	:global(.code-body-slotted.show-pygame pre.language-python),
	:global(.code-body-slotted.show-pygame pre.language-py) {
		display: block !important;
	}
</style>
