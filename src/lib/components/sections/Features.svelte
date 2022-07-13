<script lang="ts">
	import Run from '$lib/svg/Run.svelte';
</script>

<section id="features" class="my-40">
	<div class="container mx-auto px-4 py-10 lg:px-16">
		<div class="mb-40 flex flex-wrap">
			<div class="md:flex-1">
				<h2 class="mb-16 text-4xl font-semibold">Features 1</h2>
				<dl class="space-y-10">
					<div>
						<dt>
							<div
								class="absolute flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 p-3 text-orange-400">
								<Run />
							</div>
							<p class="ml-16 text-lg font-medium leading-6">Competitie</p>
						</dt>
						<dd class="mt-2 ml-16 text-base text-zinc-500">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
							suscipit eaque, iste dolor cupiditate blanditiis ratione.
						</dd>
					</div>
					<div>
						<dt>
							<div
								class="absolute flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 p-3 text-orange-400">
								<Run />
							</div>
							<p class="ml-16 text-lg font-medium leading-6">Challenges</p>
						</dt>
						<dd class="mt-2 ml-16 text-base text-zinc-500">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
							suscipit eaque, iste dolor cupiditate blanditiis ratione.
						</dd>
					</div>
					<div>
						<dt>
							<div
								class="absolute flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 p-3 text-orange-400">
								<Run />
							</div>
							<p class="ml-16 text-lg font-medium leading-6">Beloningen</p>
						</dt>
						<dd class="mt-2 ml-16 text-base text-zinc-500">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
							suscipit eaque, iste dolor cupiditate blanditiis ratione.
						</dd>
					</div>
				</dl>
			</div>
			<div class="h-full w-full md:flex-1">
				<img src="/images/feed.png" alt="Leaderbaord" class="mx-auto mt-10 w-52 md:mt-32" />
			</div>
		</div>
		<div class="flex flex-wrap flex-col-reverse md:flex-row">
			<div class="w-full md:flex-1 mt-10 md:mt-0">
				<div>
					<img
						src="/images/fitbit.webp"
						alt="Fitbit"
						class="relative top-10 left-10 w-20 rounded-lg shadow" />
					<img
						src="/images/strava.webp"
						alt="Strava"
						class="relative -top-2 left-60 w-20 rounded-lg shadow" />
					<img
						src="/images/googlefit.webp"
						alt="Google fit"
						class="relative -top-2 left-2 w-20 rounded-lg shadow" />
					<img
						src="/images/applehealth.webp"
						alt="Apple health"
						class="relative left-52 -top-2 w-20 rounded-lg shadow" />
				</div>
			</div>
			<div class="md:flex-1">
				<h2 class="mb-16 text-4xl font-semibold">Features 2</h2>
				<dl class="space-y-10">
					<div>
						<dt>
							<div
								class="absolute flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 p-3 text-orange-400">
								<Run />
							</div>
							<p class="ml-16 text-lg font-medium leading-6">Fitness tracking</p>
						</dt>
						<dd class="mt-2 ml-16 text-base text-zinc-500">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
							suscipit eaque, iste dolor cupiditate blanditiis ratione.
						</dd>
					</div>
					<div>
						<dt>
							<div
								class="absolute flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 p-3 text-orange-400">
								<Run />
							</div>
							<p class="ml-16 text-lg font-medium leading-6">Auto analytics</p>
						</dt>
						<dd class="mt-2 ml-16 text-base text-zinc-500">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
							suscipit eaque, iste dolor cupiditate blanditiis ratione.
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</section>
