<script lang="ts">
	import Footer from "$lib/components/sections/Footer.svelte";
  import Navigation from "$lib/components/sections/Navigation.svelte";

  export let data;
</script>
<svelte:head>
	<title>BizzFit Blog | {data.title}</title>
</svelte:head>

<Navigation/>
<div class="px-4 lg:px-16 py-20">
  <article class="prose mx-auto">  
    <h1>{data.title}</h1>
    <small>{data.date}</small>
    <svelte:component this={data.content} />
    <img src="{data.thumbnail}" alt="" class="h-96 w-full object-cover" />
</article>
</div>


<Footer/>