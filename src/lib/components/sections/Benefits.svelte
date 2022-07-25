<script lang="ts">
	import Leaderboard from '$lib/svg/Leaderboard.svelte';
	import Run from '$lib/svg/Run.svelte';
	import Trophy from '$lib/svg/Trophy.svelte';
</script>

<section id="benefits" class="my-20">
	<div class="container mx-auto px-4 lg:px-16">
		<h1 class="py-10 text-center text-4xl font-semibold">Benefits</h1>
		<div class="flex flex-wrap justify-between gap-10">
			<div class="space-y-4 md:flex-1">
				<div class="inline-block h-16 rounded-lg bg-orange-100 p-3 text-orange-400">
					<Run />
				</div>
				<h3 class="text-xl font-semibold text-gray-800">Minder verzuim</h3>
				<p class="text-gray-600">
					Doordat je meer gaat bewegen krijg je een sterke weerstand. Mensen met een sterke weerstand zijn aanzienlijk minder vaak ziek.
					Dit betekent dat het ziekteverzuim binnen je bedrijf omlaag gaat.
				</p>
			</div>
			<div class="space-y-4 md:flex-1">
				<div class="inline-block h-16 rounded-lg bg-orange-100 p-3 text-orange-400">
					<Leaderboard />
				</div>
				<h3 class="text-xl font-semibold text-gray-800">Teambuilding</h3>
				<p class="text-gray-600">
					BizzFit laat je samen met jouw collega's streven naar hetzelfde doel: een fittere werkvloer. 
					Dit gezamenlijke doel helpt bij de Teambuilding op de werkvloer. Bijkomende features zoals group challenges versterken dit effect.
				</p>
			</div>
			<div class="space-y-4 md:flex-1">
				<div class="inline-block h-16 rounded-lg bg-orange-100 p-3 text-orange-400">
					<Trophy />
				</div>
				<h3 class="text-xl font-semibold text-gray-800">Beter werkprestaties</h3>
				<p class="text-gray-600">
					Een fitte werker staat gelijk aan een productieve werker. Onderzoek wijst uit dat gezondheid een grote rol speelt in de productiviteit op de werkvloer.
					Met behulp van BizzFit krijgt je vitaliteit een boost, en ga je blijer en beter aan het werk.
				</p>
			</div>
		</div>
	</div>
</section>
