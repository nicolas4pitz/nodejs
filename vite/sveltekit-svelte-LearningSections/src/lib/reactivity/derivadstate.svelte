<script lang="ts">

let count = $state(0)
//Valor derivado depende de outro estado, é recalculado automaticamente quando este estado muda

let ePar = $derived(count % 2 === 0)

function acionar(){
    count++;
} 


</script>


<h2>Section 3: Estado Derivado (Derivated State)</h2>

<div>
  <p>Count: {count}</p>
  <p>Derivado se é par: {ePar}</p>
  <button onclick={acionar} class="p-2 bg-zinc-700 text-white rounded-2xl">Contar</button>
</div>

<style>
  h2{
    color: black;
    font: normal small-caps bold 34px/1.5 Arial, sans-serif;
    padding: 2px;
  }

  div{
    box-sizing: border-box;
    background-color: chocolate;
    margin: 10px;
    padding: 12px;
  }
</style>