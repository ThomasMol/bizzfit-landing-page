<section id="contact" class="bg-zinc-50">
	<div class="container mx-auto flex flex-wrap gap-10 px-4 py-32 lg:px-16">
		<div class="md:flex-1">
			<h2 class="pb-10 text-4xl font-semibold">Neem contact op</h2>
			<p class="mb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro nemo itaque
				consequuntur dolore possimus laboriosam, quasi id similique earum facilis nobis vero, unde
				explicabo totam consectetur provident nam sequi.
			</p>
			<a href="mailto:contact@bizzfit.app" class="font-semibold text-zinc-700"
				>contact&commat;bizzfit.app</a>
		</div>
		<div class="md:flex-1">
			<form name="contact" method="POST" data-netlify="true" action="/success" class="space-y-5">
				<input type="hidden" name="form-name" value="contact" />
				<input
					type="text"
					name="name"
					required
					placeholder="Volledige naam"
					class="h-10 w-full rounded border-zinc-300 shadow-sm focus:border-orange-500 focus:ring-orange-600" />
				<input
					type="email"
					name="email"
					required
					placeholder="E-mail adres"
					class="h-10 w-full rounded border-zinc-300 shadow-sm focus:border-orange-500 focus:ring-orange-600" />
				<input
					type="email"
					name="email"
					required
					placeholder="Telefoonnummer"
					class="h-10 w-full rounded border-zinc-300 shadow-sm focus:border-orange-500 focus:ring-orange-600" />
				<input
					type="email"
					name="email"
					required
					placeholder="Bedrijfsnaam"
					class="h-10 w-full rounded border-zinc-300 shadow-sm focus:border-orange-500 focus:ring-orange-600" />
				<button
					type="submit"
					class="rounded bg-orange-400 px-4 py-2 font-bold text-white transition ease-linear hover:bg-orange-500">
					Verstuur!
				</button>
			</form>
		</div>
	</div>
</section>
