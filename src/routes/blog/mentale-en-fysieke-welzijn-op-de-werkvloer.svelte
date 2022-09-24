<script lang="ts">
	import Contact from '$lib/components/sections/Contact.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import Navigation from '$lib/components/sections/Navigation.svelte';
</script>

<Navigation />
<section id="blog">
	<article class="container mx-auto max-w-4xl px-4 py-10 lg:px-16 ">
		<h1 class="mb-2 text-3xl font-semibold">Mentale en fysieke welzijn op de werkvloer</h1>
		<small class="text-semibold text-sm text-zinc-500">18 juli 2022</small>
		<p class="py-3 text-lg leading-8">
			De wereld om ons heen evolueert, ook op de werkvloer. Niets nieuws, maar nu jongere generaties
			het toneel betreden, zijn de HR-afdelingen constant bezig met initiatieven om aan de behoeftes
			en verwachtingen van deze nieuwe groep werknemers te voldoen. Al helemaal als het om welzijn
			gaat!
		</p>
		<p class="py-3 text-lg leading-8">
			Zonder de juiste welzijn onder werknemers zal ook imago van een bedrijf afnemen. Zodra
			arbeidskracht zich op hun gemak voelen op de werkplek zal dit leiden tot de beste reclame die
			er is; namelijk ‘mond-tot-mond’ reclame. Hierdoor kan een bedrijf zich veel beter positioneren
			op de markt, werknemers aantrekken (en vasthouden).
		</p>
		<p class="py-3 text-lg leading-8">
			Het is natuurlijk wel nodig om welzijn op de werkvloer duidelijk te definiëren. Hieronder
			vallen: de geestelijke gezondheid waarborgen, verbetering van de werkomgeving, helpen met het
			verbeteren van slapen (en stress tegen te gaan), maatschappelijk verantwoordelijk ondernemen,
			de geestelijke gezondheid waarborgen en het aanmoedigen van lichamelijk activiteiten. En mogen
			dit nou juist allemaal aspecten zijn waar wij, als BizzFit, heel erg goed in zijn.
		</p>
		<p class="py-3 text-lg leading-8">
			Ook hebben onderzoekers van de universiteiten van <a
				href="https://hbr.org/2015/12/proof-that-positive-work-cultures-are-more-productive"
				target="_blank"
				class="text-blue-600 hover:text-blue-800">Harvard en MIT</a> ontdekt dat werknemers die mentaal
			en fysiek sterk in hun vel zitten 31% meer productief zijn en 55% meer creatief. De focus op welzijn
			van werknemers heeft dus zeker een prioriteit!
		</p>
    <img src="/images/welzijn.png" alt="Welzijn" class="w-full h-96 object-cover">
	</article>
</section>
<Contact />
<Footer />
