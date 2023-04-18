<script>
  import { P, Img, A, Li, List } from 'flowbite-svelte'
  import { H1, H2, B, Pop } from '$lib/Display'
</script>

<H1 class="text-center mb-12">Présentation du projet</H1>

<P firstupper color="text-gray-500 dark:text-gray-400 mb-3"
  >Dans le cadre de l’appel à projet Smart City porté par la Métropole
  Montpellier Méditerranée, notre entreprise Natural Solutions un
  projet de recherche et de développement s’appuyant sur une
  plateforme numérique open-source Ecoteka, développée activement par
  nos équipes depuis l’année 2020.</P
>
<P color="text-gray-500 dark:text-gray-400 mb-3"
  >La plateforme logicielle Ecoteka ambitionne de construire une
  solution numérique ouverte et modulaire permettant aux acteurs
  civils, institutionnels et économiques de mieux comprendre le
  fonctionnement des écosystèmes urbains et d’agir collectivement en
  faveur des solutions fondées sur la Nature dans le cadre des
  politiques publiques de transformation des territoires.</P
>
<P color="text-gray-500 dark:text-gray-400 mb-3"
  >À travers notre candidature, nous souhaitions saisir l’opportunité
  de construire le prototype d’un module dédié à l’analyse et la
  caractérisation des continuités écologiques, module qui viendrait
  compléter deux autres modules existants et orientés sur l’inventaire
  et la gestion de la canopée urbaine.</P
>
<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Afin de tester le développement de ce prototype, la commune de
  Grabels a été proposé comme territoire pilote. La commune de Grabels
  est engagée dans l’élaboration d’un Atlas de Biodiversité Communale.
  Accompagné par l’association Les Écologistes de l’Euzière pour ce
  projet, la Ville de Grabels peut ainsi mettre à contribution de nos
  recherches sur ce module à la fois une expertise de territoire, des
  données de terrain actualisées, des propositions de diagnostic et
  une réflexion critique sur les outils produits dans notre phase de
  prototypage.</P
>
<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Par ailleurs, les données ouvertes et publiées sur le portail de la
  Métropole Montpellier Méditerranée comme celle de la Région
  Occitanie ont été mobilisées pour la réalisation de ce prototype.</P
>
<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Il nous semble important de préciser que la réalisation de ce
  prototype ne constitue pas une étude d’expertise écologique à part
  entière. Le contenu et les analyses diffusées sur ce site ont pour
  vocation à faire démonstration des apports méthodologiques de
  certains outils de modélisation des continuités écologiques. À ce
  titre, nous rappellerons pour chaque analyse, les limites de leur
  interprétation ainsi que les améliorations qu’il conviendrait
  d’apporter au modèle.
</P>
<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Malgré tout, de notre point de vue, ces outils peuvent constituer
  des outils d’expertise écologique utile à la construction des
  politiques d’aménagement territorial notamment par le biais d’un
  enrichissement du modèle par des donnés issues de visite de terrain,
  de groupes de concertation et du renforcement de la connaissance
  naturaliste et géographique.</P
>

<H2 gradient text="Les trames et corridors écologiques " />

<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Les trames écologiques sont des outils méthodologiques et légaux
  permettant de qualifier des infrastructures naturelles dont
  l’objectif est l’enrayement de la perte de biodiversité par la
  préservation et la restauration des réseaux de milieux naturels qui
  permettent aux espèces de circuler et d’interagir.</P
>

<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Les trames écologiques incluent différentes composantes en fonction
  des écosystèmes ciblés :</P
>

<List
  tag="ol"
  olClass="text-gray-500 dark:text-gray-400 mb-3 font-light"
