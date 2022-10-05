<script lang="ts">
	import Challenge from '$lib/svg/Challenge.svelte';
	import Connect from '$lib/svg/Connect.svelte';
	import Swipe from '$lib/svg/Swipe.svelte';
	import Trophy from '$lib/svg/Trophy.svelte';
	import { fly } from 'svelte/transition';

	$: index = 0;
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

<section id="features" class="bg-zinc-800 py-20 md:py-40">
	<div class="container hidden flex-wrap md:flex">
		<div class="flex-1">
			<header class="pb-20 text-left">
				<h2 class="text-lg font-semibold text-amber-500">Features</h2>
				<h1 class="mt-4 text-4xl font-semibold text-zinc-100">Zo maken we jouw werkvloer fitter</h1>
			</header>
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
		<div class="h-full w-full flex-1">
			{#key index}
				<img
					class="mx-auto h-full w-full max-w-sm object-cover"
					in:fly={{ x: 30, duration: 400 }}
					src={features[index].image}
					alt={features[index].title} />
			{/key}
		</div>
	</div>

	<div class="container md:hidden">
		<header class="pb-5 text-left">
			<h2 class="text-lg font-semibold text-amber-500">Features</h2>
			<h1 class="mt-2 text-4xl font-semibold text-zinc-100">Zo maken we jouw werkvloer fitter</h1>
		</header>
		<div class="flex snap-x snap-mandatory gap-10 overflow-x-auto">
			{#each features as feature, i}
				<div class="min-w-full snap-center rounded-lg bg-zinc-700  relative">
					<img
						class="relative mx-auto w-full max-w-sm object-cover px-20 pt-4 pb-16"
						src={feature.image}
						alt={feature.title} />
					<div class="absolute inset-x-0 bottom-0 z-20 bg-zinc-700/80 backdrop-blur p-5 rounded-b-lg">
						<div class="h-8 w-8 items-center justify-center rounded-lg text-amber-500">
							<svelte:component this={feature.icon} />
						</div>
						<h2 class="mt-3 text-lg font-medium leading-6 text-zinc-100">{feature.title}</h2>
						<p class="mt-2 text-base text-zinc-200">{feature.description}</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="text-zinc-100 w-12 mx-auto p-2 mt-4 animate-wiggle">
			<Swipe/>
		</div>
	</div>
</section>
