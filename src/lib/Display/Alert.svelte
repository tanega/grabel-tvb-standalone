<script>
	import { Alert } from 'flowbite-svelte';
	export let message = "Default message...."
</script>

<div class="p-8">
	<Alert>
		<span class="font-medium">Info alert!</span> {message}
	</Alert>
</div>