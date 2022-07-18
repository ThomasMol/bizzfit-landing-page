<script lang="ts">
	import SolidCheck from '$lib/svg/SolidCheck.svelte';
</script>

<section id="hero">
	<div class="container mx-auto lg:flex px-4 lg:px-16">
		<div class="flex-1 basis-1/2 py-8 lg:py-20 text-center lg:text-left">
			<h1 class="mb-3 text-4xl font-semibold">Begin met <span class="text-orange-700 font-['Coolvetica']">bizzfit</span></h1>
			<h2 class="mb-5 text-2xl font-semibold text-zinc-700">
				De manier voor een fittere werkvloer
			</h2>
			<ul class="lg:mb-10 space-y-2">
				<li>
					<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-600"><SolidCheck /></span> Korte
					uitleg van belangrijke benefit
				</li>
				<li>
					<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-600"><SolidCheck /></span> Korte
					uitleg van belangrijke benefit
				</li>
				<li>
					<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-600"><SolidCheck /></span> Korte
					uitleg van belangrijke benefit
				</li>
			</ul>
			<div class="flex flex-wrap gap-4 md:gap-8">
				<div class="text-center mx-auto">
					<p class="py-5 text-sm font-semibold text-zinc-700">Je bent een werknemer</p>
					<a
						href="/#contact"
						class="rounded bg-gradient-to-tr from-orange-700 to-orange-600 w-full py-2 px-8 text-xl font-semibold text-zinc-100 no-underline hover:from-rose-700 hover:to-orange-600 hover:text-zinc-50"
						>Beveel ons aan</a>
				</div>
				<div class="text-center mx-auto">
					<p class="py-5 text-sm font-semibold text-zinc-700">Je bent een werkgever</p>
					<a
						href="/#contact"
						class="rounded border border-orange-700 py-2 px-8 text-xl font-semibold text-orange-700 no-underline hover:bg-orange-700 hover:text-zinc-50"
						>Plan een demo</a>
				</div>
			</div>
		</div>
		<div class="flex-1 basis-1/2 lg:py-12 overflow-hidden">
			<img src="/images/runnerhero.png" alt="Woman running" class="mx-auto block w-42 lg:w-80" />
			<!-- <div class="absolute top-10 left-1/2 ">
				<div
					class="relative -top-1/2 left-1/2 -z-10 -ml-36 mt-10 h-72 w-72 rounded-full bg-orange-300 opacity-70 mix-blend-multiply blur-3xl filter" />
				<div
					class="relative -top-1/2 left-1/2 -z-10 -mt-10 h-72 w-72 rounded-full bg-blue-300 opacity-50 mix-blend-multiply blur-3xl filter" />
			</div> -->
		</div>
	</div>
</section>
