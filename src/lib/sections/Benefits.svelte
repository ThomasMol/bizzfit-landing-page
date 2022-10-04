<script lang="ts">
	import Sickleave from '$lib/svg/Sickleave.svelte';
	import Productivity from '$lib/svg/Productivity.svelte';
	import Teambuilding from '$lib/svg/Teambuilding.svelte';
</script>

<section id="benefits" class="py-44 ">
	<div class="container">
		<header class="pb-20 text-center">
			<h2 class="text-lg font-semibold text-amber-500">Benefits</h2>
			<h1 class="mt-4 text-4xl font-semibold text-zinc-900">Alle voordelen op een rijtje</h1>
		</header>
		<div class="flex flex-wrap justify-between gap-16">
			<div class="space-y-4 md:flex-1">
				<div class="inline-block h-14 rounded-lg bg-orange-100 p-3 text-amber-500">
					<Sickleave />
				</div>
				<h3 class="text-xl font-semibold text-gray-800">Minder verzuim</h3>
				<p class="text-gray-600">
					Doordat je meer gaat bewegen krijg je een sterke weerstand. Mensen met een sterke
					weerstand zijn aanzienlijk minder vaak ziek. Dit betekent dat het ziekteverzuim binnen je
					bedrijf omlaag gaat.
				</p>
			</div>
			<div class="space-y-4 md:flex-1">
				<div class="inline-block h-14 rounded-lg bg-orange-100 p-3 text-amber-500">
					<Teambuilding />
				</div>
				<h3 class="text-xl font-semibold text-gray-800">Teambuilding</h3>
				<p class="text-gray-600">
					BizzFit laat je samen met jouw collega's streven naar hetzelfde doel: een fittere
					werkvloer. Dit gezamenlijke doel helpt bij de Teambuilding op de werkvloer. Bijkomende
					features zoals group challenges versterken dit effect.
				</p>
			</div>
			<div class="space-y-4 md:flex-1">
				<div class="inline-block h-14 rounded-lg bg-orange-100 p-3 text-amber-500">
					<Productivity />
				</div>
				<h3 class="text-xl font-semibold text-gray-800">Betere werkprestaties</h3>
				<p class="text-gray-600">
					Een fitte werker staat gelijk aan een productieve werker. Onderzoek wijst uit dat
					gezondheid een grote rol speelt in de productiviteit op de werkvloer. Met behulp van
					BizzFit krijgt je vitaliteit een boost, en ga je blijer en beter aan het werk.
				</p>
			</div>
		</div>
	</div>
</section>
