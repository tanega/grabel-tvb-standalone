<script lang="ts">
	import '../app.css';
	// import type { LayoutData } from './$types';
	// export let data: LayoutData;
</script>

<header>
	<slot name="header" />
</header>
<main>
	<slot />
</main>
<footer>
	<slot name="footer" />
</footer>
