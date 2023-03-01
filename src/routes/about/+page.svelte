<script>
		import  Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
		import AnimateSharedLayout from 'svelte-motion/src/components/AnimateSharedLayout/AnimateSharedLayout.svelte';
		import AnimatePresence from 'svelte-motion/src/components/AnimatePresence/AnimatePresence.svelte';
		import Item from '$lib/About/Item.svelte'
		import {names} from '$lib/About/Names'
		import Card from '$lib/About/Card.svelte'

		let list=names.map((v,i)=>{
			const r = Math.random(),
					g = Math.random(),
					b = Math.random();
			const t = (r + g + b) / 255;
			return {...v, r: r/t, g: g/t, b: b/t, i:i+1}
		}).sort((x,y)=>x.r-y.r); 
	
		const sort = (t) =>{
			list=list.sort((x,y)=>x[t]-y[t]);
		}
		
		let by = 1;
		$: sort((by % 3 ) === 1 ? 'r' : (by % 3) === 0 ? 'b' : 'g');
		let gap=2;
	
		let selected;

</script>

<style>
	:global(*) {
  	box-sizing: border-box;
	}
	.background{
		background:linear-gradient(250deg, rgb(25,25,125), rgb(0,0,0));;
		display:flex;
		flex-direction:column;
		height:100%;
		justify-content:center;
		align-items:center;
		position:relative;
		overflow:hidden;
		flex-wrap:wrap;	
	}
	.container {
		display:grid;
		grid-template-columns:auto auto auto;
	}
	button {
		border:4px solid white;
		background-color: transparent;
		color: white;
		border-radius:4rem;
		padding:1rem 2rem;
		font-size:200%;
	}
</style>
<div class="background">
    <div style="height:400px;">
        <AnimateSharedLayout type="crossfade">
            <Motion let:motion={grid} layout>
                <div
                    use:grid
                    class="container"
                    style={'grid-gap:' + gap + 'px'}>
                    {#each list as item (item.i)}
                        <Item {item} bind:selected />
                    {/each}
                </div>
            </Motion>
            <AnimatePresence
                list={list.filter((v) => v.i === selected)}
                let:item>
                <Card bind:selected {item} />
            </AnimatePresence>
        </AnimateSharedLayout>
    </div>
		<button on:click={() => by++}>click</button>
		<button on:click={() => gap = gap > 2 ? 2 : 20}>gap</button>
</div>