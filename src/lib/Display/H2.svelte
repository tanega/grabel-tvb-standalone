<script lang="ts">
  import { Heading, Span } from 'flowbite-svelte'
  export let text = 'H1 Heading'

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
  class="mb-4"
  customSize="text-3xl font-extrabold  md:text-4xl lg:text-5xl"
  >{firstChunck.join(' ')}
  <Span gradient>{lastChunk.join(' ')}</Span></Heading
>
