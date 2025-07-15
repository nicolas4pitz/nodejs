<script lang="ts">
    import type { PageData } from './$types';


    import { phrases } from '$lib/data';

    let { data }: { data: PageData } = $props();
</script>


<form action="POST">

    <label for="">Escolha a linguagem</label>

    <select name="prefered_lang" id="prefered_lang">

        {#each phrases as lang}
            <option value={lang.lang}>
                {lang.lang}
            </option>
        {/each}


    </select>


</form>