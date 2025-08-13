<script>

  import State from "$lib/reactivity/state.svelte";
  import Deepstate from "$lib/reactivity/deepstate.svelte";
  import Derivadstate from "$lib/reactivity/derivadstate.svelte";
  import Inspectstate from "$lib/reactivity/inspectstate.svelte";
  import Effectsstate from "$lib/reactivity/effectsstate.svelte";
  import Universalreactivy from "$lib/reactivity/universalreactivy.svelte";
  let myNameUniversal = $state("Bob");

</script>


<h1>Aprendizado de Svelte e SvelteKit</h1>
<h2>Parte 1:</h2>
<State/>
<Deepstate />
<Derivadstate />
<Inspectstate/>
<Effectsstate/>
<Universalreactivy nome={myNameUniversal}/>


<style>

  *{
    color: black;
  }

  h1{
    color: black;
    font-size: 36px;
    font-weight: bold;
  }

  h2{
    color: black;
    font-size: 35px;
    font-weight: bold;
  }
  
  
</style>