<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<nav class="p-4 bg-blue-200 m-2 rounded-xl">
  <a href="/">Home</a>
  <a href="/about">Sobre</a>
  <a href="/post">Post</a>
</nav>

{@render children()}
