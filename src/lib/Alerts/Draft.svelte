<script>
  import { goto } from '$app/navigation'
  import { Alert, Button, P, Span } from 'flowbite-svelte'
  export let pubDate = '15 mars 2023'
</script>

<Alert color="blue" class="m-8">
  <span slot="icon"
    ><svg
      aria-hidden="true"
      class="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clip-rule="evenodd"
      /></svg
    ></span
  >
  <span class="text-lg font-medium">Contenu non disponible</span>
  <div slot="extra">
    <div class="mt-2 mb-4 text-sm">
      Le contenu de cette section est soit en relecture soit en cours
      de rédaction. Merci de consulter à nouveau cette section très
      prochainement
    </div>
    <div class="mt-2 mb-4 text-sm">
      <P>
        <Span>Publication prévue le: {pubDate}</Span>
      </P>
    </div>
    <div class="flex gap-2">
      <Button
        size="xs"
        gradient
        color="purpleToBlue"
        class="dark:!text-blue-800"
        on:click={e => goto('/')}>Retour à l'accueil</Button
      >
    </div>
  </div>
</Alert>
