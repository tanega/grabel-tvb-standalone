<script lang="ts">
  import { Heading } from 'flowbite-svelte'
  export let text = 'H1 Heading'
</script>

<Heading
  tag="h1"
  class="mb-4"
  customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
  >{text}</Heading
>
