<script lang="ts">
	import Analytics from '$lib/svg/Analytics.svelte';
	import Challenge from '$lib/svg/Challenge.svelte';
	import Connect from '$lib/svg/Connect.svelte';
	import Leaderboard from '$lib/svg/Leaderboard.svelte';
	import Trophy from '$lib/svg/Trophy.svelte';
</script>

<section
	id="features"
	class=" bg-[url('/images/backgrounds/gradient2_mobile.svg')] bg-bottom bg-no-repeat lg:bg-[url('/images/backgrounds/gradient2_lg.svg')]">
	<div class="container mx-auto px-4 py-20 lg:px-16">
		<div class="mb-40 flex flex-wrap">
			<div class="md:flex-1">
				<h2 class="mb-16 text-4xl font-semibold">Onze features</h2>
				<dl class="space-y-10">
					<div>
						<dt>
							<div
								class="absolute flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 p-3 text-amber-400">
								<Leaderboard />
							</div>
							<p class="ml-16 text-lg font-medium leading-6">Competitie</p>
						</dt>
						<dd class="mt-2 ml-16 text-base text-zinc-500">
							BizzFit biedt binnen je bedrijf een competitie aan. Degene die de meeste progressie
							maakt zal bovenaan de ranking staan. Met behulp van updates over de competitie wordt
							je aangedreven om te blijven bewegen. Het is ook mogelijk om anoniem mee te doen aan
							de competitie.
						</dd>
					</div>
					<div>
						<dt>
							<div
								class="absolute flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 p-3 text-amber-400">
								<Challenge />
							</div>
							<p class="ml-16 text-lg font-medium leading-6">Challenges</p>
						</dt>
						<dd class="mt-2 ml-16 text-base text-zinc-500">
							Meerdere challenges worden aangeboden om het bewegen te enthousiasmeren. Je kan
							meedoen aan individuele challenges, maar ook als groep een challenge doen. Haal
							challenges en krijg gave beloningen!
						</dd>
					</div>
					<div>
						<dt>
							<div
								class="absolute flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 p-3 text-amber-400">
								<Trophy />
							</div>
							<p class="ml-16 text-lg font-medium leading-6">Beloningen</p>
						</dt>
						<dd class="mt-2 ml-16 text-base text-zinc-500">
							Door lekker te bewegen met BizzFit kun je beloningen verdienen. Deze komen in
							verschillende vormen. Bijvoorbeeld: Badges voor in de app, kortingscodes en échte
							trofeeën voor op je bureau.
						</dd>
					</div>
				</dl>
			</div>
			<div class="h-full w-full md:flex-1">
				<img src="/images/feed.png" alt="Leaderbaord" class="mx-auto mt-10 w-52 md:mt-32" />
			</div>
		</div>
		<div class="flex flex-col-reverse flex-wrap md:flex-row">
			<div class="mt-10 w-full md:mt-0 md:flex-1">
				<div>
					<img
						src="/images/fitbit.webp"
						alt="Fitbit"
						class="relative top-10 left-10 w-20 rounded-lg shadow" />
					<img
						src="/images/strava.webp"
						alt="Strava"
						class="relative -top-2 left-60 w-20 rounded-lg shadow" />
					<img
						src="/images/googlefit.webp"
						alt="Google fit"
						class="relative -top-2 left-2 w-20 rounded-lg shadow" />
					<img
						src="/images/applehealth.webp"
						alt="Apple health"
						class="relative left-52 -top-2 w-20 rounded-lg shadow" />
				</div>
			</div>
			<div class="md:flex-1">
				<h2 class="mb-16 text-4xl font-semibold">We maken het makkelijk</h2>
				<dl class="space-y-10">
					<div>
						<dt>
							<div
								class="absolute flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 p-3 text-amber-400">
								<Connect />
							</div>
							<p class="ml-16 text-lg font-medium leading-6">Fitness tracking</p>
						</dt>
						<dd class="mt-2 ml-16 text-base text-zinc-500">
							BizzFit maakt het makkelijk om je bewegen bij te houden. Door middel van de ingebouwde
							tracker kun je elke keer dat je gaat bewegen alles opnemen. Gebruik je al een
							gezondheidsapp zoals Strava of Apple Health? Dan kun je direct vanuit die app je
							activiteiten naar BizzFit synchroniseren. Je hoeft dus niks extra bij te houden!
						</dd>
					</div>
					<div>
						<dt>
							<div
								class="absolute flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 p-3 text-amber-400">
								<Analytics />
							</div>
							<p class="ml-16 text-lg font-medium leading-6">Auto analytics</p>
						</dt>
						<dd class="mt-2 ml-16 text-base text-zinc-500">
							Alle workout-data die je opneemt in de app wordt automatisch gebruikt om slimme
							analyses te doen. De inzichten worden met jou gedeeld om je beter te laten bewegen.
							Jouw data en analyses worden niet gedeeld met anderen.
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</section>
