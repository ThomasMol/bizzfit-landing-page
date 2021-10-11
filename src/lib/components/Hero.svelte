<script>
	import EmailContactForm from './EmailContactForm.svelte';
</script>

<section id="hero" class="">
	<div class="container mx-auto">
		<div class="space-y-4 text-center py-20">
			<h1 class="text-4xl font-bold text-gray-800">Begin met BizzFit</h1>
			<p class="text-gray-600 text-xl ">
				De app om de werkvloer gezonder te maken en verzuim tegen te gaan!
			</p>
			<EmailContactForm />
		</div>
		<div class="">
			<img
				src="/images/hero.png"
				alt="BizzFit feed page screenshot"
				height="auto"
				width="auto"
				class="h-[400px] mx-auto" />
		</div>
	</div>
</section>
