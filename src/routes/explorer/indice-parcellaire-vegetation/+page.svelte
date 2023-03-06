<script lang="ts">
  import { onMount } from 'svelte'
  import mapboxgl from 'mapbox-gl'
  import type { Map } from 'mapbox-gl'
  import { Deck } from '@deck.gl/core/typed'
  import type { Deck as DeckType } from '@deck.gl/core/typed'
  import MapStylePicker from '$lib/Map/MapStylePicker.svelte'
  import { layers, cloneLayers } from '$stores/cadastreMetrics'
  import Legend from '$lib/Map/LegendCadastre.svelte'
  import Story from '$lib/Map/Story.svelte'
  import { Button, Modal } from 'flowbite-svelte'
  import Content from '$lib/Content/indice-parcellaire-article.svelte'

  let defaultModal = false

  let mapElement: HTMLDivElement
  let canvasElement: HTMLCanvasElement
  let map: Map | null = null
  let deck: DeckType | null = null
  let accessToken = import.meta.env.VITE_MAPBOX_API_ACCESS_TOKEN
  let mapStyle = 'mapbox://styles/mapbox/dark-v9'
  let viewState = {
    width: 1583,
    height: 888,
    latitude: 43.64600991882088,
    longitude: 3.792562508386218,
    zoom: 13.368844862524575,
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
      onHover(info, event) {
        // console.log('event :>> ', event)
        // console.log('info :>> ', info)
      },
      getTooltip: ({ object, layer }) =>
        object &&
        layer && {
          html: `<h2>${layer.id}</h2><div>${JSON.stringify(
            object.properties
          )}</div>`,
          style: {
            backgroundColor: '#8e95a0',
            fontSize: '0.8em',
          },
        },
      // Change the map's viewState whenever the view state of deck.gl changes.
      onViewStateChange: ({ viewState }: any) => {
        map?.jumpTo({
          center: [viewState.longitude, viewState.latitude],
          zoom: viewState.zoom,
          bearing: viewState.bearing,
          pitch: viewState.pitch,
        })
      },
      onClick: (info, event) => {
        console.log(info)
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
  class="absolute bottom-6 left-6 z-30"
  title="Indice parcellaire de végétalisation"
  lead="Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor idmus."
  imgUrl="/images/grabels_earth.jpg"
>
  <svelte:fragment slot="content">
    <Content />
  </svelte:fragment>
</Story>
<Legend class="absolute top-52 left-6 z-10" />

<div class="deck-container">
  <div id="map" bind:this={mapElement} />
  <canvas id="deck-canvas" bind:this={canvasElement} />
</div>

<style>
  .deck-container {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  #map {
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
