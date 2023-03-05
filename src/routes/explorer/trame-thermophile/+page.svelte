<script lang="ts">
  import { onMount } from 'svelte'
  import mapboxgl from 'mapbox-gl'
  import type { Map } from 'mapbox-gl'
  import { Deck } from '@deck.gl/core/typed'
  import type { Deck as DeckType } from '@deck.gl/core/typed'
  import MapStylePicker from '$lib/Map/MapStylePicker.svelte'
  import { layers, cloneLayers } from '$stores/thermophileMapStore'
  import Legend from '$lib/Map/LegendThermo.svelte'
  import Story from '$lib/Map/Story.svelte'
  import Content from '$lib/Content/trame-thermophile-article.svelte'

  let mapElement: HTMLDivElement
  let canvasElement: HTMLCanvasElement
  let map: Map | null = null
  let deck: DeckType | null = null
  let accessToken = import.meta.env.VITE_MAPBOX_API_ACCESS_TOKEN
  let mapStyle = 'mapbox://styles/mapbox/light-v9'
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
    map = new mapboxgl.Map({
      accessToken: accessToken,
      container: mapElement,
      interactive: true,
      style: mapStyle,
      center: [viewState.longitude, viewState.latitude],
      zoom: viewState.zoom,
      pitch: viewState.pitch,
      bearing: viewState.bearing,
    })
  }

  /**
   * Use the `setStyle` function from `mapbox-gl` to update the map style:
   * https://docs.mapbox.com/mapbox-gl-js/example/setstyle/
   */
  function handleStyleChange(event: any) {
    if (map) {
      map.setStyle(event.target.value)
    }
  }

  // Create the deck.gl instance.
  function createDeck() {
    deck = new Deck({
      canvas: canvasElement,
      width: '100%',
      height: '100%',
      initialViewState: viewState,
      controller: true,
      // Change the map's viewState whenever the view state of deck.gl changes.
      onViewStateChange: ({ viewState }: any) => {
        map?.jumpTo({
          center: [viewState.longitude, viewState.latitude],
          zoom: viewState.zoom,
          bearing: viewState.bearing,
          pitch: viewState.pitch,
        })
      },
    })
  }

  /**
   * Use the `deck.setProps()` method to set the layers in deck.gl.
   * See https://deck.gl/docs/api-reference/core/deck#layers.
   * */
  function renderLayers() {
    // If `deck` is null then return early to prevent errors.
    if (!deck) return
    deck.setProps({
      layers: $layers,
    })
  }

  $: deck && renderLayers()
  $: $layers && renderLayers()
</script>

<MapStylePicker
  currentStyle={mapStyle}
  on:change={handleStyleChange}
/>
<Story
  class="absolute top-24 left-6 z-10"
  imgUrl="https://images.unsplash.com/photo-1592083646587-2c84f8e0fd2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80"
  title="Trame thermophile"
  description="Milieux ouverts regroupant landes, garrigues et pelouses séches. Le modèle biologique utilisé est le lézard ocelé."
>
  <svelte:fragment slot="content">
    <Content />
  </svelte:fragment>
</Story>
<Legend class="absolute top-52 left-6 z-10" />
<!-- <div id="legend" class="legend">
</div> -->
<div class="deck-container">
  <div id="map-thermo" bind:this={mapElement} />
  <canvas id="deck-canvas" bind:this={canvasElement} />
</div>

<style>
  .deck-container {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  #map-thermo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
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
