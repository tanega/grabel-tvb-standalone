<script lang="ts">
  import {
    sources,
    setLayerVisibility,
    layers,
    setLayerOpacity,
  } from '$stores/cadastreMetrics'
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from '@rgossiaux/svelte-headlessui'
  import {
    ChevronDownIcon,
    ChevronUpIcon,
  } from '@rgossiaux/svelte-heroicons/outline'
  import Checkbox from '$lib/Core/Checkbox.svelte'
  import Slider from '$lib/Core/Slider.svelte'
  import { getItemById } from '$lib/utils/array'
  import { Legend, Swatches } from '$lib/Legend'

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
</script>

<aside class={`w-96 ${$$props.class}`} aria-label="Sidebar">
  <div
    class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800"
  >
    <!-- TODO: Reverse $sources as last deck.gl layers appears first -->
    {#each $sources as source (source.id)}
      <Disclosure let:open>
        <div class="mb-3 flex">
          <Checkbox
            class="mr-2"
            checked={getItemById(source.id, $layers)?.props?.visible}
            on:click={e => toggleLayerVisibility(e, source.id)}
          />
          <div class="flex-1">{source.label}</div>
          <Slider
            class="flex-none"
            value={getItemById(source.id, $layers)?.props?.opacity}
            on:change={e => handleLayerOpacity(e, source.id)}
          />
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
        </div>
        {#if open && !isAllLegendDetailsCollapsed}
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
                <div>Hello world</div>
              {/if}
            </DisclosurePanel>
          </div>
        {/if}
      </Disclosure>
    {/each}
  </div>
</aside>
