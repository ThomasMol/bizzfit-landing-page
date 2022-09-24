<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import Benefits from '$lib/components/sections/Benefits.svelte';
	import Features from '$lib/components/sections/Features.svelte';
	import Pricing from '$lib/components/sections/Pricing.svelte';
	import Team from '$lib/components/sections/Team.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Blogs from '$lib/components/sections/Blogs.svelte';

	export let data;
	const posts = Object.values(data);
</script>

<svelte:head>
	<title>BizzFit</title>
</svelte:head>

<Hero />
<Benefits />
<Features />
<Pricing />
<Team />
<Blogs posts={posts}/>
<Contact />
