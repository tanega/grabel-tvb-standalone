<script lang="ts">
  import { P, Span, A, Popover } from 'flowbite-svelte'
  import Citation from './Citation.svelte'
  export let id = 'popover'
  export let year = '2000'
  export let title = 'Default title'
  export let authors = '*** Authors ***'
  export let editor: string
  export let doi = 'Default citation'
</script>

<Span
  {id}
  underline
  decorationClass="decoration-green-500 decoration-dotted"
>
  <slot />
</Span>
<Popover
  triggeredBy={`#${id}`}
  class="w-[556px] text-sm font-light"
  defaultClass=""
  placement="top"
>
  <Citation {year} {authors} {title} {editor} {doi} />
</Popover>
