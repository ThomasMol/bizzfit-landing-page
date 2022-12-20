<script lang="ts">
	import ExternalLink from '$lib/svg/ExternalLink.svelte';
	import SolidCheck from '$lib/svg/SolidCheck.svelte';
</script>

<section id="hero" class="border-b bg-zinc-50 pt-16">
	<div class="container py-10 text-center">
		<header class="py-16">
			<h1 class="text-6xl font-semibold text-zinc-800">10x productiviteit</h1>
			<h2 class="mt-10 text-2xl font-semibold text-zinc-600">
				Verbeter vitaliteit en werkprestatie van werknemers
			</h2>
		</header>

		<div class="flex flex-wrap justify-center gap-4 py-10 md:justify-center md:gap-8">
			<div class="text-center">
				<a
					href="/#benefits"
					class="w-full rounded bg-gradient-to-tr from-amber-500 to-amber-600 py-2 px-8 text-xl font-semibold text-zinc-100 no-underline hover:from-amber-700 hover:to-amber-600 hover:text-zinc-50"
					>Bekijk meer</a>
			</div>
			<div class="text-center">
				<a
					href="/#benefits"
					class="flex items-center rounded border border-amber-500 py-2 px-8 text-xl font-semibold text-amber-500 no-underline hover:bg-amber-500 hover:text-zinc-50"
					>Probeer demo &nbsp;<ExternalLink /></a>
				<p class="py-5 text-sm font-semibold text-zinc-700">Coming soon...</p>
			</div>
		</div>
	</div>
</section>
