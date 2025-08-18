<script>

  import State from "$lib/reactivity/state.svelte";
  import Deepstate from "$lib/reactivity/deepstate.svelte";
  import Derivadstate from "$lib/reactivity/derivadstate.svelte";
  import Inspectstate from "$lib/reactivity/inspectstate.svelte";
  import Effectsstate from "$lib/reactivity/effectsstate.svelte";
  import Universalreactivy from "$lib/reactivity/universalreactivy.svelte";
  let myNameUniversal = $state("Bob");
  let idade = $state(20)

  import Declarationprops from "$lib/props/declarationprops.svelte";
  import Defaultvalues from "$lib/props/defaultvalues.svelte";
  import Spreadprops from "$lib/props/spreadprops.svelte";
  let userSpread = {
    nome: "Bob",
    idade: 21,
    location: "Brasilia"
  } //Espalha os respectivos campos com cada campo com nome similar

</script>


<h1>Aprendizado de Svelte e SvelteKit</h1>
<h2>Parte 1:</h2>
<State/>
<Deepstate />
<Derivadstate />
<Inspectstate/>
<Effectsstate />
<Universalreactivy nome={myNameUniversal}/>

<hr>
<h1>Props</h1>
<h2>Parte 2:</h2>
<Declarationprops nome={myNameUniversal} {idade}/>
<Defaultvalues nome={myNameUniversal}/>
<Spreadprops {...userSpread}/>

<style>

  *{
    color: black;
  }

  h1{
    color: rgb(124, 20, 20);
    font-size: 36px;
    font-weight: bold;
    margin-top: 20px;
  }

  h2{
    color: black;
    font-size: 35px;
    font-weight: bold;
  }
  
  
</style>