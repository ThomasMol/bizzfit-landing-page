<script lang="ts">
	let showMenu = false;
</script>

<nav>
	<div class="container mx-auto flex flex-wrap justify-between py-4 px-4 lg:px-16">
		<div class="mr-6">
			<a href="/" class="inline-flex text-2xl text-zinc-700 font-['Coolvetica']">
				<img
					src="/images/logo.png"
					alt="BizzFit logo"
					width="30"
					height="30"
					class="mr-2 rounded " />
				bizzfit</a>
		</div>
		<div class="block md:hidden">
			<button
				id="nav-toggle"
				on:mousedown={() => (showMenu = !showMenu)}
				class="inline-flex items-center justify-center rounded-md p-2">
				<span class="sr-only">Open main menu</span>
				<svg
					class="block h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
		</div>
		<div id="nav-content" class:hidden={!showMenu} class="w-full md:block md:w-auto">
			<ul class="flex flex-col items-center justify-end gap-y-3 font-bold md:flex-row">
				<li>
					<a
						class="inline-block py-2 px-4 text-zinc-500 no-underline hover:text-amber-900"
						href="/#features">Product</a>
				</li>
				<li>
					<a
						class="inline-block py-2 px-4 text-zinc-500 no-underline hover:text-amber-900"
						href="/#pricing">Tarieven</a>
				</li>
				<li>
					<a
						class="inline-block py-2 px-4 text-zinc-500 no-underline hover:text-amber-900"
						href="/#team">Ons team</a>
				</li>
				<li>
					<a
						class="inline-block py-2 px-4 text-zinc-500 no-underline hover:text-amber-900"
						href="/#blogs">Blog</a>
				</li>
				<li>
					<a
						class="inline-block py-2 px-4 text-zinc-500 no-underline hover:text-amber-900"
						href="/#contact">Contact</a>
				</li>
				<li>
					<a
						class="inline-block rounded bg-gradient-to-tr from-amber-500 to-amber-600  py-2 px-4 text-zinc-100 no-underline hover:from-amber-700 hover:to-amber-600 hover:text-zinc-50"
						href="/#contact">Plan een demo</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
