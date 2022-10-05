<script lang="ts">
	import Footer from '$lib/sections/Footer.svelte';
</script>

<svelte:head>
	<title>BizzFit | Bedankt voor het invullen!</title>
</svelte:head>

<div class="py-40 text-center">
	<div class="space-y-10 p-4">
		<h2 class="mb-12 text-2xl font-light text-gray-700">BizzFit</h2>
		<h1 class="mb-2 text-4xl font-semibold">Bedankt voor het invullen!</h1>
		<p>
			<a
				href="/formulier"
				class="rounded bg-yellow-500 py-2 px-3 text-lg font-bold text-white hover:bg-yellow-600"
				>Nog een activiteit invullen</a>
		</p>
		<p><a href="/" class="font-bold text-blue-600">Naar de BizzFit homepagina</a></p>
	</div>
</div>

<Footer />
