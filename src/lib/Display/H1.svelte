<script lang="ts">
  import { Heading } from 'flowbite-svelte'
  export let text = 'H1 Heading'
</script>

<Heading
  tag="h1"
  class={`mb-6 mt-8 ${$$props.class}`}
  customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
>
  <slot>{text}</slot>
</Heading>
