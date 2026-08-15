<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CanvasSketch from '$lib/components/CanvasSketch.svelte';

	let { data } = $props();

	let Content = $derived(data.content);
	let meta = $derived(data.meta || {});
</script>

<svelte:head>
	<title>Detecção de Colisão 2D - Jeff Thompson</title>
</svelte:head>

<Header slug="index" />

{#if meta.sketch}
	<CanvasSketch sketchName={meta.sketch} caption={meta.caption || ''} />
{/if}

<main class="chapter-body">
	<Content />
</main>

<Footer slug="index" />

<style>
	.chapter-body {
		margin-top: 1rem;
	}
</style>
