<script lang="ts">
	import Challenge from '$lib/svg/Challenge.svelte';
	import Connect from '$lib/svg/Connect.svelte';
	import Trophy from '$lib/svg/Trophy.svelte';

	let index = 0;
	// array of features with image, title, icon and description
	const features = [
		{
			title: 'Challenges',
			icon: Challenge,
			description: `Meerdere challenges worden aangeboden om het bewegen en sporten aan te moedigen. 
			Doe mee met groepschallenges en haal samen met je collegas het doel!`,
			image: '/images/challenges-ss.png'
		},
		{
			title: 'Beloningen',
			icon: Trophy,
			description: `Door lekker te bewegen met Bizzfit kun je beloningen verdienen. Deze komen in
						verschillende vormen. Bijvoorbeeld: Badges voor in de app, kortingscodes en échte
						trofeeën voor op je bureau.`,
			image: '/images/feed-ss.png'
		},
		{
			title: 'Connect',
			icon: Connect,
			description: `Bizzfit maakt het makkelijk om je bewegen bij te houden. Je verbind gemakkelijk met bestaande
			health apps zoals Strava, Fitbit, Apple Health en Google Fit. Je activiteiten worden automatisch gesychroniseerd met Bizzfit.`,
			image: '/images/healthapps-ss.png'
		}
	];
</script>

<section id="features" class="bg-zinc-800 py-40">
	<div class="container flex flex-wrap">
		<div class="md:flex-1">
			<h2 class="pb-20 text-4xl font-semibold text-zinc-100">Features</h2>
			<dl class="space-y-14">
				{#each features as feature, i}
					<div
						on:mousedown={() => (index = i)}
						class="rounded-lg p-5 hover:cursor-pointer hover:bg-zinc-700"
						class:bg-zinc-700={index == i}>
						<dt>
							<div
								class="absolute flex h-8 w-8 items-center justify-center rounded-lg text-amber-500">
								<svelte:component this={feature.icon} />
							</div>
							<h2 class="ml-16 text-lg font-medium leading-6 text-zinc-100">{feature.title}</h2>
						</dt>
						<dd class="mt-2 ml-16 text-base text-zinc-200">{feature.description}</dd>
					</div>
				{/each}
			</dl>
		</div>
		<div class="h-full w-full md:flex-1">
			<img src={features[index].image} alt="Leaderbaord" class="mx-auto  max-w-sm" />
		</div>
	</div>
</section>
