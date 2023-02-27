<script lang="ts">
	import Button from './Button.svelte';
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;

	let disabled = false;
	let content = 'Click me!';
</script>

<Hst.Story>
	<Button {disabled}>
		{content}
	</Button>
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={content} title="Content" />
		<Hst.Checkbox bind:value={disabled} title="Disabled" />
	</svelte:fragment>
</Hst.Story>