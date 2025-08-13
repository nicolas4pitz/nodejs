<script lang="ts">

let insCount = $state(0);

$inspect(insCount);
//console

function inspIncrement(){
  insCount++;
}

</script>



<h2>Section 4: Inspecioando Estado (Inspecting State)</h2>

<div>
  <button onclick={inspIncrement} class="bg-zinc-600 rounded-2xl p-3 text-white">
    Incrementar no console
  </button>
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