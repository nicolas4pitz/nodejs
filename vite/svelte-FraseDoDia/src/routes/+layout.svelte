<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<nav class="w-full bg-violet-400 text-center flex justify-center content-center gap-8 p-3">
	<a href="/">Main</a>
	<a href="/settings">Configs</a>
</nav>


{@render children()}
