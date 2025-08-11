<script lang="ts">

  //No anterior fazer a ingualdade com o 0 já resolvia, agora no 5 é necessário essa diretiva do "$", que ajuda na hora de entender melhor o codigo
  let count = $state(0);
  let increment = () => {
    count++
  }

</script>


<button onclick={increment} class="bg-zinc-600 rounded-2xl p-3 text-white">
  Incrementar {count}
</button>



<style></style>