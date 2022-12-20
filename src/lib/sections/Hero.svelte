<script lang="ts">
	import CirlceBackground from '$lib/svg/CirlceBackground.svelte';
	import ExternalLink from '$lib/svg/ExternalLink.svelte';
	import SolidCheck from '$lib/svg/SolidCheck.svelte';
	import { fly } from 'svelte/transition';
</script>

<section id="hero" class="overflow-hidden border-b bg-zinc-50 pt-16">
	<div class="container lg:flex ">
		<div class="flex-1 basis-1/2 py-8 text-center md:text-left lg:py-32">
			<h1 class="mb-5 text-5xl font-semibold text-zinc-800">
				10x productiviteit, vitaliteit en werkprestatie
			</h1>
			<ul class="space-y-2 text-left lg:mb-10">
				<li>
					<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-400"><SolidCheck /></span>
					Versterk fysieke gezondheid met teams-challenges
				</li>
				<li>
					<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-400"><SolidCheck /></span>
					Verbeter de verbondenheid van je team
				</li>
				<li>
					<span class="inline-block h-7 w-7 pb-1 align-middle text-blue-400"><SolidCheck /></span>
					Fitter, energieker en productiever team als resultaat
				</li>
			</ul>
			<div class="flex flex-wrap justify-around gap-4 md:justify-start md:gap-8">
				<div class=" text-center">
					<p class="py-5 text-sm font-semibold text-zinc-700">De benefits</p>
					<a
						href="/#benefits"
						class="flex w-full items-center  rounded bg-gradient-to-tr  from-amber-500 to-amber-600 py-2 px-8 text-xl font-semibold text-zinc-100 no-underline hover:from-amber-700 hover:to-amber-600 hover:text-zinc-50"
						>Bekijk meer</a>
				</div>
				<div class=" text-center">
					<p class="py-5 text-sm font-semibold text-zinc-700">Coming soon...</p>
					<a
						href="/#benefits"
						class="flex items-center rounded border border-amber-500 py-2 px-8 text-xl font-semibold text-amber-500 no-underline hover:bg-amber-500 hover:text-zinc-50"
						>Demo &nbsp;<ExternalLink /></a>
				</div>
			</div>
		</div>
		<div class="relative flex-1 basis-1/2 self-end ">
			<img
				src="/images/challenges-hero-ss.png"
				alt="Woman running"
				class="relative z-10 mx-auto block w-80 " />
		</div>
	</div>
</section>
