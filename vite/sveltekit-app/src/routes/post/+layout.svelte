
<script lang="ts">

let { children } = $props();

</script>

<h1 class="text-center text-3xl font-bold mb-8">Posts</h1>
<a href="/post/new" class="bg-indigo-500 transition hover:bg-teal-500 rounded-2xl text-white font-bold text-xl text-center p-4"><span>Criar novo Post</span></a>








{@render children()}