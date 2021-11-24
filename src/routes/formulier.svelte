<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	// This variable is a boolean, however, its changed using radio inputs with 1 or a 0
	// Hopefully 1 and 0 are parsed as booleans to true and false
	let knowsCalorieCount = 1;

	let activityType = 'Wielrennen';

	let weight: number;
	let time: number;

	let userAgent: string;
	let submissionDate: number;

	onMount(() => {
		userAgent = navigator.userAgent;
		submissionDate = Date.now();
	});

	const calculateCalories = (time: number, met: number, weight: number) => {
		return (time * met * weight * 3.5) / 200;
	};

	$: calorie = calculateCalories(time, activityTypes.get(activityType), weight);

	const activityTypes = new Map([
		['Badminton', 6],
		['Basketball', 6.5],
		['Boxen', 8],
		['Calisthenics', 3.8],
		['Cricket', 4.8],
		['Crossfit', 6],
		['Dansen', 7.8],
		['Fietsen', 7],
		['Gewichtheffen', 5],
		['Golf', 4.8],
		['Gymnastiek', 3.8],
		['Handbal', 8],
		['Hardlopen', 10],
		['Hockey', 7.8],
		['Honkbal', 5],
		['IJshockey', 8],
		['Paardrijden', 5.5],
		['Roeien', 12],
		['Roeimachine', 7],
		['Schaatsen', 7],
		['Skieen', 7],
		['Squash', 7.3],
		['Tennis', 7.3],
		['Voetballen', 7],
		['Wandelen', 3.5],
		['Wielrennen', 11],
		['Yoga', 3],
		['Zwemmen', 7]
	]);

</script>

<svelte:head>
	<title>BizzFit | Formulier</title>
</svelte:head>

<section id="form" class="pb-6">
	<div class="max-w-2xl mx-auto px-3 md:px-0">
		<h1 class="font-bold italic text-4xl text-yellow-500 py-6 text-center">BizzFit</h1>
		<p class="text-lg mb-2">Vul hier de gegevens in van je activiteit!</p>
		<div class="border rounded-lg p-4 bg-gray-50">
			<form name="activities" method="GET" data-netlify="true" action="" class="space-y-5">
				<input type="hidden" name="form-name" value="activities" />

				<div class="col-span-6 sm:col-span-3">
					<label for="name" class="block text-sm font-medium text-gray-700">Je naam *</label>
					<input
						type="text"
						name="name"
						id="name"
						autocomplete="given-name"
						required
						class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
				</div>

				<div class="col-span-6 sm:col-span-4">
					<label for="email-address" class="block text-sm font-medium text-gray-700"
						>Je emailadres *</label>
					<input
						type="text"
						name="email-address"
						id="email-address"
						autocomplete="email"
						required
						class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
				</div>

				<div class="col-span-6 sm:col-span-3">
					<label for="type-activity" class="block text-sm font-medium text-gray-700"
						>Activiteit soort</label>
					<select
						id="type-activity"
						name="type-activity"
						autocomplete="type-activity"
						bind:value={activityType}
						class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm">
						{#each [...activityTypes.entries()] as [key, value]}
							<option value={key}>{key}</option>
						{/each}
					</select>
				</div>

				<div class="col-span-6 sm:col-span-3">
					<label for="time" class="block text-sm font-medium text-gray-700"
						>Hoe lang duurde je activiteit? (in minuten) *</label>
					<input
						type="number"
						name="time"
						id="time"
						min="0"
						bind:value={time}
						required
						class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
				</div>

				<fieldset>
					<div>
						<legend class="text-sm font-medium text-gray-700"
							>Weet je hoeveel calorie&euml;n je hebt verbrand?</legend>
					</div>
					<div class="mt-4 space-y-4">
						<div class="flex items-center">
							<input
								id="manual-calorie-yes"
								name="manual-calorie"
								type="radio"
								bind:group={knowsCalorieCount}
								value={1}
								class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
							<label for="manual-calorie-yes" class="ml-3 block text-sm font-medium text-gray-700">
								Ja
							</label>
						</div>
						<div class="flex items-center">
							<input
								id="manual-calorie-no"
								name="manual-calorie"
								type="radio"
								bind:group={knowsCalorieCount}
								value={0}
								class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
							<label for="manual-calorie-no" class="ml-3 block text-sm font-medium text-gray-700">
								Nee, help mij
							</label>
						</div>
					</div>
				</fieldset>

				{#if !knowsCalorieCount}
					<div class="col-span-6 sm:col-span-3" transition:fly="{{ y: -20, duration: 400 }}">
						<label for="calories" class="block text-sm font-medium text-gray-700"
							>Hoeveel kilogram weeg je? (We slaan deze data niet op!)</label>
						<input
							type="number"
							name="calories"
							id="calories"
							min="0"
							bind:value={weight}
							class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label for="calories" class="block text-sm font-medium text-gray-700"
							>Zoveel calorie&euml;n heb je verbrand:</label>
						<input
							type="number"
							name="calories"
							id="calories"
							min="0"
							bind:value={calorie}
							required
							readonly
							class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
					</div>
				{:else}
					<div class="col-span-6 sm:col-span-3">
						<label for="calories" class="block text-sm font-medium text-gray-700"
							>Hoeveel calorie&euml;n heb je verbrand? *</label>
						<input
							type="number"
							name="calories"
							id="calories"
							min="0"
							required
							class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
					</div>
				{/if}
				<div class="col-span-6 sm:col-span-3">
					<label for="date" class="block text-sm font-medium text-gray-700"
						>Wanneer was deze activiteit? *</label>
					<input
						type="date"
						name="date"
						id="date"
						required
						class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
				</div>

				<div>
					<label for="file-upload" class="block text-sm font-medium text-gray-700">
						Screenshot of foto van je activiteit *
					</label>
					<div class="flex text-sm text-gray-600">
						<label
							for="file-upload"
							class="relative cursor-pointer px-2 py-3 bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-yellow-500">
							<input
								id="file-upload"
								name="activity-photo"
								type="file"
								class="focus-within:outline-none"
								required />
						</label>
					</div>
				</div>
				<fieldset>
					<div>
						<legend class="text-sm font-medium text-gray-700"
							>Wil je deze foto delen met de andere deelnemers?</legend>
					</div>
					<div class="mt-4 space-y-4">
						<div class="flex items-center">
							<input
								id="share-yes"
								name="share-photo"
								type="radio"
								value="true"
								checked
								class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
							<label for="share-yes" class="ml-3 block text-sm font-medium text-gray-700">
								Ja graag!
							</label>
						</div>
						<div class="flex items-center">
							<input
								id="share-no"
								name="share-photo"
								type="radio"
								value="false"
								class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
							<label for="share-no" class="ml-3 block text-sm font-medium text-gray-700">
								Nee
							</label>
						</div>
					</div>
				</fieldset>

				<div class="mb-4 col-span-6 sm:col-span-3">
					<label for="message" class="block text-sm font-medium text-gray-700"
						>Heb je nog andere vragen of opmerkingen?</label>
					<textarea
						type="text"
						name="message"
						id="message"
						class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
				</div>

				<input type="hidden" name="user-agent" value={userAgent} />
				<input type="hidden" name="submission-date" value={submissionDate} />

				<button
					type="submit"
					class="py-2 px-3 font-bold rounded text-lg bg-yellow-500 text-white hover:bg-yellow-600">
					Verzenden
				</button>
			</form>
		</div>
	</div>
</section>

<Footer />
