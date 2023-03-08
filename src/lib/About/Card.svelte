<script>
	import  Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	   export let selected;
    export let item;

    let first = "";
    let last = "";
    $: {
        first = item.name.slice(1).split(" ").slice(0, -1).join(" ");
        last = item.name.split(" ").slice(-1)[0].slice(1);
    }
    const textscale = {
        initial: {
            scaleX: 0,
        },
        animate: {
            scaleX: 1,
            transition: { duration: 0.5, delay: 0.15 },
        },
        exit: {
            scaleX: 0,
        },
    };
</script>

<style>
    .container {
        position: absolute;
        top: 1rem;
        left: 1rem;
        right: 1rem;
        border-radius: 50px;
        color: white;
        padding: 2rem;
    }
    .header {
        font-size: 30px;
        font-weight: 900;
    }
    .add-text {
        margin-left: -0.5rem;
    }
    span {
        display: inline-block;
        transform-origin: left;
    }
    .card-body{
        margin-top:2rem;
    }
	.overlay{
        top:0;
        left:0;
        right:0;
        bottom:0;
        position:absolute;
        background: rgba(0, 0, 0, 0.4);
    }
</style>
<Motion let:motion initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    <div class="overlay" use:motion on:click={_=>selected=undefined}>

    </div>
</Motion>
<Motion layoutId={item.i} let:motion>
    <div
        use:motion
        class="container"
        on:click={(_) => (selected = undefined)}
        style={`background-color:rgb(${item.r},${item.g},${item.b})`}>
        <div class:header={true}>
            <span>
                <Motion layoutId={'first-' + item.i} let:motion={f}>
                    <span use:f>{item.first}</span>
                </Motion>
                {#each first.split(" ") as name,i}
                    <Motion let:motion={g} {...textscale}>
                        <span class:add-text={i===0} use:g>{name}</span>
                    </Motion>
                {/each}
            </span>
            <span>
                <Motion layoutId={'last-' + item.i} let:motion={f}>
                    <span use:f>{item.last}</span>
                </Motion>
                <Motion let:motion={g} {...textscale}>
                    <span use:g class="add-text">{last}</span>
                </Motion>
            </span>
        </div>
        <Motion let:motion={body} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div use:body class="card-body">
                <p>{item.eponymDescription}</p>
                <p>Named: {item.sampleLabel}</p>
            </div>

        </Motion>
    </div>
</Motion>