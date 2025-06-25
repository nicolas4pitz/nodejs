//Lembrar que não é necessario usar javaScript puro, o svelte serve para isso, USAR MAIS AS
//FUNCIONALIDADE DO SVELTE

<script lang="ts">
  import { onMount } from 'svelte';

  let users = $state<any[]>([]);
  let isLoading = $state(true); 
  let error = $state<string | null>(null);

  onMount(async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }
      
      users = await response.json();
      
    } catch (err: any) {
      console.error("Erro ao carregar os usuários:", err);
      error = "Ocorreu um erro ao carregar os usuários. Tente novamente mais tarde.";
    } finally {
      isLoading = false; 
    }
  });
</script>

{#if isLoading}
  <p>Carregando usuários...</p>
{:else if error}
  <p style="color: red;">{error}</p>
{:else}
  <h2>Lista de Usuários:</h2>
  <ul>
    {#each users as user (user.id)}
      <li>
        <strong>Nome:</strong> {user.name} <br />
        <strong>Email:</strong> {user.email}
        <hr>
      </li>
    {/each}
  </ul>
{/if}

<style>
  ul{
    list-style: none;
    padding: 0px;
  }
</style>