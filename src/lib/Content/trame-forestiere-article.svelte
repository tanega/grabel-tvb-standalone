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
    List,
    Li,
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
  <P weight="bold" size="lg" class="mb-8 mt-6"
    >Définition de la zone d’emprise de l’étude</P
  >

  <P class="mb-6"
    >Le territoire de la Ville de Grabels ayant été retenu comme zone
    d’expérimentation de notre prototype, la zone d’étude de notre
    analyse correspondra à l’emprise de la commune de Grabels augmenté
    d’une zone tampon de 2 000 mètres.
  </P>

  <P class="mb-6"
    >Dans le cadre de la réalisation d’un graphe paysager, il convient
    de définir la zone d’analyse d’utiliser la zone géographique
    regroupant la zone d’étude étendue à l’équivalent de la distance
    maximale de dispersion du modèle biologique retenu pour l’étude, à
    savoir 2 000 mètres pour la modélisation de l’écureuil roux.</P
  >

  <P class="mb-6"
    >Nous avons donc appliqué cette zone tampon de 2 000 mètres autour
    de la commune de Grabels. Pour des raisons de simplification, nous
    avons ensuite transformé cette emprise géographique en boîte
    englobante (zone géographique de forme rectangulaire) utilisant
    les coordonnées minimales et maximales de la zone.</P
  >

  <P weight="bold" size="lg" class="mb-8 mt-6"
    >Définition de l’occupation du sol</P
  >

  <P class="mb-6"
    >Nous avons utilisé comme base de travail principale le <A
      href="https://data.montpellier3m.fr/dataset/evolution-de-loccupation-du-sol-entre-2004-et-2012-de-montpellier-m%C3%A9diterran%C3%A9e-m%C3%A9tropole"
      target="_blank"
      rel="noreferrer">fichier d’évolution d’occupation du sol</A
    > de Montpellier Méditerranée Métropole. Les données de ce fichier
    renseignent l’occupation sur ce territoire et alentours pour la période
    1994 – 2021.</P
  >

  <P class="mb-6"
    >Pour les différentes années de cette période, différents types
    d’occupation du sol ont été définis sur des entités spatiales
    homogènes à partir de l’interprétation d’imagerie satellitaires ou
    de photographies aériennes.</P
  >

  <P class="mb-6"
    >L’ensemble des données d’occupation du sol présentes dans ce
    fichier ont été hiérarchisées selon 3 niveaux de nomenclatures (4
    niveaux à partir de l’année 2015) allant du plus grossier au plus
    détaillé. Dans le cadre de la réalisation de notre prototype, nous
    avons retenu l’année 2021 (année la plus récente) et le deuxième
    niveau de classification qui offrent un niveau de détail jugé
    suffisant pour notre analyse (classification différenciée des
    habitat forestiers et niveaux de densification des zones
    d’habitations par exemple).</P
  >

  <P class="mb-6"
    >Bien que des données d’identification des habitats naturels aient
    été réalisées par l’association Les Écologistes de l’Euzière dans
    le cadre de l’Atlas de Biodiversité Communale de la Ville de
    Grabels, nous ne les avons pas retenues à ce stade pour la
    réalisation de notre prototype.</P
  >

  <P class="mb-6"
    >Nous justifions ce choix pour les raisons suivantes :</P
  >
  <List
    tag="ol"
    list="decimal"
    olClass="text-black  dark:text-gray-400 mb-3 font-normal pl-5 mt-2 space-y-1"
  >
    <Li>Méthodologie de définition et aire spatiale différentes</Li>
    <Li
      >Apport non significatif pour la définition des coûts de
      dispersion (en particulier sur les zones d’habitations)</Li
    >
  </List>

  <P class="mb-6"
    >Néanmoins ces données de définition des habitats naturels seront
    d’une grande utilité pour préciser la modélisation des trames
    écologiques. Ces données pourraient être utilisées en amont de la
    modélisation pour qualifier avec une plus grande précision les
    tâches d’habitats et/ou a posteriori pour vérifier la corrélation
    (regression logistique) entre les observations de terrain
    (présence/ absence) et la modélisation du graphe paysager.
  </P>

  <P class="mb-6"
    >Une première analyse visuelle des données d’occupation du sol a
    permis de diagnostiquer des ruptures de continuités sur les
    entités géographiques représentant des infrastructures de
    transport (routes, autoroutes, lignes ferroviaire…). Les
    infrastructures de transport constituent des obstacles de taille
    aux déplacements des espèces terrestres. De ce fait, elles doivent
    considérées comme des marqueurs de la fragmentation des
    continuités écologiques pour ces espèces.
  </P>
  <P class="mb-6"
    >Ainsi, une attention particulière doit être accordée à la
    précision et la qualité géographique de ces entités sans quoi
    l’ensemble de la modélisation du graphe paysager risque d’être
    biaisée, voire de produire à des calculs erronés de connectivité.</P
  >

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
          <TableBodyCell
            >Forêt mixtes et/ou à prédominance de feuillus</TableBodyCell
          >
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
</Container>
