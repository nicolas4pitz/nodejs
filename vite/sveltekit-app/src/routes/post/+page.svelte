<script lang="ts">
    // import type { PageData } from './$types';
    // export let data: PageData;

    // let errorMessage = data.error;

    import { onMount } from 'svelte';
    import { fade, slide } from 'svelte/transition'

    interface Post {
      id: number;
      title: string;
      body: string;
      userId: number;
    }

    let post = $state<Post[]>([]);
    let isLoading = $state(true); 
    let error = $state<string | null>(null);

    onMount(async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }
      
      post = await response.json();
      
    } catch (err: any) {
      console.error("Erro ao carregar os posts:", err);
      error = "Ocorreu um erro ao carregar os posts. Tente novamente mais tarde.";
    } finally {
      isLoading = false; 
    }
  });

</script>



<div class="flex justify-center mt-8">
  <div class="max-w-6xl w-full px-4">
    {#if error}
          <p style="color: red;">{error}</p>
          <p>Não foi possível carregar os posts. Por favor, tente novamente mais tarde.</p>
      {:else if post}
          <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {#each post as postItem (postItem.id)}
                  <li class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center content-center">
                      <a href={`/post/${postItem.id}`} class="block hover:text-blue-600" transition:slide>
                          <h3 class="text-lg font-semibold mb-2 line-clamp-2">{postItem.title}</h3>
                          <p class="text-gray-600 text-sm">Post #{postItem.id}</p>
                      </a>
                  </li>
              {/each}
          </ul>
      {:else}
          <p class="text-center text-gray-500">Nenhum post disponível no momento.</p>
      {/if}
  </div>
</div>

<style>
  
</style>