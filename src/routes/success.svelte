<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>BizzFit | Bedankt voor je bericht!</title>
</svelte:head>

<div class="py-40 text-center">
	<div class="p-4 ">
		<h2 class="mb-12 text-2xl font-light text-gray-700">BizzFit</h2>
		<h1 class="mb-2 text-4xl font-semibold">Bedankt voor je bericht!</h1>
		<p class="mb-8 text-xl text-gray-700">We zullen je zo snel mogelijk benaderen.</p>
		<a href="/" class="font-bold text-yellow-600">Terug naar home</a>
	</div>
</div>

<Footer />
