<script lang="ts">
// list of faq items
const faqs = [
  {
    question: "Waarom zou ik Bizzfit willen gebruiken?",
    answer: "Bizzfit is een platform dat je helpt om de vitaliteit van je werknemers te verbeteren. Door middel van challenges zorgen we ervoor dat je werknemers gemotiveerd blijven om te blijven bewegen. ",
  },
  {
    question: "Welke health apps kan ik koppelen aan Bizzfit?",
    answer: "Bizzfit kan op dit moment worden verbonden met Google Fit, Apple Health, Strava en Fitbit. We zijn bezig met het toevoegen van meer apps.",
  },
  {
    question: "Wat doet Bizzfit met mijn gegevens?",
    answer: "Persoonlijke gegevens van gebruikers van de Bizzfit-app worden met zorgvuldigheid behandeld en beveiligd. Geen van deze data wordt gedeeld met derden.",
  },
];

</script>
<section id="faqs" class="py-32">
	<div class="container">
    <header class="pb-20 text-center">
      <h2 class="text-lg font-semibold text-amber-500">FAQs</h2>
			<h1 class="mt-4 text-4xl font-semibold text-zinc-900">Veelgestelde vragen</h1>
      <h3 class="mt-3 text-zinc-700 text-lg">Staat je vraag er niet tussen? neem contact op via contact@bizzfit.app</h3>
		</header>
    <div class="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
      {#each faqs as faq}
      <div>
        <h2 class="font-semibold text-lg text-zinc-900">{faq.question}</h2>
        <p class="mt-4 text-zinc-700">{faq.answer}</p>
      </div>
      {/each}
    </div>
	</div>
</section>
