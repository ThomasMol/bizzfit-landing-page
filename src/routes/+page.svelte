<script lang="ts">
	import Navigation from '$lib/components/sections/Navigation.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Benefits from '$lib/components/sections/Benefits.svelte';
	import Features from '$lib/components/sections/Features.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import Pricing from '$lib/components/sections/Pricing.svelte';
	import Team from '$lib/components/sections/Team.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
import Blogs from '$lib/components/sections/Blogs.svelte';
</script>

<svelte:head>
	<title>BizzFit</title>
</svelte:head>

<Navigation />
<Hero />
<Benefits />
<Features />
<Pricing />
<Team />
<Blogs/>
<Contact />
<Footer />