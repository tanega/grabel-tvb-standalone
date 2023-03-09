<script lang="ts">
  import { onMount } from 'svelte'
  import mapboxgl from 'mapbox-gl'
  import type { Map } from 'mapbox-gl'
  import { Deck, MapView } from 'deck.gl'
  import type {
    Deck as DeckType,
    MapView as MapViewType,
    FilterContext,
  } from '@deck.gl/core/typed'
  import type { ViewStateChangeParameters } from '@deck.gl/core/src/controllers/controller'
  import MapStylePicker from '$lib/Map/MapStylePicker.svelte'
  import {
    layers,
    cloneLayers,
    sources,
    setLayerOpacity,
    setLayerVisibility,
  } from '$stores/forestMapStore'
  import Legend from '$lib/Map/LegendContainer.svelte'
  import Story from '$lib/Map/Story.svelte'
  import { Button, Modal } from 'flowbite-svelte'
  import Content from '$lib/Content/analyse-diachronique-article.svelte'

  let defaultModal = false
  let showLegend = false

  let mapboxBeforeElement: HTMLDivElement
  let mapboxAfterElement: HTMLDivElement
  let canvasElement: HTMLCanvasElement
  let mapboxBefore: Map | null = null
  let mapboxAfter: Map | null = null
  let deck: DeckType | null = null
  let accessToken = import.meta.env.VITE_MAPBOX_API_ACCESS_TOKEN
  let mapStyle = 'mapbox://styles/mapbox/dark-v9'
  let viewState = {
    latitude: 43.64719562181893,
    longitude: 3.7781012994069005,
    zoom: 11.334241062322779,
    bearing: 0.10714285714285715,
    pitch: 19.64125560538116,
    altitude: 1.5,
    maxZoom: 20,
    minZoom: 0,
    maxPitch: 60,
    minPitch: 0,
    normalize: true,
    position: [0, 0, 0],
  }

  let currentViewState: Record<string, any> = {
    before: {
      latitude: 43.64719562181893,
      longitude: 3.7781012994069005,
      zoom: 11.334241062322779,
      bearing: 0.10714285714285715,
      pitch: 19.64125560538116,
      altitude: 1.5,
      maxZoom: 20,
      minZoom: 0,
      maxPitch: 60,
      minPitch: 0,
      normalize: true,
      position: [0, 0, 0],
    },
    after: {
      latitude: 43.64719562181893,
      longitude: 3.7781012994069005,
      zoom: 11.334241062322779,
      bearing: 0.10714285714285715,
      pitch: 19.64125560538116,
      altitude: 1.5,
      maxZoom: 20,
      minZoom: 0,
      maxPitch: 60,
      minPitch: 0,
      normalize: true,
      position: [0, 0, 0],
    },
  }

  const beforeView = new MapView({
    id: 'before',
    controller: true,
    x: 0,
    y: 0,
    width: '50%%',
    height: '100%',
  })
  const afterView = new MapView({
    id: 'after',
    controller: true,
    x: '50%',
    y: 0,
    width: '50%',
    height: '100%',
  })

  onMount(() => {
    /**
     * !FIX: reset layers store or clean previously loaded tileset
     * because for previously loaded tileset a deck.gl assertiions error is thrown
     * see: https://deck.gl/docs/developer-guide/custom-layers/layer-lifecycle
     */
    cloneLayers()
    createMap()
    createDeck()
  })

  /**
   * TODO: change mapboxgl to maplibre
   */
  function createMap() {
    mapboxBefore = new mapboxgl.Map({
      accessToken: accessToken,
      container: mapboxBeforeElement,
      interactive: false,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [
        currentViewState.before.longitude,
        currentViewState.before.latitude,
      ],
      zoom: currentViewState.before.zoom,
      pitch: currentViewState.before.pitch,
      bearing: currentViewState.before.bearing,
    })
    mapboxAfter = new mapboxgl.Map({
      accessToken: accessToken,
      container: mapboxAfterElement,
      interactive: false,
      style: mapStyle,
      center: [
        currentViewState.after.longitude,
        currentViewState.after.latitude,
      ],
      zoom: currentViewState.after.zoom,
      pitch: currentViewState.after.pitch,
      bearing: currentViewState.after.bearing,
    })
  }

  /**
   * Use the `setStyle` function from `mapbox-gl` to update the map style:
   * https://docs.mapbox.com/mapbox-gl-js/example/setstyle/
   */
  function handleStyleChange(event: any) {
    if (mapboxBefore) {
      mapboxBefore.setStyle(event.target.value)
    }
    if (mapboxAfter) {
      mapboxAfter.setStyle(event.target.value)
    }
  }

  function layerFilter({ layer, viewport }: FilterContext) {
    const shouldDrawInBeforeMap =
      layer.id.startsWith('forest_landcover') ||
      layer.id.startsWith('forest_patches')
    const shouldDrawInAfterMap =
      layer.id.startsWith('forest_nodes') ||
      layer.id.startsWith('forest_edges')

    if (viewport.id === 'before') return shouldDrawInBeforeMap
    if (viewport.id === 'after') return shouldDrawInAfterMap
    return false
  }

  // Create the deck.gl instance.
  function createDeck() {
    deck = new Deck({
      canvas: canvasElement,
      width: '100%',
      height: '100%',
      views: [beforeView, afterView],
      viewState: currentViewState,
      layerFilter: layerFilter,
      // Change the map's viewState whenever the view state of deck.gl changes.
      onViewStateChange: ({
        viewState,
      }: ViewStateChangeParameters & { viewId: string }) => {
        currentViewState = {
          before: viewState,
          after: viewState,
        }
        mapboxBefore?.jumpTo({
          center: [viewState.longitude, viewState.latitude],
          zoom: viewState.zoom,
          bearing: viewState.bearing,
          pitch: viewState.pitch,
        })
        mapboxAfter?.jumpTo({
          center: [viewState.longitude, viewState.latitude],
          zoom: viewState.zoom,
          bearing: viewState.bearing,
          pitch: viewState.pitch,
        })
      },
      onClick: (info: any, event: Event) => {
        console.log(info)
      },
    })
  }

  /**
   * Use the `deck.setProps()` method to set the layers in deck.gl.
   * See https://deck.gl/docs/api-reference/core/deck#layers.
   * */
  function renderLayersBefore() {
    // If `deck` is null then return early to prevent errors.
    if (!deck) return
    deck.setProps({
      layers: $layers,
    })
  }

  function renderViewState() {
    // If `deck` is null then return early to prevent errors.
    if (!deck) return
    deck.setProps({
      viewState: currentViewState,
    })
  }

  $: deck && renderLayersBefore()
  $: $layers && renderLayersBefore()
  $: currentViewState && renderViewState()
  // $: console.log($legend);
</script>

<MapStylePicker
  currentStyle={mapStyle}
  on:change={handleStyleChange}
/>
<Story
  class="absolute bottom-6 left-6 z-30"
  title="Trame forestière"
  lead="Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor idmus."
>
  <svelte:fragment slot="content">
    <Content />
  </svelte:fragment>
</Story>
{#if !showLegend}
  <Legend
    class="absolute bottom-6 right-6 z-10"
    layers={$layers}
    sources={$sources}
    {setLayerOpacity}
    {setLayerVisibility}
  />
{/if}
<!-- <Legend class="absolute top-52 left-6 z-10" /> -->

<!-- <div id="legend" class="legend">
</div> -->
<div class="deck-container">
  <div id="map-before" bind:this={mapboxBeforeElement} />
  <div id="map-after" bind:this={mapboxAfterElement} />
  <canvas id="deck-canvas" bind:this={canvasElement} />
</div>

<style>
  .deck-container {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  #map-before {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: #e5e9ec;
    overflow: hidden;
  }
  #map-after {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    background: #e5e9ec;
    overflow: hidden;
  }

  #deck-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
