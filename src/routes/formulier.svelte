<script context="module" lang="ts">
	/* export async function load({ page, fetch, session, context }) {
		return {
			props: {
				name: page.query.get('name'),
				emailAddress: page.query.get('email')
			}
		};
	} */
	export const prerender = true;

</script>

<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';

	let name = '';
	let emailAddress = '';



	let userAgent;
	let submissionDate;
	onMount(() => {
		userAgent = navigator.userAgent;
		submissionDate = Date.now();
	});
</script>

<svelte:head>
	<title>BizzFit | Formulier</title>
</svelte:head>

<section id="form" class="pb-6">
	<div class="max-w-2xl mx-auto px-3 md:px-0">
		<h1 class="font-light text-2xl text-gray-700 py-6">BizzFit</h1>
		<p class="text-lg mb-2">Vul hier de gegevens in van je activiteit!</p>
		<div class="border rounded-lg p-4 bg-gray-50">
			<form method="POST" action="/dankjewel" class="space-y-5" data-netlify="true" name="activity-form">
        <input type="hidden" name="form-name" value="activity-form">
				<div class="col-span-6 sm:col-span-3">
					<label for="name" class="block text-sm font-medium text-gray-700">Je naam *</label>
					<input
						type="text"
						name="name"
						id="name"
						autocomplete="given-name"						
						bind:value={name}
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
						bind:value={emailAddress}
						required
						class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
				</div>
				<div class="col-span-6 sm:col-span-3">
					<label for="natype-activityme" class="block text-sm font-medium text-gray-700"
						>Wat was het voor een activiteit? *</label>
					<input
						type="text"
						name="type-activity"
						id="type-activity"
						required
						class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
				</div>
				<div class="col-span-6 sm:col-span-3">
					<label for="time" class="block text-sm font-medium text-gray-700"
						>Hoe lang duurde je activiteit? (in minuten) *</label>
					<input
						type="number"
						name="time"
						id="time"
						min="0"
						required
						class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
				</div>
				<div class="col-span-6 sm:col-span-3">
					<label for="calories" class="block text-sm font-medium text-gray-700"
						>Hoeveel calorien heb je verbrand? *</label>
					<input
						type="number"
						name="calories"
						id="calories"
						min="0"
						required
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
				<div class="mb-4 col-span-6 sm:col-span-3">
					<label for="message" class="block text-sm font-medium text-gray-700"
						>Heb je nog andere opmerkingen?</label>
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
