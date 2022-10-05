<script lang="ts">
	import CirlceBackground from '$lib/svg/CirlceBackground.svelte';
	import SolidCheck from '$lib/svg/SolidCheck.svelte';
	import { fly } from 'svelte/transition';
</script>

<section id="hero" class="border-b bg-zinc-50 pt-16 overflow-hidden">
	<div class="container lg:flex ">
		<div class="flex-1 basis-1/2 py-8 text-center lg:py-40 md:text-left">
			<h1 class="mb-5 text-3xl font-semibold text-zinc-800">
				Dé manier voor een fittere werkvloer
			</h1>
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
			<div class="flex flex-wrap gap-4 md:gap-8 justify-around md:justify-start">
				<div class=" text-center">
					<p class="py-5 text-sm font-semibold text-zinc-700">Plan een demo</p>
					<a
						href="/#contact"
						class="w-full rounded bg-gradient-to-tr from-amber-500 to-amber-600 py-2 px-8 text-xl font-semibold text-zinc-100 no-underline hover:from-amber-700 hover:to-amber-600 hover:text-zinc-50"
						>Conact ons</a>
				</div>
				<div class=" text-center">
					<p class="py-5 text-sm font-semibold text-zinc-700">Bekijk onze features</p>
					<a
						href="/#benefits"
						class="rounded border border-amber-500 py-2 px-8 text-xl font-semibold text-amber-500 no-underline hover:bg-amber-500 hover:text-zinc-50"
						>Lees meer</a>
				</div>
			</div>
		</div>
		<div class="relative flex-1 basis-1/2 self-end ">
			<img src="/images/challenges-hero-ss.png" alt="Woman running" class="z-10 relative mx-auto block w-80 " />
		
		</div>
	</div>
</section>
