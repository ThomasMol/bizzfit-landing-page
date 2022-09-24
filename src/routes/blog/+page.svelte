<script lang="ts">
	export let data;
	const posts = Object.values(data);
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<svelte:head>
	<title>BizzFit Blog</title>
</svelte:head>

<div class="container mx-auto px-4 lg:px-16">
	<h1 class="py-10 text-2xl font-semibold text-gray-900">Alle Blog posts</h1>
	<div class="flex flex-wrap justify-between gap-10">
		{#each posts as post}
			<a
				href="/blog/{post.path}"
				class="flex flex-col justify-between rounded-lg border bg-zinc-50 hover:bg-zinc-100 hover:shadow-sm md:flex-1">
				<img
					src={post.meta.thumbnail}
					alt="Blog thumbnail"
					class="h-40 w-full overflow-hidden rounded-t-lg object-cover" />
				<h2 class="px-4 pt-4 text-xl font-semibold text-gray-800">
					{post.meta.title}
				</h2>
				<div class="px-4 pb-4">
					<h3 class="text-semibold py-3 text-sm capitalize text-zinc-500">
						{new Date(post.meta.date).toLocaleDateString('nl-NL', options)}
					</h3>
					<p class="text-gray-600 line-clamp-2">
						{post.meta.excerpt}
					</p>
					<p class="mt-4 font-bold text-amber-500">Lees meer</p>
				</div>
			</a>
		{/each}
	</div>
</div>
