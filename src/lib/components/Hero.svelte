<script>
	import EmailContactForm from './EmailContactForm.svelte';
</script>

<section id="hero" class="">
	<div class="container mx-auto px-2 md:px-0">
		<div class="space-y-4 text-center py-20">
			<h1 class="text-4xl font-bold text-gray-800">Begin met BizzFit</h1>
			<p class="text-gray-600 text-xl ">
				Het platform om sporten en bewegen te stimuleren onder collega's!
			</p>
			<EmailContactForm />
		</div>
		<div class="">
			<img
				src="/images/hero.png"
				alt="BizzFit feed page screenshot"
				height="auto"
				width="auto"
				class="h-auto w-[600px] mx-auto" />
		</div>
	</div>
</section>
