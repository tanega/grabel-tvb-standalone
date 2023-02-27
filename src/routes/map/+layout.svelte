<script lang="ts">
	import '../../app.css';
	import Menu from '$lib/Header/Menu.svelte';
	import Footer from '$lib/Footer/Home.svelte';
	// import type { LayoutData } from './$types';
	// export let data: LayoutData;
</script>

<header>
	<Menu />
</header>
<main>
	<slot />
</main>
