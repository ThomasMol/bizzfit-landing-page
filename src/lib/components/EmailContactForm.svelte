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
		type="tel"
		name="tel"
		required
		placeholder="Telefoonnummer"
		class="h-10 w-full rounded border-zinc-300 shadow-sm focus:border-orange-500 focus:ring-orange-600" />
	<input
		type="text"
		name="organization"
		required
		placeholder="Bedrijfsnaam"
		class="h-10 w-full rounded border-zinc-300 shadow-sm focus:border-orange-500 focus:ring-orange-600" />
	<button
		type="submit"
		class="rounded bg-orange-400 px-4 py-2 font-bold text-white transition ease-linear hover:bg-orange-500">
		Verstuur!
	</button>
</form>