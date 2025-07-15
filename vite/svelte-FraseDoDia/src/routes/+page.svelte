<script lang="ts">

   import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  let phrase = data.phrase
    
</script>



<p>{phrase}</p>

