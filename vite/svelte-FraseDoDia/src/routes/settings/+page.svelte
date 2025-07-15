<script lang="ts">
    import type { PageData } from './$types';


    import { phrases } from '$lib/data';

    interface Phrase {
      lang: string,
      phrase: string,
    }

    let selected: Phrase | undefined = $state();

    let { data }: { data: PageData } = $props();
</script>


<form action="POST">

    <label for="lang">Escolha a linguagem</label> <br>

    <select bind:value={selected} name="prefered_lang" id="prefered_lang">

        {#each phrases as lang}
            <option class="font-bold" value={lang}>
                {lang.lang}
            </option>
        {/each}
          
        

    </select>
    


</form>
<p>Linguagem selecionada: {selected?.lang}</p>
<p>Frase: {selected?.phrase}</p>