<script>
	import Analytics from '$lib/svg/Analytics.svelte';
	import Ethereum from '$lib/svg/Ethereum.svelte';
	import Run from '$lib/svg/run.svelte';
	import Tokens from '$lib/svg/Tokens.svelte';
</script>

<section id="features" class="bg-gray-50">
	<div class="container mx-auto py-32">
		<div class="flex text-center">
			<div class="flex-1 space-y-4">
				<div class="h-16 text-white bg-yellow-500 rounded-full inline-block p-3">
					<Run />
				</div>
				<h3 class="font-bold text-xl text-gray-800">Fitness tracking</h3>
				<p class="text-gray-600">
					Werknemers kunnen hun fitness tracken door de integratie met bekende fitness apps als
					Fitbit en Strava.
				</p>
			</div>
			<div class="flex-1 space-y-4">
				<div class="h-16 text-white bg-yellow-500 rounded-full inline-block p-3">
					<Analytics />
				</div>
				<h3 class="font-bold text-xl text-gray-800">Data insights</h3>
				<p class="text-gray-600">
					Krijg toegang tot analyses over gezondheid van werknemers, volledig anoniem.
				</p>
			</div>
			<div class="flex-1 space-y-4">
				<div class="h-16 text-white bg-yellow-500 rounded-full inline-block p-3">
					<Tokens />
				</div>
				<h3 class="font-bold text-xl text-gray-800">Beloningen met Tokens</h3>
				<p class="text-gray-600">
					Deelnemers worden beloond met BizzFit Tokens die worden uitgegeven door middel van
					Smart-contracts.
				</p>
			</div>
		</div>
	</div>
</section>

<section id="features-2">
	<div class="container mx-auto py-40">
		<div class="flex">
			<div class="flex-1">
				<div class="h-60">
					<Ethereum />
				</div>
			</div>
			<div class="flex-1 space-y-4">
				<h2 class="text-4xl font-bold text-gray-800">Blockchain technologie voor beloningen</h2>
				<p class="text-gray-600">
					Zo worden deelnemers eerlijk beloond met Tokens op basis van hun activiteit.
					Smart-contracts zorgen voor de uitbetaling.
				</p>
			</div>
		</div>
	</div>
</section>
