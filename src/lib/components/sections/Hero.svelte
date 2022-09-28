<script lang="ts">
	import SolidCheck from '$lib/svg/SolidCheck.svelte';
</script>

<section
	id="hero"
	class="pt-16 bg-[url('/images/backgrounds/gradient_mobile.svg')] bg-right  bg-no-repeat lg:bg-[url('/images/backgrounds/gradient_lg.svg')]">
	<div class="container mx-auto px-4 lg:flex lg:px-16">
		<div class="flex-1 basis-1/2 py-8 text-center lg:py-32 lg:text-left">
			<h1 class="mb-3 text-4xl font-semibold">
				Begin met <span class="font-coolvetica text-amber-500">bizzfit</span>
			</h1>
			<h2 class="mb-5 text-2xl font-semibold text-zinc-700">
				Dé manier voor een fittere werkvloer
			</h2>
			<ul class="space-y-2 text-left lg:mb-10">
				<li>
					<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-400"><SolidCheck /></span>
					Verbeter de vitaliteit onder werknemers
				</li>
				<li>
					<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-400"><SolidCheck /></span>
					Ga challenges aan mét of tegen je collega’s
				</li>
				<li>
					<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-400"><SolidCheck /></span>
					Makkelijk te linken met bijna alle gezondheidsapps
				</li>
			</ul>
			<div class="flex flex-wrap gap-4 md:gap-8">
				<div class="mx-auto text-center">
					<p class="py-5 text-sm font-semibold text-zinc-700">Je bent een werknemer</p>
					<a
						href="/#contact"
						class="w-full rounded bg-gradient-to-tr from-amber-500 to-amber-600 py-2 px-8 text-xl font-semibold text-zinc-100 no-underline hover:from-amber-700 hover:to-amber-600 hover:text-zinc-50"
						>Beveel ons aan</a>
				</div>
				<div class="mx-auto text-center">
					<p class="py-5 text-sm font-semibold text-zinc-700">Je bent een werkgever</p>
					<a
						href="/#contact"
						class="rounded border border-amber-500 py-2 px-8 text-xl font-semibold text-amber-500 no-underline hover:bg-amber-500 hover:text-zinc-50"
						>Plan een demo</a>
				</div>
			</div>
		</div>
		<div class="flex-1 basis-1/2 overflow-hidden lg:py-20">
			<img src="/images/runnerhero.png" alt="Woman running" class="w-42 mx-auto block lg:w-80" />
			<!-- <div class="absolute top-10 left-1/2 ">
				<div
					class="relative -top-1/2 left-1/2 -z-10 -ml-36 mt-10 h-72 w-72 rounded-full bg-amber-300 opacity-70 mix-blend-multiply blur-3xl filter" />
				<div
					class="relative -top-1/2 left-1/2 -z-10 -mt-10 h-72 w-72 rounded-full bg-blue-300 opacity-50 mix-blend-multiply blur-3xl filter" />
			</div>  -->
		</div>
	</div>
</section>
