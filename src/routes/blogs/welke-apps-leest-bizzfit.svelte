<script lang="ts">
	import Contact from '$lib/components/sections/Contact.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import Navigation from '$lib/components/sections/Navigation.svelte';
</script>

<Navigation />
<section id="blog">
	<article class="container mx-auto max-w-4xl px-4 py-10 lg:px-16 ">
		<h1 class="mb-2 text-3xl font-semibold">Hoe connect je met BizzFit?</h1>
		<small class="text-semibold text-sm text-zinc-500">19 juli 2022</small>
		<p class="py-3 text-lg leading-8">
			Om goed gebruik te kunnen maken moet er natuurlijk wel de mogelijkheid zijn om applicaties te
			koppelen met BizzFit. De applicaties die tot nu toe gekoppeld kunnen worden zijn als volgt
		</p>
		<p class="py-3 text-lg leading-8">
			<i>Strava</i> - Dit platform is vooral geschikt voor hardlopers en fietsers die hun voortgang willen
			analyseren en eventueel delen met anderen. Je koppelt je navigatie apparaat aan je Strava account.
			Na je training upload je jouw trainingsdata naar de app. Ook zoek je fietsroutes in Strava die
			je instelt op je gps systeem.
		</p>
		<p class="py-3 text-lg leading-8">
			<i>Fitbit</i> - Je Fitbit activity tracker of smartwatch houdt van alles voor je bij, zoals je
			stappen, hartslag en beweging. Die informatie wordt opgeslagen in de Fitbit app. In die app stel
			je gezondheidsdoelen in en houd je jouw voortgang in de gaten.
		</p>
		<p class="py-3 text-lg leading-8">
			<i>Google Fit</i> - Met Google Fit kun je je fitnessgegevens meten, bijhouden en opslaan op je
			mobiele apparaten en smartwatches. Je hebt een mobiel apparaat en een Google-account nodig om aan
			de slag te gaan met Fit.
		</p>
		<p class="py-3 text-lg leading-8">
			<i>Apple Health</i> - De Gezondheid-app van Apple telt automatisch uw stappen en wandel- en hardloopafstanden.
			En wanneer u beschikt over een Apple Watch, houdt de app ook automatisch al uw activiteitsgegevens
			bij.
		</p>
		<p class="py-3 text-lg leading-8">
			Om de metingen te bevorderen kan je een wearable gebruiken. Voorbeelden hiervan zijn: Apple
			Watch, de Fitbit Charge 5 of een Garmin Forerunner 45. Dit zijn enkele voorbeelden van
			wearables die je steeds vaker voorbij ziet komen, natuurlijk zijn er nog veel meer die
			gebruikt kunnen worden in combinatie met BizzFit!
		</p>
		<p class="py-3 text-lg leading-8">
			Benieuwd naar wat BizzFit kan betekenen voor de vitaliteit binnen uw organisatie? Neem dan
			contact met ons op.
		</p>
		<img src="/images/smartwatch.png" alt="Welzijn" class="h-96 w-full object-cover" />
	</article>
</section>
<Contact />
<Footer />
