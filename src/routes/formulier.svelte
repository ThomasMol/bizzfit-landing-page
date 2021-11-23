<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';

	let met: number = 7.5;
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

	$: calorie = calculateCalories(time, met, weight);

	const activityTypes = [
		{
			name: 'Badminton',
			met: 6
		},
		{
			name: 'Basketball',
			met: 6.5
		},
		{
			name: 'Boxen',
			met: 8
		},
		{
			name: 'Calisthenics',
			met: 3.8
		},
		{
			name: 'Cricket',
			met: 4.8
		},
		{
			name: 'Crossfit',
			met: 6
		},
		{
			name: 'Dansen',
			met: 7.8
		},
		{
			name: 'Fietsen',
			met: 7
		},
		{
			name: 'Gewichtheffen',
			met: 5
		},
		{
			name: 'Golf',
			met: 4.8
		},
		{
			name: 'Gymnastiek',
			met: 3.8
		},
		{
			name: 'Handbal',
			met: 8
		},
		{
			name: 'Hardlopen',
			met: 10
		},
		{
			name: 'Hockey',
			met: 7.8
		},
		{
			name: 'Honkbal',
			met: 5
		},
		{
			name: 'IJshockey',
			met: 8
		},
		{
			name: 'Paardrijden',
			met: 5.5
		},
		{
			name: 'Roeien',
			met: 12
		},
		{
			name: 'Roeimachine',
			met: 7
		},
		{
			name: 'Schaatsen',
			met: 7
		},
		{
			name: 'Skieen',
			met: 7
		},
		{
			name: 'Squash',
			met: 7.3
		},
		{
			name: 'Tennis',
			met: 7.3
		},
		{
			name: 'Voetballen',
			met: 7
		},
		{
			name: 'Wandelen',
			met: 3.5
		},
		{
			name: 'Wielrennen',
			met: 11
		},
		{
			name: 'Yoga',
			met: 3
		},
		{
			name: 'Zwemmen',
			met: 7
		}
	];
</script>

<svelte:head>
	<title>BizzFit | Formulier</title>
</svelte:head>

<section id="form" class="pb-6">
	<div class="max-w-2xl mx-auto px-3 md:px-0">
		<h1 class="font-bold italic text-4xl text-yellow-500 py-6 text-center">BizzFit</h1>
		<p class="text-lg mb-2">Vul hier de gegevens in van je activiteit!</p>
		<div class="border rounded-lg p-4 bg-gray-50">
			<form
				name="activities"
				method="POST"
				data-netlify="true"
				action="/dankjewel"
				class="space-y-5">
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
						bind:value={met}
						class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm">
						{#each activityTypes as activityType}
							<option value={activityType.met}>{activityType.name}</option>
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

				<div class="col-span-6 sm:col-span-3">
					<label for="calories" class="block text-sm font-medium text-gray-700"
						>Hoeveel kilogram weeg je? (We slaan deze data niet op!)</label>
					<input
						type="number"
						name="calories"
						id="calories"
						min="0"
						bind:value={weight}
						required
						class="mt-1  focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
				</div>

				<div class="col-span-6 sm:col-span-3">
					<label for="calories" class="block text-sm font-medium text-gray-700"
						>Hoeveel calorie&euml;n heb je verbrand? *</label>
					<input
						type="number"
						name="calories"
						id="calories"
						min="0"
						bind:value={calorie}
						required
						disabled
						class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
				</div>

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
