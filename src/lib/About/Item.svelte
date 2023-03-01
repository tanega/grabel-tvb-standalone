<script>
	import  Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	
	export let item;
	export let selected;
</script>	

<style>
	.item {
		width:80px;
		height:80px;
		border-radius:50%;
		color:white;
		display:flex;
		align-items:center;
		justify-content:center;
		font-size:30px;
		font-weight:900;
	}
</style>

<Motion let:motion layoutId={item.i} layout>
	<div use:motion class=item style={`background-color:rgb(${item.r},${item.g},${item.b})`} on:click={_=>selected=item.i}>
		<Motion layoutId={"first-"+item.i} let:motion={f} >
			<span use:f>{item.first}</span>
		</Motion>
		<Motion layoutId={"last-"+item.i} let:motion={f}>
			<span use:f>{item.last}</span>
		</Motion>
	</div>
</Motion>