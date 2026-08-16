<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CanvasSketch from '$lib/components/CanvasSketch.svelte';

	let { data } = $props();

	let Content = $derived(data.content);
	let meta = $derived(data.meta || {});
	let slug = $derived(meta.slug || 'index');
</script>

<svelte:head>
	<title>{meta.title ? `${meta.title} - Detecção de Colisão` : 'Detecção de Colisão'}</title>
</svelte:head>

{#key slug}
	<Header {slug} />

	{#if meta.sketch}
		<CanvasSketch sketchName={meta.sketch} />
	{/if}

	<main class="chapter-body">
		<Content />
	</main>

	<Footer {slug} />
{/key}

<style>
	.chapter-body {
		margin-top: 1rem;
	}
</style>
