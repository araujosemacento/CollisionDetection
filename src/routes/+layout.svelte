<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Detecção de Colisão 2D</title>
</svelte:head>

<div id="wrapper">
	{@render children()}
</div>
