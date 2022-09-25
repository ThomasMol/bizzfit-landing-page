<script lang="ts">
	export let data;
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<svelte:head>
	<title>BizzFit Blog | {data.title}</title>
</svelte:head>

<div class="px-4 py-20 lg:px-16">
	<article class="prose mx-auto">
		<a href="/blog" class="mb-6 block text-left no-underline font-semibold text-amber-500 hover:underline"
			>&#8249; Terug naar alle blog posts</a>

		<h1>{data.title}</h1>
		<small class="capitalize">{new Date(data.date).toLocaleDateString('nl-NL', options)}</small>
		<svelte:component this={data.content} />
		<img src={data.thumbnail} alt="" class="h-96 w-full object-cover" />
	</article>
</div>
