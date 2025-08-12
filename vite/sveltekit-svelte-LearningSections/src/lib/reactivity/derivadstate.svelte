<script lang="ts">

let count = $state(0)
//Valor derivado depende de outro estado, é recalculado automaticamente quando este estado muda

let ePar = $derived(count % 2 === 0)

function acionar(){
    count++;
} 


</script>


<p>Count: {count}</p>
<p>Derivado se é par: {ePar}</p>
<button onclick={acionar} class="p-2 bg-zinc-700 text-white rounded-2xl">Contar</button>

<style>

</style>