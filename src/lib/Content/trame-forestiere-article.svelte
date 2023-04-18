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
  import { Alert, H1, H2, Container, Pop, B } from '$lib/Display'
  import Draft from '$lib/Alerts/Draft.svelte'
</script>

<Container>
  <div class="flex items-center justify-center w-full">
    <H1 text="Trame forestière" class="text-center" />
  </div>

  <H2 text="1. Modèle biologique" />

  <P opacity={75}>
    Afin de modéliser la trame forestière au sein de notre prototype,
    nous avons retenu l'
    <A href="/" id="scirurus-vulgaaris"
      >écureuil roux (<Span gradient>Sciurus vulgaris</Span>)</A
    > comme modèle biologique.
  </P>

  <Popover
    triggeredBy="#scirurus-vulgaaris"
    class="w-[556px] text-sm font-light"
    defaultClass=""
    placement="bottom"
  >
    <div class="grid grid-cols-5">
      <div class="col-span-3 p-3">
        <div class="space-y-2">
          <h3 class="font-semibold text-gray-900 dark:text-white">
            A propos de l'écureuil roux
          </h3>
          <p class="text-gray-500 dark:text-gray-500">
            L'Écureuil roux est arboricole. On le trouve donc à
            proximité des bois et dans les forêts, notamment dans les
            forêts anciennes où il mène une vie individualiste,
            marquant ses itinéraires de repères olfactifs qu'il semble
            être seul à reconnaître, et cachant des stocks de graines
            ici et là. Il ne perd son aversion pour ses congénères que
            lorsque la nourriture abonde, comme dans certains parcs.
          </p>
          <a
            href="https://fr.wikipedia.org/wiki/%C3%89cureuil_roux"
            target="_blank"
            rel="noreferrer"
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
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Red_Squirrel_-_Lazienki.JPG"
        class="col-span-2 h-full object-cover rounded-r-lg"
        alt="Sciurus vulgaris"
      />
    </div>
  </Popover>

  <P
    >Cette espèce arboricole de la famille des Sciuridae présente sur
    l’ensemble du territoire de la France métropolitaine est modèle
    biologique général qui a pu être utilisé pour modéliser des
    graphes paysagers orientés sur la description des continuités
    écologiques forestières
    <Pop
      id="Avon-2016"
      authors="Avon and Bergès"
      year="2016"
      title="Prioritization of habitat patches for landscape
    connectivity conservation differs between least-cost and
    resistance distances."
      editor=" Landscape Ecol 31, 1551–1565."
      doi="https://doi.org/10.1007/s10980-015-0336-8"
      >(Avon et Bergès, 2016)
    </Pop>
  </P>.
  <P
    >Cette espèce semble de plus démontrer une
    <Pop
      id="Tannier-2016"
      authors="Tannier, C., Bourgeois, M., Houot, H., Foltête, J.-C."
      year="2016"
      title="Impact of urban developments on the functional connectivity
    of forested habitats: a joint contribution of advanced urban
    models and landscape graphs."
      editor="Land Use Policy 52, 76-91."
      doi="http://dx.doi.org/10.1016/j.landusepol.2015.12.002"
      >certaine sensibilité au développement urbain
    </Pop>
    ce qui conforte son choix dans le contexte géographique de réalisation
    de notre prototype.
  </P>

  <P
    >Sur la base de recherche bibliographique, nous avons défini
    l’habitat de l’écureuil roux comme un ensemble d’habitats
    forestiers mixtes et/ou à prédominance de feuillus d’une surface
    minimale de 0,5 ha (la bibliographie indique que
    <Pop
      id="Wauters-1995"
      authors="Wauters, L. A., & André. A. Dhondt."
      year="1995"
      title="Lifetime Reproductive Success and Its Correlates in Female
    Eurasian Red Squirrels."
      editor="Oikos, 72(3), 402–410."
      doi="https://doi.org/10.2307/3546126"
      >la surface de l’habitat de l’écureuil roux
    </Pop> oscille entre 0,5 et 10 ha). Par ailleurs, la bibliographie
    indique que cette espèce aurait une dispersion journalière moyenne
    de 200m et une capacité de migration maximale pour l’occupation d’un
    nouvel habitat de 6 000m, avec une valeur médiane de 700m
    <Pop
      id="Bergès-2014"
      authors="Bergès et Avon."
      year="2014"
      editor="Rapport en ligne"
      title="Diagnostic de la connectivité potentielle
    des trames forestières : cas d'étude en région méditerranéenne."
      doi="https://www.trameverteetbleue.fr/sites/default/files/references_bibliographiques/rapport_diacofor_annee_2_berges_avon_1.pdf"
      >(Bergès et Avon, 2014 )
    </Pop>
    . Pour notre modélisation nous avons retenu pour cette espèce une
    <B>capacité de dispersion de 2000 m</B>pour atteindre de nouveaux
    habitats.</P
  >

  <div class="flex items-center justify-center w-full">
    <Img
      src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Red_Squirrel_-_Lazienki.JPG"
      alt="sample 1"
      caption="Image caption"
      class="shadow-xl rounded-md my-6"
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
