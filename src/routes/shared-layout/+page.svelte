<script lang="ts">
  // based on https://codesandbox.io/s/framer-motion-2-animating-shared-layouts-1cpd0?from-embed

  // usually this import strategy should work:
  //import {Motion, AnimatePresence,AnimateSharedLayout} from "svelte-motion";
  import Motion from 'svelte-motion/src/motion/MotionSSR.svelte'
  import AnimatePresence from 'svelte-motion/src/components/AnimatePresence/AnimatePresence.svelte'
  import AnimateSharedLayout from 'svelte-motion/src/components/AnimateSharedLayout/AnimateSharedLayout.svelte'

  let items = [false, false, false]
</script>

<div class="background">
  <AnimateSharedLayout>
    <Motion let:motion layout initial={{ borderRadius: 25 }}>
      <ul use:motion>
        {#each items as isOpen, i}
          <Motion
            layout
            initial={{ borderRadius: 10 }}
            let:motion={m1}
          >
            <li
              on:click={() => {
                items = items.map((v, j) => (j === i ? !v : v))
              }}
              use:m1
            >
              <Motion layout let:motion={m2}
                ><div use:m2 class="avatar" /></Motion
              >
              <AnimatePresence list={isOpen ? [{ key: 1 }] : []}>
                <Motion
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  let:motion={m3}
                >
                  <div use:m3>
                    <div class="row" />
                    <div class="row" />
                    <div class="row" />
                  </div>
                </Motion>
              </AnimatePresence>
            </li>
          </Motion>
        {/each}
      </ul>
    </Motion>
  </AnimateSharedLayout>
</div>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  .background {
    background: linear-gradient(
      250deg,
      rgb(25, 25, 125),
      rgb(0, 0, 0)
    );
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul {
    width: 300px;
    display: flex;
    flex-direction: column;
    background: white;
    padding: 20px;
    border-radius: 25px;
  }

  li {
    -webkit-tap-highlight-color: transparent;
    background-color: rgba(214, 214, 214, 0.5);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    cursor: pointer;
  }

  li:last-child {
    margin-bottom: 0px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    background-color: #666;
    border-radius: 20px;
  }

  .row {
    width: 100%;
    height: 8px;
    background-color: #999;
    border-radius: 10px;
    margin-top: 12px;
  }
</style>
