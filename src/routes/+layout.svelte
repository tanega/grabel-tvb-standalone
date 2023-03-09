<script lang="ts">
  import Menu from '$lib/Header/Menu.svelte'
  import Footer from '$lib/Footer/Home.svelte'
  import '../app.css'
  // import type { LayoutData } from './$types';
  // export let data: LayoutData;
</script>

<header>
  <slot name="header"><Menu /></slot>
</header>
<main>
  <slot />
</main>
