<script lang="ts">
	import Leaderboard from '$lib/svg/Leaderboard.svelte';
	import Run from '$lib/svg/Run.svelte';
	import Trophy from '$lib/svg/Trophy.svelte';
</script>

<section id="benefits" class="my-20">
	<div class="container mx-auto px-4 lg:px-16">
		<h1 class="py-10 text-center text-4xl font-semibold">Benefits</h1>
		<div class="flex flex-wrap justify-between gap-10">
			<div class="space-y-4 md:flex-1">
				<div class="inline-block h-16 rounded-lg bg-orange-100 p-3 text-orange-400">
					<Run />
				</div>
				<h3 class="text-xl font-semibold text-gray-800">Minder verzuim</h3>
				<p class="text-gray-600">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem facilis exercitationem
					beatae laudantium reiciendis.
				</p>
			</div>
			<div class="space-y-4 md:flex-1">
				<div class="inline-block h-16 rounded-lg bg-orange-100 p-3 text-orange-400">
					<Leaderboard />
				</div>
				<h3 class="text-xl font-semibold text-gray-800">Teambuilding</h3>
				<p class="text-gray-600">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem facilis exercitationem
					beatae laudantium reiciendis.
				</p>
			</div>
			<div class="space-y-4 md:flex-1">
				<div class="inline-block h-16 rounded-lg bg-orange-100 p-3 text-orange-400">
					<Trophy />
				</div>
				<h3 class="text-xl font-semibold text-gray-800">Beter werkprestaties</h3>
				<p class="text-gray-600">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem facilis exercitationem
					beatae laudantium reiciendis.
				</p>
			</div>
		</div>
	</div>
</section>
