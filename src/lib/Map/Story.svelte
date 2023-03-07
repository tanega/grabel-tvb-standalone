<script lang="ts">
  import Motion from 'svelte-motion/src/motion/MotionSSR.svelte'
  import AnimatePresence from 'svelte-motion/src/components/AnimatePresence/AnimatePresence.svelte'

  export let imgUrl =
    'https://images.unsplash.com/photo-1448375240586-882707db888b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80'
  export let title = 'Trame forestière'
  export let description =
    'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor idmus.'
  let isOpen = false

  function handleEscape({ key }: KeyboardEvent) {
    if (key === 'Escape') {
      isOpen = false
    }
    if (key === 'Enter') {
      isOpen = !isOpen
    }
  }
</script>

<svelte:window on:keyup={handleEscape} />
<div class={`w-96 ${$$props.class}`}>
  <Motion
    let:motion
    animate={{
      height: isOpen ? '80vh' : '15vh',
      width: isOpen ? '95vw' : '100%',
    }}
    transition={{ duration: 0.5 }}
  >
    <div
      class="rounded-lg p-2 transition duration-150 ease-in-out hover:shadow-lg bg-white overflow-hidden"
      on:click={() => (isOpen = !isOpen)}
      on:keydown={handleEscape}
      on:keyup={handleEscape}
      use:motion
    >
      <div class="flex">
        <div class="hidden flex-shrink-0 sm:block">
          <img
            class="h-20 w-32 rounded-md object-cover"
            src={imgUrl}
            alt=""
          />
        </div>

        <div class="min-w-0 flex-1 sm:ml-8">
          <h4 class="truncate text-base font-medium text-gray-900">
            {title}
          </h4>
          <p class="mt-1 text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>
      <AnimatePresence list={isOpen ? [{ key: 1 }] : []}>
        <Motion
          layout
          initial={{ h: 0, w: 0 }}
          enter={{
            w: '100%',
            transition: { duration: 1000 },
            beforeChildren: true,
          }}
          exit={{
            w: 0,
            transition: { duration: 2000 },
          }}
          let:motion={motion3}
        >
          {#if isOpen}
            <div
              id="container"
              class="mt-6 relative h-full overflow-auto"
              use:motion3
            >
              <Motion
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                let:motion={motion4}
              >
                <article
                  id="content"
                  use:motion4
                  class="max-w-none h-full"
                >
                  <slot name="content" />
                </article>
              </Motion>
            </div>
          {/if}
        </Motion>
      </AnimatePresence>
    </div>
  </Motion>
</div>
