<script lang="ts">
  import '../../../app.css'
  import Menu from '$lib/Header/Menu.svelte'
</script>

<header>
  <Menu />
</header>
<main>
  <slot />
</main>
