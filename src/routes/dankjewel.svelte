<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>BizzFit | Bedankt voor het invullen!</title>
</svelte:head>

<div class="text-center py-40">
	<div class="p-4 space-y-10">
		<h2 class="font-light text-2xl text-gray-700 mb-12">BizzFit</h2>
		<h1 class="text-4xl font-semibold mb-2">Bedankt voor het invullen!</h1>
		<p><a href="/formulier" class="py-2 px-3 font-bold rounded text-lg bg-yellow-500 text-white hover:bg-yellow-600">Nog een activiteit invullen</a></p>
		<p><a href="/" class="font-bold text-blue-600">Naar de BizzFit homepagina</a></p>
	</div>
</div>

<Footer />
