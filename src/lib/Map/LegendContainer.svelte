<script lang="ts">
  import type { Source, CoreLayer } from '$lib/types'
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from '@rgossiaux/svelte-headlessui'
  import {
    ChevronDownIcon,
    ChevronUpIcon,
  } from '@rgossiaux/svelte-heroicons/outline'
  import { Popover } from 'flowbite-svelte'
  import Checkbox from '$lib/Core/Checkbox.svelte'
  import Slider from '$lib/Core/Slider.svelte'
  import { Legend, Swatches } from '$lib/Legend'
  import * as _ from 'lodash'

  export let layers: CoreLayer[] = []
  export let sources: Source[] = []
  export let setLayerVisibility: (
    layerId: string,
    value: boolean
  ) => void
  export let setLayerOpacity: (layerId: string, value: number) => void

  /**
   * To collapse all layers legend disclosure programmatically
   * via event forwarding or external control with svelte/stores
   */
  let isAllLegendDetailsCollapsed = false

  const toggleLayerVisibility = (e: CustomEvent, layerId: string) => {
    setLayerVisibility(layerId, e.detail.checked as boolean)
  }
  const handleLayerOpacity = (e: CustomEvent, layerId: string) => {
    setLayerOpacity(layerId, e.detail.value as number)
  }

  const getLayerFromSource = (source: Source) => {
    const layer = layers.filter(layer => layer.id == source.id)
    return layer ? layer[0] : undefined
  }
</script>

{#if layers && sources}
  <aside class={`w-96 ${$$props.class}`} aria-label="Sidebar">
    <div
      class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800"
    >
      <!-- TODO: Reverse $sources as last deck.gl layers appears first -->
      {#each sources as source (source.id)}
        <Disclosure let:open>
          <div class="mb-3 flex">
            <Checkbox
              class="mr-2"
              checked={getLayerFromSource(source)?.props?.visible}
              on:click={e => toggleLayerVisibility(e, source.id)}
            />
            <div class="flex-1" id={source.id}>{source.label}</div>
            {#if source.description}
              <Popover
                class="w-64 text-sm font-light "
                title="Détails"
                placement="right"
                triggeredBy={`#${source.id}`}
              >
                {source.description}
              </Popover>
            {/if}
            <Slider
              class="flex-none"
              value={getLayerFromSource(source)?.props?.opacity}
              on:change={e => handleLayerOpacity(e, source.id)}
            />
            {#if source.legendConfig}
              <DisclosureButton>
                {#if open}
                  <ChevronDownIcon
                    class="text-gray-400 ml-2 h-4 w-4 group-hover:text-gray-500"
                  />
                {:else}
                  <ChevronUpIcon
                    class="text-gray-400 ml-2 h-4 w-4 group-hover:text-gray-500"
                  />
                {/if}
              </DisclosureButton>
            {/if}
          </div>
          {#if open && !isAllLegendDetailsCollapsed && source.legendConfig}
            <div>
              <DisclosurePanel static>
                {#if source.legendConfig.component === 'Legend'}
                  <Legend
                    color={source.legendConfig.color}
                    options={source.legendConfig.options}
                  />
                {:else if source.legendConfig.component === 'Swatches'}
                  <Swatches
                    color={source.legendConfig.color}
                    options={source.legendConfig.options}
                  />
                {:else}
                  <div>
                    Erreur lors du chargement de la légende pour cette
                    couche
                  </div>
                {/if}
              </DisclosurePanel>
            </div>
          {/if}
        </Disclosure>
      {/each}
    </div>
  </aside>
{/if}