>
  <Li
    >La trame verte fait référence aux milieux naturels et
    semi-naturels terrestres</Li
  >
  <Li
    >La trame bleu fait référence aux réseaux aquatiques et humides
  </Li>
  <Li
    >La trame verte fait référence aux milieux naturels et
    semi-naturels terrestres</Li
  >
  <Li
    >D’autres composantes ont émergé depuis l’intégration des
    politiques de trames vertes et bleues au sein du Code de
    l’Environnement en 2007, notamment les composantes brunes (les
    sols, sous-sols et leur biodiversité associée), noire (zone
    d’obscurité épargnant aux organismes vivants les nuisances des
    pollutions lumineuses de source anthropiques) et air (prenant en
    compte les différents types d’obstacles entravant la circulation
    et les migrations d’espèces animales aériennes)
  </Li>
</List>

<div class="flex items-center justify-center w-full my-8">
  <Img
    src="images/figures/trame-cite-verte.jpeg"
    alt="sample 1"
    caption="Image caption"
    class="shadow-xl rounded-md"
    alignment="ml-auto"
  />
</div>

<P color="text-gray-500 dark:text-gray-400 mb-3">
  Au sein des composantes de ces trames, les réseaux d’échanges,
  appelés continuités écologiques, sont constitués de réservoirs de
  biodiversité reliés les uns aux autres par des corridors
  écologiques. L’identification de ces corridors écologiques ainsi que
  leurs objectifs de gestion et la nature de leur protection peut-être
  conduit à différentes spatiales :
</P>
<List
  tag="ol"
  olClass="text-gray-500 dark:text-gray-400 mb-3 font-light"
>
  <Li
    ><B>Échelle nationale</B> par le biais du document-cadre "Orientations
    nationales pour la préservation et la remise en bon état des continuités
    écologiques"</Li
  >
  <Li
    ><B>Échelle régionale</B> à travers les Schémas Régionaux de Cohérence
    Écologique (SRCE) portés conjointement par l'État (le préfet de région)
    et le Conseil régional.
  </Li>
  <Li
    ><B>Échelle départementale</B> par le biais des compétences inclues
    dans le périmètre d’intervention des Conseils Départementaux : gestion
    des Espaces Naturels Sensibles (ENS), de la gestion des infrastructures
    routières départementales, de l'aménagement foncier agricole, des politiques
    de gestion de l'eau et des bassins versants.</Li
  >
  <Li
    ><B>Échelle du Schéma de Cohérence Territoriale (SCoT)</B> qui définit
    un projet de territoire, commun à plusieurs communes, visant à harmoniser
    des politiques sectorielles, notamment en matière d’environnement et
    dans lequel les trames écologiques peuvent constituer un apport méthodologique
    et opérationnel.</Li
  >
  <Li
    ><B>Échelle communale ou intercommunale</B> à travers les plans locaux
    d’urbanisme (PLU et PLUI) où les règlements d’urbanisme opposables
    aux tiers peuvent prendre en compte les préconisations issues SRCE
    ou compléter ces dernières par une analyse locale des trames écologiques.</Li
  >
</List>

<div class="flex items-center justify-center w-full my-8">
  <Img
    src="images/figures/composantes-tvb.jpeg"
    alt="sample 1"
    caption="Image caption"
    class="shadow-xl rounded-md"
    alignment="ml-auto"
  />
</div>

<H2 gradient text="Les graphes paysagers : théorie et concepts" />

<P color="text-gray-500 dark:text-gray-400 mb-3"
  >D’après
  <Pop
    id="ahern-1995"
    authors="Ahern"
    year="1995"
    title="Greenways as a planning
  strategy. 
  "
    editor="Landscape and Urban Planning, 33, 131–155"
    doi="http://refhub.elsevier.com/S0169-2046(13)00243-0/sbref0010"
    >Ahern (1995)
  </Pop>
  , le terme "réseaux écologiques" est utilisé pour désigner un système
  spatial de noyaux d'habitats connectés par des corridors écologiques
  fonctionnels plutôt que l'ensemble des flux d'énergie au sein des écosystèmes
  <Pop
    id="Fath-2007"
    authors="Ahern"
    year="1995"
    title="Fath, B. D., Scharler, U. M., Ulanowisz, R. E., & Hannon, B. (2007).
  Ecological network analysis: Network construction.
  "
    editor="Ecological Modelling,
  208, 49–55."
    doi="http://refhub.elsevier.com/S0169-2046(13)00243-0/sbref0105"
    >(Fath et al., 2007)
  </Pop>
