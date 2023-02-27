<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{data.data.id}</h1>
<div>{@html data.data.content}</div>
