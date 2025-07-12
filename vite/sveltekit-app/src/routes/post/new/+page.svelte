<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();


    let title = $state('');
    let corpo = $state('');

    

    function submitForms(){
      console.log(`answered question ${title} (${corpo})`)
      let confirEl = document.createElement("span")
      confirEl.textContent = "Criado";
      confirEl.setAttribute("class", "bg-lime-500 w-16 p-1 rounded-2xl m-auto text-white transition-shadow mt-4 mb-4")

      let forms = document.getElementById("forms")


      forms?.appendChild(confirEl)
    }

</script>


<section class="flex justify-center">
  <form class="max-w-6xl justify-center w-full bg-gray-200 grid gap-4 mt-3 pt-3 pb-3" id="forms" onsubmit={submitForms}>
    <label for="title">Title</label>
    <input bind:value={title} type="text" id="title" class="bg-gray-500 p-1">
    <label for="body">Body</label>
    <textarea bind:value={corpo} id="corpo" class="w-2xs h-60 bg-gray-500 mb-2 text-white rounded-ss-sm p-1"></textarea>
    <button disabled={!corpo || !title} type="submit" class="bg-violet-500 text-white p-1 hover:bg-zinc-500 hover:cursor-pointer">
      Submit
    </button>
  </form>
</section>


<style>

input{
  color: white;
  border-radius: 2px;
  margin-bottom: 8px;
}

/* span{
  background-color: rgb(133, 211, 45);
  color: white;
  width: 60px;
  padding: 4px;
  border-radius: 12px;
  margin: 0 auto;
  transition: 1s ease-in-out;
} */

</style>