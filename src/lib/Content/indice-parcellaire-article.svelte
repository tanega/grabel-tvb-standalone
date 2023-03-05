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
  import { Alert, H1, H2, Container } from '$lib/Display'
</script>

<Container>
  <Img
    src="https://image.over-blog.com/XqOdauvV_njJTZhahcSwR_bfrpE=/filters:no_upscale()/image%2F0186682%2F20230205%2Fob_ba099e_10.jpg"
    alt="sample 1"
    class="rounded-lg"
    figClass="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full"
    captionClass="absolute bottom-6 px-4 text-lg text-white"
    caption="Do you want to get notified when a new component is added to Flowbite?"
  />

  <H1 text="Trame forestière" />
  <P
    class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
    >Lorem ipsum</P
  >

  <Heading
    tag="h2"
    class="mb-4"
    customSize="text-3xl font-extrabold  md:text-4xl lg:text-5xl"
    >1. Modèle <Span gradient>biologique</Span></Heading
  >

  <H2 text="1. Modèle biologique" />

  <P opacity={75}>
    Due to its central geographic location in Southern Europe,
    <A href="/" id="popover-image"
      >Ecureuil (<Span gradient>Sciurus vulgaris</Span>)</A
    > has historically been home to myriad peoples and cultures. In addition
    to the various ancient peoples dispersed throughout what is now modern-day
    Italy, the most predominant being the Indo-European Italic peoples
    who gave the peninsula its name, beginning from the classical era,
    Phoenicians and Carthaginians founded colonies mostly in insular Italy
  </P>

  <Popover
    triggeredBy="#popover-image"
    class="w-96 text-sm font-light"
    defaultClass=""
  >
    <div class="grid grid-cols-5">
      <div class="col-span-3 p-3">
        <div class="space-y-2">
          <h3 class="font-semibold text-gray-900 dark:text-white">
            About Italy
          </h3>
          <p class="text-gray-500 dark:text-gray-500">
            Italy is located in the middle of the Mediterranean Sea,
            in Southern Europe it is also considered part of Western
            Europe. A unitary parliamentary republic with Rome as its
            capital and largest city.
          </p>
          <a
            href="/"
            class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700"
            >Read more <svg
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
      <div class="col-span-2">Hello world</div>
    </div>
  </Popover>

  <P>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
    varius ipsum ac libero hendrerit tincidunt. Proin tempus est
    varius felis porttitor euismod. Pellentesque a mi dolor. Morbi
    laoreet suscipit nisl. Mauris sed ante mi. Quisque ut dignissim
    mauris, ac sollicitudin augue. Donec lorem felis, maximus ac ipsum
    id, convallis gravida ex. Suspendisse potenti. Fusce pretium
    pulvinar lorem, vitae lacinia ligula molestie eget. Cras at dui at
    sapien aliquet porttitor. Vivamus in ultrices lectus. Curabitur
    vehicula, mi ac viverra condimentum, dui erat eleifend tortor,
    laoreet dignissim dui arcu a neque. Quisque interdum, risus eget
    vestibulum venenatis, nisl quam consectetur ex, ac eleifend neque
    ipsum eget ligula. Nunc bibendum purus ut urna auctor congue.
    Nulla eget nunc et augue eleifend pulvinar nec vel tortor.
    Phasellus vehicula pellentesque elit et eleifend. Suspendisse
    potenti. Vestibulum non augue vel elit sagittis vulputate.
    Phasellus ultrices sed ex in ultrices. Cras vestibulum auctor
    ipsum sit amet posuere. Nullam vestibulum lorem odio, a fermentum
    felis tincidunt eget. Donec eget augue sit amet massa venenatis
    ultrices. Nullam massa odio, suscipit vel mollis ut, faucibus nec
    leo. Ut commodo vehicula lacus, vel pretium nisi varius in.
    Vestibulum justo lorem, viverra ac mi nec, dignissim dignissim
    orci. Morbi malesuada nisi id elit condimentum congue at non
    velit.
  </P>

  <div class="flex items-center justify-center w-full">
    <Img
      src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Red_Squirrel_-_Lazienki.JPG"
      alt="sample 1"
      caption="Image caption"
      class="shadow-xl rounded-md"
      alignment="ml-auto"
    />
  </div>
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
