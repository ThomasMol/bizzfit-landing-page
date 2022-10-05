<script>
	import EmailContactForm from '../components/EmailContactForm.svelte';
</script>

<section id="contact" class="bg-zinc-50 py-32 border-t">
	<div class="container flex flex-wrap gap-16">
		<div class="md:flex-1">
			<h2 class=" text-4xl font-semibold">Neem contact op</h2>
			<p class="my-4 text-zinc-700">
				Klaar voor een fittere werkvloer? </p>
			<p class="my-4 text-zinc-700">
				Ons team wil je graag face-to-face uitleggen hoe de app in elkaar zit en op welke manieren het
				jouw bedrijf kan helpen met de verbetering van de fysieke- en mentale gesteldheid van de werknemers.
				Vul hier je gegevens in en wij zullen zo snel mogelijk contact met je opnemen om je verder
				te helpen.
			</p>
			<a href="mailto:contact@bizzfit.app" class="font-semibold text-zinc-700"
				>contact&commat;bizzfit.app</a>
		</div>
		<div class="md:flex-1">
			<EmailContactForm />
		</div>
	</div>
</section>
