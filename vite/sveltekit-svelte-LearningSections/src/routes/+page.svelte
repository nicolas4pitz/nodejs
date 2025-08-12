<script>

  import State from "$lib/reactivity/state.svelte";
  import Deepstate from "$lib/reactivity/deepstate.svelte";
  import Derivadstate from "$lib/reactivity/derivadstate.svelte";


</script>


<h1>Aprendizado de Svelte e SvelteKit</h1>

<h2>Section 1: Estado (State)</h2>

<div>
  <State/>
</div>

<h2>Section 2: Estado Profundo (Deep State)</h2>

<div>
  <Deepstate />
</div>

<h2>Section 3: Estado Derivado (Derivated State)</h2>

<div>
 <Derivadstate />
</div>



<style>

  *{
    color: black;
  }

  h2{
    color: black;
    font: normal small-caps bold 34px/1.5 Arial, sans-serif;
  }

  div{
    box-sizing: border-box;
    background-color: chocolate;
    margin: 10px;
    padding: 12px;
  }
  
</style>