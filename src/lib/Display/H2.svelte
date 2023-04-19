<script lang="ts">
  import { Heading, Span } from 'flowbite-svelte'
  export let text = 'H1 Heading'

  export let gradient = false

  let firstChunck: string[]
  let lastChunk: string[]
  const setChunks = () => {
    firstChunck = text.split(' ')
    lastChunk = firstChunck.splice(2)
  }

  $: setChunks()
</script>

<Heading
  tag="h2"
  class="mb-8 mt-8"
  customSize="text-3xl font-extrabold  md:text-4xl lg:text-5xl"
  >{#if gradient}
    <Span gradient>{text}</Span>
  {:else}
    {firstChunck.join(' ')}
    <Span gradient>{lastChunk.join(' ')}</Span>
  {/if}
</Heading>
