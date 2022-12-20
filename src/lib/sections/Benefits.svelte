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
				<div class="inline-block h-12  rounded-lg bg-orange-100 p-3 text-amber-500">
					<Sickleave />
				</div>
				<h3 class="text-xl font-semibold text-gray-800">Minder verzuim</h3>
				<p class="text-gray-600">
					Gebruikers worden gemotiveerd om regelmatig te bewegen en te sporten, wat leidt tot minder
					verzuim door ziekte en een verbeterde gezondheid van gebruikers. Zo ga je makkelijk
					ziekteverzuim tegen.
				</p>
			</div>
			<div class="space-y-4 md:flex-1">
				<div class="inline-block h-12 rounded-lg bg-orange-100 p-3 text-amber-500">
					<Teambuilding />
				</div>
				<h3 class="text-xl font-semibold text-gray-800">Teambuilding</h3>
				<p class="text-gray-600">
					Onze app biedt leuke challenges en beloningen om werknemers te verbinden en te stimuleren
					om samen te werken, wat leidt tot verbeterde teambuilding en sociale interactie.
				</p>
			</div>
			<div class="space-y-4 md:flex-1">
				<div class="inline-block h-12 rounded-lg bg-orange-100 p-3 text-amber-500">
					<Productivity />
				</div>
				<h3 class="text-xl font-semibold text-gray-800">Betere werkprestaties</h3>
				<p class="text-gray-600">
					Wetenschappelijk onderzoek toont aan dat gezondheid een grote rol speelt in de
					productiviteit. Door fysiek en mentaal gezond te zijn gaan werkprestatiess en productiveit
					omhoog.
				</p>
			</div>
		</div>
	</div>
</section>
