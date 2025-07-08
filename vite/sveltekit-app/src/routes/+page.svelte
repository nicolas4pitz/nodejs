<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

    let errorMessage = data.error;

</script>

<h1>Main Page</h1>

<ul>
  {#if errorMessage}
        <p style="color: red;">{errorMessage}</p>
        <p>Não foi possível carregar os posts. Por favor, tente novamente mais tarde.</p>
    {:else if data.summaries && data.summaries.length > 0}
        <ul>
            {#each data.summaries as postSummary (postSummary.id)}
                <li>
                    <a href={`/post/${postSummary.id}`}>
                        {postSummary.title}
                    </a>
                </li>
            {/each}
        </ul>
    {:else}
        <p>Nenhum post disponível no momento.</p>
    {/if}
</ul>

