<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let checked = true;
	export let label: string | undefined = undefined;
	/**
	 * TODO
	 * 1. sr-only label
	 * 2. use checked/unchecked icon
	 * 3. focus: add style
	 */

	function handleClick() {
		dispatch('click', {
			checked: !checked
		});
	}
</script>

<label class={$$props.class}>
	<input type="checkbox" bind:checked on:click={handleClick} />
	{#if label}
		{label}
	{/if}
</label>
