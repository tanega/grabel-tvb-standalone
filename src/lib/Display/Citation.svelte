<script lang="ts">
  import { P, Span, A, Popover } from 'flowbite-svelte'

  export let authors: string
  export let year: string
  export let title = 'title'
  export let editor: string
  export let doi: string
</script>

<div class="text-gray-500 dark:text-gray-400 p-6 text-sm font-normal">
  <P weight="light" color="text-gray-500 dark:text-gray-400">
    <Span weight="light">
      {authors}
    </Span>
    ( <Span weight="normal">
      {year}
    </Span>)
    <Span weight="normal">
      {title}
    </Span>
    <Span italic>
      {editor}
    </Span>
    {#if doi}
      -
      <A href={doi}>{doi}</A>
    {/if}
  </P>
</div>
