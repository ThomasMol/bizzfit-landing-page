<script>
import EmailContactForm from "../EmailContactForm.svelte";

</script>
<section id="contact" class="bg-zinc-50">
	<div class="container mx-auto flex flex-wrap gap-10 px-4 py-32 lg:px-16">
		<div class="md:flex-1">
			<h2 class="pb-10 text-4xl font-semibold">Neem contact op</h2>
			<p class="mb-4">
				Klaar voor een fittere werkvloer? <br><br>
				Ons team wil je graag face-to-face uitleggen hoe de app in elkaar zit en op welke manieren het jouw bedrijf kan helpen met de verbetering van de fysieke- en mentale gesteldheid van de werknemers. 
				Vul hieronder je gegevens in en wij zullen zo snel mogelijk contact met je opnemen om je verder te helpen.
			</p>
			<a href="mailto:contact@bizzfit.app" class="font-semibold text-zinc-700"
				>contact&commat;bizzfit.app</a>
		</div>
		<div class="md:flex-1">
			<EmailContactForm/>
		</div>
	</div>
</section>
