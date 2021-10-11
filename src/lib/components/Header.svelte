<script lang="ts">
  let showMenu = false;
</script>

<nav class="">
	<div class="container mx-auto flex py-4  px-6 md:px-0 justify-between flex-wrap">
		<div class="flex items-center flex-shrink-0 mr-6">			
			<a href="/" class="text-xl font-bold">BizzFit</a>
		</div>
		<div class="block md:hidden">
			<button
				id="nav-toggle"
				on:mousedown={() => (showMenu = !showMenu)}
				class="inline-flex items-center justify-center p-2 rounded-md">
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
		<div id="nav-content" class:hidden={!showMenu} class="w-full md:w-auto md:block">
			<ul class="flex flex-col md:flex-row justify-end items-center font-bold gap-y-3">				
				<li>
					<a
						class="inline-block py-2 px-4 no-underline text-gray-500 hover:text-blue-900"
						href="/#features">Features</a>
				</li>
				<li>
					<a
						class="inline-block py-2 px-4 no-underline text-gray-500 hover:text-blue-900"
						href="/#contact">Contact</a>
				</li>			
			</ul>
		</div>
	</div>
</nav>