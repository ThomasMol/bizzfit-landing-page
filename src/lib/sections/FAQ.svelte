<script lang="ts">
// list of faq items
const faqs = [
  {
    question: "What is the purpose of this website?",
    answer: "This website is a collection of resources for learning about the web and web development. It is a work in progress and will be updated regularly.",
  },
  {
    question: "How can I contribute?",
    answer: "You can contribute by adding new resources or improving existing ones. You can also help by reporting any issues you find.",
  },
  {
    question: "How can I contact you?",
    answer: "You can contact me on Twitter or by email.",
  },
];

</script>
<section id="faqs" class="py-32">
	<div class="container">
		<header class="mb-20 text-center">
      <h2 class="text-amber-600 font-semibold">FAQs</h2>
			<h1 class="mt-3 text-4xl font-semibold text-zinc-900">Veelgestelde vragen</h1>
      <h3 class="mt-3 text-zinc-700 text-lg">Staat je vraag er niet tussen? neem contact op via contact@bizzfit.app</h3>
		</header>
    <div class="grid gap-10 grid-cols-3">
      {#each faqs as faq}
      <div>
        <h2 class="font-semibold text-lg text-zinc-900">{faq.question}</h2>
        <p class="mt-4 text-zinc-700">{faq.answer}</p>
      </div>
      {/each}
    </div>
	</div>
</section>
