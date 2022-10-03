<script lang="ts">
	import Hero from '$lib/sections/Hero.svelte';
	import Benefits from '$lib/sections/Benefits.svelte';
	import Features from '$lib/sections/Features.svelte';
	import Pricing from '$lib/sections/Pricing.svelte';
	import Team from '$lib/sections/Team.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Blogs from '$lib/sections/Blogs.svelte';

	export let data;
	const posts = Object.values(data);
</script>

<svelte:head>
	<title>BizzFit</title>
</svelte:head>

<Hero />
<Benefits />
<Features />
<Team />
<Blogs posts={posts}/>
<Contact />
