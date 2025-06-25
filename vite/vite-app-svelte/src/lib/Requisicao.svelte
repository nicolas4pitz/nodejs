<script lang="ts">
  import { onMount } from 'svelte';


  onMount(async ()=>{
    const funcFetch = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const user = await response.json()
        console.log(user)
      } catch (error) {
        console.log("Erro ao carregar os usuarios" + error)
      }
    }

    await funcFetch()
  })

  

  
</script>


<p>Teste</p>

<style>

</style>