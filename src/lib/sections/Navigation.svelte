<script lang="ts">
	import MenuIcon from '$lib/svg/MenuIcon.svelte';

	let showMenu = false;
</script>

<nav class="fixed top-0 z-50 w-full  border-zinc-100 bg-white/80 backdrop-blur-xl">
	<div class="container flex flex-wrap justify-between">
		<div class="mr-6 py-3">
			<a href="/" class="flex font-coolvetica text-2xl text-neutral-900">
				<img
					src="/images/logo-inverted.svg"
					alt="BizzFit logo"
					width="30"
					height="30"
					class="mr-2 rounded " />
				bizzfit</a>
		</div>

		<div
			id="nav-content"
			class:hidden={!showMenu}
			class="h-full w-full space-x-8 py-4 md:inline-block md:w-auto">
			<a href="/#benefits" class="inline-block self-end text-zinc-600 hover:text-amber-700"
				>Benefits</a>
			<a href="/#features" class="text-zinc-600 hover:text-amber-700">Features</a>
			<a href="/#faqs" class="text-zinc-600 hover:text-amber-700">FAQs</a>
			<a href="/#team" class="text-zinc-600 hover:text-amber-700">Team</a>
		</div>
		<div class:hidden={!showMenu} class="w-full space-x-8 py-4 md:inline-block md:w-auto">
			<a
				href="/#contact"
				class="rounded bg-amber-500 px-5 py-2 font-semibold text-white hover:bg-amber-600"
				>Begin nu</a>
		</div>
		<div class="block md:hidden">
			<button
				id="nav-toggle"
				on:mousedown={() => (showMenu = !showMenu)}
				class="inline-flex items-center justify-center rounded-md p-2">
				<span class="sr-only">Open main menu</span>
				<MenuIcon />
			</button>
		</div>
	</div>
</nav>
