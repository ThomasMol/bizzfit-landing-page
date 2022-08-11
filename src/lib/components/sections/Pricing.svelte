<script lang="ts">
	import SolidCheck from '$lib/svg/SolidCheck.svelte';
</script>

<section id="pricing" class="my-40">
	<div class="container mx-auto px-4 lg:px-16">
		<h2 class="py-10 text-center text-4xl font-semibold">Simpele prijzen</h2>
		<div class="mb-20 flex justify-center">
			<div class="w-40 text-center">
				<h3 class="py-2 text-3xl font-semibold">&euro;299</h3>
				<p class="text-sm text-zinc-600">opzet kosten</p>
			</div>
			<div class="px-4 text-5xl font-thin text-zinc-600">+</div>
			<div class="w-40 text-center">
				<h3 class="py-2 text-3xl font-semibold">&euro;5</h3>
				<p class="text-sm text-zinc-600">per gebruiker / maand</p>
			</div>
		</div>
		<div class="flex flex-wrap justify-center gap-1 md:gap-20">
			<div class="">
				<ul class="space-y-2 lg:mb-10">
					<li class="border-b py-2">
						<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-600"><SolidCheck /></span>
						Verbeter de vitaliteit onder werknemers
					</li>
					<li class="border-b py-2">
						<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-600"><SolidCheck /></span>
						Ga challenges aan mét of tegen je collega’s
					</li>
					<li class="border-b py-2">
						<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-600"><SolidCheck /></span>
						Makkelijk te linken met bijna alle gezondheidsapps
					</li>
					<li class="border-b py-2">
						<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-600"><SolidCheck /></span>
						Dagelijks data over jouw gezondheidsprogressie
					</li>
				</ul>
			</div>
			<div class="">
				<ul class="space-y-2 lg:mb-10">
					<li class="border-b py-2">
						<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-600"><SolidCheck /></span>
						Overzicht van de ranking binnen het bedrijf (optioneel)
					</li>
					<li class="border-b py-2">
						<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-600"><SolidCheck /></span>
						Word beloond voor de persoonlijke- of groeps challenges 
					</li>
					<li class="border-b py-2">
						<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-600"><SolidCheck /></span>
						Overzichtelijk dashboard met alle functies
					</li>
					<li class="border-b py-2">
						<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-600"><SolidCheck /></span>
						Sportieve activiteiten makkelijk delen met je collega’s
					</li>
				</ul>
			</div>
		</div>
		<div class="text-center mt-10">
			<a
				href="/#contact"
				class="rounded bg-gradient-to-tr from-amber-500 to-amber-600 py-2 px-20 text-center text-xl font-semibold text-zinc-100 no-underline hover:from-amber-700 hover:to-amber-600 hover:text-zinc-50"
				>Plan een demo</a>
		</div>
	</div>
</section>