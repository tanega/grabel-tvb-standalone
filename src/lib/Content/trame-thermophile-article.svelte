<script lang="ts">
  import {
    Heading,
    P,
    Span,
    Img,
    A,
    Popover,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from 'flowbite-svelte'
  import { H1, H2, Container } from '$lib/Display'
  import Draft from '$lib/Alerts/Draft.svelte'
</script>

<Container>
  <div class="flex items-center justify-center w-full">
    <H1
      text="Trame des milieux ouverts thermophiles"
      class="text-center"
    />
  </div>

  <H2 text="1. Modèle biologique" />

  <P opacity={75}>
    Le modèle biologique retenu pour la modélisation de ce graphe
    paysager est le
    <A href="/" id="popover-image"
      >lézard ocelé (<Span gradient italic>Timon lepidus</Span>)</A
    >.
  </P>

  <Popover
    triggeredBy="#popover-image"
    class="w-[556px] text-sm font-light"
    defaultClass=""
    placement="bottom"
  >
    <div class="grid grid-cols-5">
      <div class="col-span-3 p-3">
        <div class="space-y-2">
          <h3 class="font-semibold text-gray-900 dark:text-white">
            A propos du lézard ocelé
          </h3>
          <p class="text-gray-500 dark:text-gray-500">
            Le Lézard ocellé (Timon lepidus) est une espèce de
            sauriens de la famille des Lacertidae. C'est le plus grand
            lézard d'Europe et l'un des plus grands d'Espagne, avec le
            lézard géant de Gran Canaria (Gallotia stehlini). Il vit
            dans les pelouses sèches et milieux ouverts légèrement
            embroussaillés, habitats typiques du milieu méditerranéen
            dans le sud-ouest de l'Europe.
          </p>
          <a
            href="https://fr.wikipedia.org/wiki/L%C3%A9zard_ocell%C3%A9"
            class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700"
            >En savoir plus <svg
              class="ml-1 w-4 h-4"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              /></svg
            ></a
          >
        </div>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Timon_lepidus_holed.jpg/540px-Timon_lepidus_holed.jpg"
        class="col-span-2 h-full object-cover rounded-r-lg"
        alt="Sciurus vulgaris"
      />
    </div>
  </Popover>

  <Draft />

  <div class="flex items-center justify-center w-full">
    <Img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Timon_lepidus_b.JPG/580px-Timon_lepidus_b.JPG"
      alt="sample 1"
      caption="Image caption"
      class="shadow-xl rounded-md"
      alignment="ml-auto"
    />
  </div>

  <H2 text="2. Définition de la matrice paysagère" />
  <div class="flex items-center justify-center w-full">
    <Img
      src="https://image.over-blog.com/XqOdauvV_njJTZhahcSwR_bfrpE=/filters:no_upscale()/image%2F0186682%2F20230205%2Fob_ba099e_10.jpg"
      size="max-w-full"
      alt="sample 1"
      class="rounded-lg"
      figClass="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full"
      captionClass="absolute bottom-6 px-4 text-lg text-white"
      caption="Paysage forestier sur la commune de Grabels"
    />
  </div>
  <Draft />
  <H2 text="3. Paramétrage du graphe paysager" />
  <Draft />
  <div class="m-10">
    <Table shadow>
      <TableHead>
        <TableHeadCell>Catégorie d'occupation du sol</TableHeadCell>
        <TableHeadCell>Valeur en coût dans le modèle</TableHeadCell>
      </TableHead>
      <TableBody tableBodyClass="divide-y">
        <TableBodyRow>
          <TableBodyCell>Forêt de conifères</TableBodyCell>
          <TableBodyCell>1 (habitat)</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>Prairies</TableBodyCell>
          <TableBodyCell>500</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>Axes routiers principaux</TableBodyCell>
          <TableBodyCell>10 000</TableBodyCell>
        </TableBodyRow>
      </TableBody>
    </Table>
  </div>

  <H2 text="4. Résultats et interprétation" />
  <Draft />

  <H2 text="5. Références et sources" />
  <Draft />
  <P>
    Nullam ultrices nisi sit amet ex convallis dapibus nec in ligula.
    Phasellus vitae dictum ex. Cras vel sapien eu justo maximus
    gravida et et ipsum. Vivamus malesuada, ipsum ac auctor
    scelerisque, leo risus vehicula ligula, lobortis feugiat magna
    metus ac felis. Praesent a purus sed metus hendrerit tempus.
    Aenean ultrices cursus augue, in rutrum tortor. Phasellus
    tincidunt et leo sed bibendum. Duis eu porttitor sapien. Donec
    malesuada, libero et faucibus efficitur, nisl enim sollicitudin
    dolor, in sollicitudin nisl turpis eget quam. Etiam sagittis et
    massa ut ornare. Mauris tincidunt pellentesque laoreet. Sed
    fringilla justo et ex dapibus, ut porttitor nisl dictum. Maecenas
    nisi velit, efficitur ut neque et, ullamcorper commodo nibh. Ut
    nec elit vestibulum ipsum tempus pulvinar ut non quam. Proin
    porttitor tincidunt eleifend. Etiam rhoncus, diam eu dapibus
    iaculis, nibh augue ultrices mi, non fringilla urna tortor sed
    odio. Nam odio nunc, mollis at elit vel, tristique auctor nibh.
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
    posuere cubilia curae; Praesent eu nisl nec urna vestibulum
    tristique. Quisque vitae ex tempus, mollis lorem in, porttitor
    tellus. Integer maximus egestas diam eu pretium. Proin non commodo
    nibh. Phasellus blandit facilisis venenatis. Aenean urna tortor,
    rhoncus vitae mi ut, dignissim vulputate metus. Aliquam efficitur
    risus ultricies lacus placerat volutpat. Sed quis tellus id augue
    dignissim molestie. Aliquam blandit, velit vel lacinia commodo,
    turpis diam maximus velit, sit amet tempor ipsum libero eu risus.
    Nulla dictum vehicula lacus, quis pellentesque purus consectetur
    sit amet.
  </P>
</Container>
