<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();


    let title = $state('');
    let corpo = $state('');

    let confirEl = document.createElement("span")
    let titleConfirmEl = document.createElement("span")
    let bodyConfirmEl = document.createElement("span")

    confirEl.textContent = "Criado";

    confirEl.setAttribute("class", "bg-lime-500 w-16 p-1 rounded-2xl m-auto text-white transition-shadow mt-4 mb-4")
    titleConfirmEl.setAttribute("class", "text-red-500 w-16 italic")
    let forms = document.getElementById("forms")

    function submitForms(){
      console.log(`answered question ${title} (${corpo})`)
      
      


      forms?.appendChild(confirEl)

      setTimeout(() => {
        confirEl.remove();
      }, 3000);
    }

    function validationTitle() {
      if(title.length > 5){
        titleConfirmEl.textContent = "titulo errado"
        forms?.appendChild(titleConfirmEl)
      }
    }

</script>


<section class="flex justify-center">
  <form class="max-w-6xl justify-center w-full bg-gray-200 grid gap-4 mt-3 pt-3 pb-3" id="forms" onsubmit={submitForms}>
    <label for="title">Title</label>
    <input bind:value={title} type="text" id="title" class="bg-gray-500 p-1" onblur={validationTitle}>
    <label for="body">Body</label>
    <textarea bind:value={corpo} id="corpo" class="w-2xs h-60 bg-gray-500 mb-2 text-white rounded-ss-sm p-1"></textarea>
    <button disabled={(!corpo) || corpo.length <= 20 || title.length <= 5 || (!title)} type="submit" class="bg-violet-500 text-white p-1 hover:bg-zinc-500 hover:cursor-pointer">
      Publicar Post
    </button>
  </form>
</section>


<style>

input{
  color: white;
  border-radius: 2px;
  margin-bottom: 8px;
}

</style>