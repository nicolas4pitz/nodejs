<script lang="ts">

  //No anterior fazer a ingualdade com o 0 já resolvia, agora no 5 é necessário essa diretiva do "$", que ajuda na hora de entender melhor o codigo
  let count = $state(0);
  let increment = () => {
    count++
  }

</script>


<h2>Section 1: Estado (State)</h2>

<div>
  <button onclick={increment} class="bg-zinc-600 rounded-2xl p-3 text-white">
    Incrementar {count}
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