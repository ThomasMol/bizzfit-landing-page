<script>
	import Fitness from '$lib/svg/Fitness.svelte';
	import Leaderboard from '$lib/svg/Leaderboard.svelte';
	import Run from '$lib/svg/Run.svelte';
	import Trophy from '$lib/svg/Trophy.svelte';
</script>

<section id="features" class="bg-white">
	<div class="container mx-auto py-44 px-4 md:px-0">
		<h2 class="mb-16 text-center text-2xl font-bold text-gray-800">
			Zo maken we jouw werkvloer fitter
		</h2>
		<div class="flex flex-wrap space-y-10 md:space-y-0 md:space-x-20">
			<div class="space-y-4 md:flex-1">
				<div class="inline-block h-16 rounded-lg bg-orange-100 p-3 text-orange-400">
					<Run />
				</div>
				<h3 class="text-xl font-semibold text-gray-800">Fitness tracking</h3>
				<p class="text-gray-600">
					Gebruikers kunnen hun fitness tracken door de integratie met bekende fitness apps als
					Fitbit en Strava.
				</p>
			</div>
			<div class="space-y-4 md:flex-1">
				<div class="inline-block h-16 rounded-lg bg-orange-100 p-3 text-orange-400">
					<Leaderboard />
				</div>
				<h3 class="text-xl font-semibold text-gray-800">Competitie</h3>
				<p class="text-gray-600">
					Deelnemers doen mee aan een maandelijkste competities en zien hun score op de leaderboard.
				</p>
			</div>
			<div class="space-y-4 md:flex-1">
				<div class="inline-block h-16 rounded-lg bg-orange-100 p-3 text-orange-400">
					<Trophy />
				</div>
				<h3 class="text-xl font-semibold text-gray-800">Beloningen</h3>
				<p class="text-gray-600">Maandelijks worden winnaars beloond met leuke prijzen!</p>
			</div>
		</div>
	</div>
</section>
