<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let min = 0;
	export let max = 1;
	export let step = 0.05;
	export let value = 0.5;

	export let label: string | undefined = undefined;

	function handleRangeChange() {
		dispatch('change', {
			message: 'Change range value',
			value: value
		});
	}
</script>

<div class={$$props.class}>
	{#if label}
		<label
			for="minmax-range"
			class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label
		>
	{/if}
	<input
		id="minmax-range"
		type="range"
		{min}
		{max}
		{step}
		bind:value
		on:change={handleRangeChange}
		class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
	/>
</div>