</P>

<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Étant donné que les réseaux écologiques sont des objets pertinents
  à intégrer dans les stratégies de gestion environnementale, de
  nouveaux besoins sont apparus en matière d'aménagement du territoire
  pour aider et soutenir la décision des gestionnaires et acteurs des
  dits-territoires . Ces besoins ont, par nature, une importante
  dimension géographique car la question centrale posée aux
  gestionnaires de paysages concerne l'espace. Une question centrale
  se pose dès lors : où peut-on agir le plus efficacement sur le
  terrain pour maintenir la biodiversité ?
</P>
<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Cette question centrale implique 3 axes de réflexion utile à la
  définition d’une méthodologie permettant de définir avec pertinence
  des approches de planification : la priorisation de la protection,
  l’amélioration de cette infrastructure naturelle et l’évaluation de
  l’impact d’une perturbation.</P
>

<List
  tag="ol"
  list="decimal"
  olClass="text-gray-500 dark:text-gray-400 mb-3 font-normal pl-5 mt-2 space-y-1"
>
  <Li
    ><B>Priorisation</B> : Où se situe les réservoirs de biodiversité les
    plus vulnérables pour une espèce ou un cortège d’espèces donnés?
  </Li>
  <Li
    ><B>Amélioration</B> : À quels endroits est-il utile de modifier un
    réseau écologique afin d’améliorer la résilience d’une ou plusieurs
    espèces cible ?
  </Li>
  <Li
    ><B>Évaluation</B> : Quel sont les niveaux de perturbation engendrés
    par un éventuel changement d’occupation du sol sur ces infrastructures
    naturelles ?
  </Li>
</List>

<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Des théories d’écologie scientifique telles que la
  <Pop
    id="mcarthur-wilon-1967"
    authors="Robert H. MacArthur & Edward O. Wilson"
    year="1967"
    title="The Theory of Island Biogeography."
    editor="Princeton University Press, Princeton (New Jersey)"
  >
    biogéographie insulaire
  </Pop> puis la
  <Pop
    id="levins-1969"
    authors="Levins, R."
    year="1969"
    title="Some
  demographic and genetic consequences of environmental heterogeneity for
  biological control."
    editor="Bulletin of the Entomological Society of America,
  15 (3): 237–240"
    doi="https://doi.org/10.1093/besa/15.3.237"
  >
    théorie des métapopulations
  </Pop> ont permis l’émergence au début des années 1980 de l’écologie
  du paysage en tant que discipline, discipline qui a porté depuis son
  avènement une attention particulière au sujet des réseaux écologiques.</P
>

<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Répondre aux précédentes interrogations nécessite pour les
  chercheurs en écologie du paysage de concevoir des approches
  méthodologiques visant à modéliser ces réseaux écologiques et leur
  connectivité fonctionnelle (à savoir la qualité des flux d’espèce
  permis au sein de ces réseaux spatiaux). Parmi les approches
  étudiées, nous pouvons citer les approches individus-centrés, les
  analyses de moindre-coût, les approches basées sur la théorie des
  circuits, les analyses de centralité ou encore les graphes paysagers
  <Pop
    id="urban-2001"
    authors="Urban, D. L., & Keitt, T. H."
    year="2001"
    title="Landscape connectivity: A graph theoretic approach.
  "
    editor="Ecology, 82, 1205–1218."
    >(Urban & Keitt, 2001)
  </Pop>
</P>

<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Suivant la méthode retenue, l’apport des modélisations variera
  grandement en fonction du degré de précision des données fournies et
  des paramètres nécessaires à son fonctionnement : exigences
  écologiques des espèces modélisées, description de l’occupation du
  sol et habitat des espèces cible… <Pop
    id="Calabrese-2004"
    authors="Calabrese, J. M., & Fagan, W. F."
    year="2004"
    title="A comparison-shopper’s guide to connectivity metrics.
  "
    editor="Frontiers in Ecology and Environment, 2(10), 529–536."
    doi="https://doi.org/10.1890/1540-9295(2004)002[0529:ACGTCM]2.0.CO;2"
    >(Calabrese et al., 2004)
  </Pop></P
