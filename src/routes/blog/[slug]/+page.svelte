<script lang="ts">
	import Footer from "$lib/components/sections/Footer.svelte";
  import Navigation from "$lib/components/sections/Navigation.svelte";

  export let data;
</script>

<Navigation/>
<div class="container mx-auto px-4 lg:px-16 py-20">
  <article class="prose max-w-none">  
    <h1>{data.title}</h1>
    <small>{data.date}</small>
  <svelte:component this={data.content} />
</article>
</div>


<Footer/>