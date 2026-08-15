<script>
	let { jsCode = '', javaCode = '', title = '' } = $props();
	let activeTab = $state('js'); // 'js' or 'java'
</script>

<div class="code-block-wrapper">
	<div class="code-header">
		{#if title}
			<span class="code-title">{title}</span>
		{/if}
		<div class="code-tabs">
			{#if jsCode}
				<button
					type="button"
					class:active={activeTab === 'js'}
					onclick={() => (activeTab = 'js')}
				>
					JavaScript / p5.js
				</button>
			{/if}
			{#if javaCode}
				<button
					type="button"
					class:active={activeTab === 'java'}
					onclick={() => (activeTab = 'java')}
				>
					Processing (Java)
				</button>
			{/if}
		</div>
	</div>

	<div class="code-body">
		{#if activeTab === 'js' && jsCode}
			<pre><code>{jsCode}</code></pre>
		{:else if activeTab === 'java' && javaCode}
			<pre><code>{javaCode}</code></pre>
		{:else if jsCode || javaCode}
			<pre><code>{jsCode || javaCode}</code></pre>
		{/if}
	</div>
</div>

<style>
	.code-block-wrapper {
		margin: 1.5rem 0;
		border: 1px solid var(--color-border, #e2e8f0);
		border-radius: 6px;
		background: #f8fafc;
		overflow: hidden;
	}

	.code-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 1rem;
		background: #edf2f7;
		border-bottom: 1px solid var(--color-border, #e2e8f0);
	}

	.code-title {
		font-family: var(--font-heading, 'Raleway', sans-serif);
		font-weight: 600;
		font-size: 0.85rem;
		color: #4a5568;
	}

	.code-tabs {
		display: flex;
		gap: 0.25rem;
	}

	.code-tabs button {
		background: none;
		border: none;
		padding: 0.25rem 0.6rem;
		font-size: 0.75rem;
		font-family: var(--font-heading, 'Raleway', sans-serif);
		font-weight: 600;
		color: #718096;
		cursor: pointer;
		border-radius: 4px;
		transition: all 0.15s ease;
	}

	.code-tabs button:hover {
		background: #e2e8f0;
		color: #2d3748;
	}

	.code-tabs button.active {
		background: var(--color-primary, #ff9600);
		color: #ffffff;
	}

	.code-body pre {
		margin: 0;
		padding: 1.25rem;
		overflow-x: auto;
		font-family: 'Fira Code', 'Consolas', 'Courier New', monospace;
		font-size: 0.9rem;
		line-height: 1.5;
		color: #2d3748;
		background: #f8fafc;
	}

	.code-body code {
		font-family: inherit;
	}
</style>
