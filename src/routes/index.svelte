<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
import FitnessApps from '$lib/components/FitnessApps.svelte';
</script>

<svelte:head>
	<title>BizzFit</title>
</svelte:head>

<Header />
<Hero />
<Features />
<FitnessApps />
<Contact />
<Footer />
