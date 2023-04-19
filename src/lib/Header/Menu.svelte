<script lang="ts">
  import { goto } from '$app/navigation'
  import { slide } from 'svelte/transition'
  import {
    Popover,
    PopoverButton,
    PopoverPanel,
  } from '@rgossiaux/svelte-headlessui'
  import { ChevronDownIcon } from '@rgossiaux/svelte-heroicons/outline'
  import { createPopperActions } from 'svelte-popperjs'
  const [popperRef, popperContent] = createPopperActions()

  // Example Popper configuration
  const popperOptions = {
    placement: 'bottom',
    strategy: 'absolute',
    modifiers: [{ name: 'offset', options: { offset: [0, 24] } }],
  }
</script>

<div class="relative z-20">
  <div
    class="relative z-20 bg-white shadow flex justify-center items-center"
  >
    <button
      type="button"
      class="text-gray-500 group flex-none inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      on:click={e => goto('/')}
    >
      Accueil
    </button>
    <div class="pl-6">
      <button
        type="button"
        on:click={e => goto('/presentation')}
        class="text-gray-500 group flex-none inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Présentation
      </button>
    </div>
    <Popover
      class="flex flex-none max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
      let:open
    >
      <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
      <PopoverButton
        class="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        aria-expanded="false"
        use={[popperRef]}
      >
        <span>Explorer</span>
        <!--
                    Heroicon name: mini/chevron-down
                    Item active: "text-gray-600", Item inactive: "text-gray-400"
                -->
        <ChevronDownIcon
          class="text-gray-400 ml-2 h-4 w-4 group-hover:text-gray-500"
        />
      </PopoverButton>
      <!--
                Flyout menu, show/hide based on flyout menu state.

                Entering: "transition ease-out duration-200"
                From: "opacity-0 -translate-y-1"
                To: "opacity-100 translate-y-0"
                Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 -translate-y-1"
            -->
      {#if open}
        <div transition:slide>
          <PopoverPanel
            class="absolute inset-x-0 z-30 transform shadow-lg w-full"
            use={[[popperContent, popperOptions]]}
          >
            <div class="absolute inset-0 flex" aria-hidden="true">
              <div class="w-full bg-gray-50" />
            </div>
            <div
              class="relative mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-2"
            >
              <div
                class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12"
              >
                <div>
                  <h3 class="text-base font-medium text-gray-500">
                    Graphes paysagers
                  </h3>
                  <ul role="list" class="mt-6 space-y-6">
                    <li class="flow-root">
                      <a
                        href="/explorer/trame-forestiere"
                        class="-m-3 flex rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-100"
                      >
                        <div class="hidden flex-shrink-0 sm:block">
                          <img
                            class="h-20 w-32 rounded-md object-cover"
                            src="https://image.over-blog.com/XqOdauvV_njJTZhahcSwR_bfrpE=/filters:no_upscale()/image%2F0186682%2F20230205%2Fob_ba099e_10.jpg"
                            alt=""
                          />
                        </div>
                        <div class="min-w-0 flex-1 sm:ml-8">
                          <h4
                            class="truncate text-base font-medium text-gray-900"
                          >
                            Trame forestière
                          </h4>
                          <p class="mt-1 text-sm text-gray-500">
                            Modélisation des continuités forestières
                            utilisant l'écureuil roux comme modèle
                            biologique.
                          </p>
                        </div>
                      </a>
                    </li>

                    <li class="flow-root">
                      <a
                        href="/explorer/trame-thermophile"
                        class="-m-3 flex rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-100"
                      >
                        <div class="hidden flex-shrink-0 sm:block">
                          <img
                            class="h-20 w-32 rounded-md object-cover"
                            src="https://www.randogps.net/traces/34/654/image2.GIF"
                            alt=""
                          />
                        </div>
                        <div class="min-w-0 flex-1 sm:ml-8">
                          <h4
                            class="truncate text-base font-medium text-gray-900"
                          >
                            Milieux ouverts thermophiles
                          </h4>
                          <p class="mt-1 text-sm text-gray-500">
                            Modélisation de la continuité des milieux
                            ouverts thermophiles utilisant le lézard
                            ocelé comme modèle biologique.
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-6 text-sm font-medium">
                  <a
                    href="#"
                    class="text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500"
                  >
                    En savoir plus
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12"
              >
                <div>
                  <h3 class="text-base font-medium text-gray-500">
                    Indicateurs spatiaux
                  </h3>
                  <ul role="list" class="mt-6 space-y-6">
                    <!-- <li class="flow-root">
                      <a
                        href="/explorer/analyse-diachronique"
                        class="-m-3 flex rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-100"
                      >
                        <div class="hidden flex-shrink-0 sm:block">
                          <img
                            class="h-20 w-32 rounded-md object-cover"
                            src="https://www.actu-direct.fr/rep/rep_article/20211014095507.jpg"
                            alt="LIEN Contournement Montpellier Nord"
                          />
                        </div>
                        <div class="min-w-0 flex-1 sm:ml-8">
                          <h4
                            class="truncate text-base font-medium text-gray-900"
                          >
                            Analyse diachronique des continuités
                            écologiques
                          </h4>
                          <p class="mt-1 text-sm text-gray-500">
                            Eget ullamcorper ac ut vulputate fames nec
                            mattis pellentesque elementum. Viverra
                            tempor id mus.
                          </p>
                        </div>
                      </a>
                    </li> -->

                    <li class="flow-root">
                      <a
                        href="/explorer/indice-parcellaire-vegetation"
                        class="-m-3 flex rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-100"
                      >
                        <div class="hidden flex-shrink-0 sm:block">
                          <img
                            class="h-20 w-32 rounded-md object-cover"
                            src="/images/grabels_earth.jpg"
                            alt=""
                          />
                        </div>
                        <div class="min-w-0 flex-1 sm:ml-8">
                          <h4
                            class="truncate text-base font-medium text-gray-900"
                          >
                            Indice de végétalisation parcellaire
                          </h4>
                          <p class="mt-1 text-sm text-gray-500">
                            Eget ullamcorper ac ut vulputate fames nec
                            mattis pellentesque elementum. Viverra
                            tempor id mus.
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-6 text-sm font-medium">
                  <a
                    href="#"
                    class="text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500"
                  >
                    En savoir plus
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </div>
      {/if}
    </Popover>
    <button
      type="button"
      on:click={e => goto('/sources')}
      class="text-gray-500 group flex-none inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Sources
    </button>
  </div>
</div>
