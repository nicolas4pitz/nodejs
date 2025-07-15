<script lang="ts">
    import type { PageData } from './$types';


    import { phrases } from '$lib/data';

    interface Phrase {
      lang: string,
      phrase: string,
    }

    let selectedLang: string = $state('');
    let selected: Phrase | undefined = $state();

    $effect(() => {
        selected = phrases.find(phrase => phrase.lang === selectedLang);
    });

    let { data }: { data: PageData } = $props();
</script>


<div class="p-4 flex flex-col items-center justify-center gap-4">
  <form method="POST" class="w-48 flex flex-col items-center gap-2">
  
      <label for="lang">Escolha a linguagem</label> <br>
  
      <select bind:value={selectedLang} class="w-1/3" name="prefered_lang" id="prefered_lang">
  
          {#each phrases as lang}
              <option class="font-bold" value={lang.lang}>
                  {lang.lang}
              </option>
          {/each}
  
  
  
  
      </select>
      <br>
      <button class="bg-zinc-700 rounded-md w-1/2 text-white" type="submit" disabled={!selectedLang}>
            Enviar
      </button>
  </form>
  <p>Linguagem selecionada: {selected?.lang}</p>
  <p>Frase: {selected?.phrase}</p>
</div>