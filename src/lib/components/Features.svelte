<script>
	import Analytics from '$lib/svg/Analytics.svelte';
	import Ethereum from '$lib/svg/Ethereum.svelte';
	import Fitness from '$lib/svg/Fitness.svelte';
	import Leaderboard from '$lib/svg/Leaderboard.svelte';
	import Run from '$lib/svg/Run.svelte';
	import Tokens from '$lib/svg/Tokens.svelte';
	import Trophy from '$lib/svg/Trophy.svelte';
</script>

<section id="features" class="bg-gray-50">
	<div class="container mx-auto py-32 px-4 md:px-0">
		<div class="flex flex-wrap text-center md:space-y-0 space-y-10 ">
			<div class="mx-auto md:flex-1 space-y-4">
				<div class="h-16 text-white bg-yellow-500 rounded-full inline-block p-3">
					<Run />
				</div>
				<h3 class="font-bold text-xl text-gray-800">Fitness tracking</h3>
				<p class="text-gray-600">
					Gebruikers kunnen hun fitness tracken door de integratie met bekende fitness apps als
					Fitbit en Strava.
				</p>
			</div>
			<div class="mx-auto md:flex-1 space-y-4">
				<div class="h-16 text-white bg-yellow-500 rounded-full inline-block p-3">
					<Leaderboard />
				</div>
				<h3 class="font-bold text-xl text-gray-800">Competitie</h3>
				<p class="text-gray-600">
					Deelnemers doen mee aan een maandelijkste competities en zien hun score op de leaderboard.
				</p>
			</div>
			<div class="mx-auto md:flex-1 space-y-4">
				<div class="h-16 text-white bg-yellow-500 rounded-full inline-block p-3">
					<Trophy />
				</div>
				<h3 class="font-bold text-xl text-gray-800">Beloningen</h3>
				<p class="text-gray-600">Maandelijks worden winnaars beloond met leuke prijzen!</p>
			</div>
		</div>
	</div>
</section>

<section id="features-2">
	<div class="container mx-auto py-32 px-4 md:px-0">
		<div class="flex flex-wrap md:px-0 px-2 space-y-4 md:space-y-0">
			<div class="mx-auto md:flex-1">
				<div class="h-32 max-w-max text-white bg-yellow-500 rounded-full  p-3">
					<Fitness />
				</div>
			</div>
			<div class="md:flex-1 space-y-4">
				<h2 class="text-4xl font-bold text-gray-800">Al meer dan 50,000 calorie&euml;n vebrand!</h2>

				<p class="text-gray-600"></p>
			</div>
		</div>
	</div>
</section>
