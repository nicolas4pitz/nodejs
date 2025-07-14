<script lang="ts">
    import type { PageData } from './$types';

    // Dados recebidos da form action (se houver erro ou valores antigos)

    let { data }: { data: PageData } = $props();
    import { fade, slide } from 'svelte/transition'


    let title = $state('');
    let corpo = $state('');

    let titleStatus = $state(false)
    let corpoStatus = $state(false)
    let formsStatus = $state(false)

    function submitForms(){

      formsStatus = true

      setTimeout(() => {
        formsStatus = false
      }, 3000);
    }

    function validationTitle() {
      if(title.length <= 5 || title.length == null){
        titleStatus = true
      }else{
        titleStatus = false
      }
    }

    function validationBody(){
      if(corpo.length <= 20 || corpo.length == null){
        corpoStatus = true
      }else{
        corpoStatus = false
      }
    }

</script>


<section class="flex justify-center">
  <form method="POST" class="max-w-6xl justify-center w-full bg-gray-200 grid gap-4 mt-3 pt-3 pb-3" id="forms" onsubmit={submitForms} transition:fade>
    <label for="title">Title</label>
    <input bind:value={title} type="text" id="title" name="title" class="bg-gray-500 p-1" placeholder="Digite o Titulo do Post" onblur={validationTitle}>
    {#if titleStatus}
      <span class="text-red-500 italic m-auto w-full">Titulo tem que ter mais que 5 caracteres</span>
    {/if}
    <label for="corpo">Body</label>
    <textarea bind:value={corpo} onblur={validationBody} name="corpo" placeholder="Digite o conteudo do post" id="corpo" class="w-2xs h-60 bg-gray-500 mb-2 text-white rounded-ss-sm p-1"></textarea>
    {#if corpoStatus}
      <span class="text-red-500 italic m-auto w-full">Corpo tem que ter mais que 20 caracteres</span>
    {/if}

    <button disabled={(!corpo) || corpo.length <= 20 || title.length <= 5 || (!title)} type="submit" class="bg-violet-500 text-white p-1 hover:bg-zinc-500 hover:cursor-pointer">
      Publicar Post
    </button>

    {#if formsStatus}
      <span class="bg-lime-500 w-26 p-1 rounded-2xl m-auto text-white transition-shadow mt-4 mb-4">Post Criado</span>
    {/if}
  </form>
</section>


<style>

input{
  color: white;
  border-radius: 2px;
  margin-bottom: 8px;
}

</style>