>
<P color="text-gray-500 dark:text-gray-400 mb-3"
  >D’après la littérature scientifique, la <Pop
    id="Foltête-2014"
    authors="Foltête,
  J.-C., Girardet, X., Clauzel, C."
    year="2014"
    title="A methodological framework for the use of landscape graphs in land-use planning.
  "
    editor="Landscape and
  Urban Planning 124, 140–150."
    doi="https://doi.org/10.1016/j.landurbplan.2013.12.012"
    >méthode des graphes paysagers offre un compromis intéressant
  </Pop>entre échelle spatiale et capacité de représentation des
  processus écologiques. En effet les graphes permettent de
  représenter des réseaux écologiques sur de vastes emprises spatiales
  tout en permettant des
  <Pop
    id="Lookingbill-2010"
    authors="Lookingbill, T. R., Gardner, R. H., Ferrari, J. R., & Keller, C. E."
    year="2010"
    title="Combining a dispersal model with network theory to assess
  habitat connectivity.
  "
    editor="LEcological Applications, 20, 427–441"
    doi=" https://doi.org/10.1890/09-0073.1"
    >résultats similaires à ceux des approches individu-centré
  </Pop> considérées les plus écologiquement précises.
</P>

<H2 gradient text="Prototype Ecoteka « Continuités écologiques »" />

<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Afin de construire un module prototype pour la modélisation des
  continuités écologiques, notre équipe a choisi de retenir des outils
  numériques basé sur la méthode des graphes paysagers.</P
>

<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Au sein d’un graphe paysagers, les réservoirs de biodiversité et/ou
  les habitats des espèces cibles sont représentés comme les nœuds.
  Les nœuds de ce graphe peuvent être ou ne pas être connectés les uns
  aux autres par des liens. L’existence de ces liens est définie par
  la nature la matrice paysagère, c’est-à-dire la nature de
  l’occupation du sol mis en relation avec les exigences écologiques
  des espèces-cible par le biais de définition d’un coût par chaque
  catégorie d’occupation du sol.
</P>

<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Le graphe paysager obtenu est alors une représentation modélisée de
  la connectivité écologique sur territoire où les tâches d’habitats
  (nœuds) formant une mosaïque sont reliés ou non par des corridors
  écologiques (liens).</P
>
<P color="text-gray-500 dark:text-gray-400 mb-3"
  >La théorie des graphes couplée à des concepts d’écologie
  statistique permet alors de calculer des valeurs numériques
  permettant de caractériser la connectivité du graphe paysager à
  l’échelle du nœud (tâches d’habitats), de la composante (ensemble
  d’habitats connectés les uns aux autres) ou du graphe dans son
  ensemble (emprise du projet). Ces valeurs numériques sont appelées
  métriques de connectivité.</P
>

<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Pour réaliser des exemples de graphes paysagers pour le territoire
  de la Ville de Grabels, nous avons utilisé le logiciel open-source
  <A
    href="https://sourcesup.renater.fr/www/graphab/fr/home.html"
    target="_blank">Graphab</A
  > développé par l’UMR Théma de l’Université de Besançon Franche Comté.</P
>

<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Ce logiciel, par le biais de ces interfaces de programmation, a été
  intégré aux flux de traitement de données de la plateforme Ecoteka
  et présenté par le biais d’un outil de visualisation web.
</P>

<P color="text-gray-500 dark:text-gray-400 mb-3"
  >Pour concevoir le graphe paysager, nous avons utilisé les données
  fournies par la Ville de Grabels ainsi que des données publiées sur
  le portail Open Data de la Métropole Montpellier Méditerranée. Afin
  de réaliser les analyses, ces données ont pu faire l’objet de
  pré-traitement et de transformation.</P
>
