<script lang="ts">
  let contador = $state(0);

  let increment = () => {
    contador++
  }

  let decrement = () => {
    if (contador > 0){
      contador--;
    }
  }
</script>


<p>{contador}</p>
<button onclick={decrement}>-1</button>
<button onclick={increment}>+1</button>

<style>
  
</style>
