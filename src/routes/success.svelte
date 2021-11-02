<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>BizzFit | Bedankt voor je bericht!</title>
</svelte:head>

<div class="text-center py-40">
	<div class="p-4 ">
		<h2 class="font-light text-2xl text-gray-700 mb-12">BizzFit</h2>
		<h1 class="text-4xl font-semibold mb-2">Bedankt voor je bericht!</h1>
		<p class="text-xl text-gray-700 mb-8">We zullen je zo snel mogelijk benaderen.</p>
		<a href="/" class="font-bold text-yellow-600">Terug naar home</a>
	</div>
</div>

<Footer />
