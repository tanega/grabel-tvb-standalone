import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
// import type { Layer } from '@deck.gl/core/typed';
import {
  colorQuantize,
  formatForDeck,
  landuseOrdinalColorScale,
} from '$lib/utils/colors'
import type { Feature, GeoJsonProperties, Geometry } from 'geojson'
import { initLayer } from '$lib/utils/geo'
import type { CoreLayer, Source } from '$lib/types'
import chroma from 'chroma-js'
import {
  circleRadius,
  scrublandElevationScale,
} from '$lib/utils/scale'
import { schemePuBu } from 'd3-scale-chromatic'

const INITIAL_SOURCES: Source[] = [
  {
    id: 'scrubland_nodes',
    label: 'Noeuds du graphe',
    layerType: 'GeoJsonLayer',
    description: 'Lorem ipsum',
    layerProps: {
      id: 'scrubland_nodes',
      pickable: true,
      visible: true,
      data: '/geojson/scrubland/nodes.json',
      getFillColor: (feature: any) => {
        return formatForDeck(
          colorQuantize(
            [230221469, 58512396557521],
            schemePuBu[5]
          )(
            Math.round(
              feature['properties'][
                '_IF_d16000_p0.05_beta1_graph_plan_cost_prune_500m'
              ]
            )
          )
        )
      },
      getPointRadius: d =>
        circleRadius([0, 7222273], d.properties?.Capacity),
    },
    legendConfig: {
      component: 'Legend',
      color: colorQuantize(
        [230221469, 58512396557521],
        schemePuBu[5]
      ),
      options: {
        title: 'Interaction de flux',
        ticks: 3,
        tickFormat: '.1e',
      },
    },
  },
  {
    id: 'scrubland_edges',
    label: 'Liens du graphe',
    layerType: 'GeoJsonLayer',
    description: 'Lorem ipsum',
    layerProps: {
      id: 'scrubland_edges',
      stroked: false,
      filled: true,
      extruded: true,
      visible: true,
      data: '/geojson/scrubland/edges.json',
      lineWidthMinPixels: 1,
      getFillColor: chroma('gold').rgb(),
      getLineColor: chroma('gold').rgb(),
      // getElevation: (d: any) => {
      // 	return d.properties.surface_m2 / 10;
      // },
      getLineWidth: 1,
    },
  },
  {
    id: 'scrubland_paths',
    label: 'Chemins moindre-coût',
    layerType: 'GeoJsonLayer',
    description: 'Lorem ipsum',
    layerProps: {
      id: 'scrubland_paths',
      stroked: false,
      filled: true,
      visible: false,
      extruded: true,
      data: '/geojson/scrubland/paths.json',
      lineWidthScale: 5,
      lineWidthMinPixels: 1,
      getLineColor: chroma('khaki').rgb(),
      // getElevation: (d: any) => {
      // 	return d.properties.surface_m2 / 10;
      // },
      getLineWidth: 1,
    },
  },
  {
    id: 'scrubland_subgrahs',
    label: 'Composantes du graphe paysager',
    layerType: 'GeoJsonLayer',
    description: 'Lorem ipsum',
    layerProps: {
      id: 'scrubland_subgrahs',
      visible: true,
      pickable: true,
      stroked: true,
      filled: true,
      opacity: 0.5,
      data: '/geojson/scrubland/subgraphs.geojson',
      lineWidthMinPixels: 1,
      getLineColor: () => chroma('orange').rgb(),
      getFillColor: [0, 0, 0, 0],
      // getElevation: (d: any) => {
      // 	return d.properties.surface_m2 / 10;
      // },
      getLineWidth: 1,
    },
  },

  {
    id: 'scrubland_patches',
    label: 'Habitat (Timon lepidus)',
    layerType: 'GeoJsonLayer',
    description: 'Lorem ipsum',
    layerProps: {
      id: 'scrubland_patches',
      pickable: true,
      stroked: false,
      filled: true,
      extruded: true,
      visible: false,
      data: '/geojson/scrubland/patches.geojson',
      lineWidthScale: 20,
      lineWidthMinPixels: 2,
      getFillColor: chroma('goldenrod').rgb(),
      getLineColor: [160, 160, 180, 200],
      getPointRadius: 100,
      getLineWidth: 1,
      getElevation: d =>
        scrublandElevationScale(
          [230221468.71559554, 58512396557520.13],
          d.properties?.[
            '_IF_d16000_p0.05_beta1_graph_plan_cost_prune_500m'
          ]
        ),
    },
  },
  {
    id: 'scrubland_landcover',
    label: 'Occupation du sol',
    layerType: 'MVTLayer',
    description: 'Lorem ipsum',
    layerProps: {
      id: 'scrubland_landcover',
      data: '/geojson/core/landuse_studyarea.json',
      visible: false,
      pickable: true,
      stroked: true,
      filled: true,
      opacity: 0.5,
      wireframe: true,
      getFillColor: (d: Feature<Geometry, GeoJsonProperties>) => {
        return formatForDeck(
          landuseOrdinalColorScale(d.properties?.lib19_niv2)
        )
      },
      getLineColor: [80, 80, 80],
      /**
       * fix types; deck.gl docs is sparse and won't help...
       * read source code
       */
    },
    legendConfig: {
      component: 'Swatches',
      color: landuseOrdinalColorScale,
      options: {
        title: "Classes d'occupation du sol",
        columns: '180px',
      },
    },
  },
]
const INITIAL_LAYERS = initLayer(INITIAL_SOURCES)

export const currentStyleStore = writable('Streets V10')

export const sources: Writable<Source[]> = writable([
  ...INITIAL_SOURCES,
])

export const layers: Writable<CoreLayer[]> = writable(
  [...INITIAL_LAYERS].reverse()
)

export const setLayerVisibility = (
  layerId: string,
  visibility: boolean
) => {
  layers.update(currentLayers => {
    return currentLayers.map(layer => {
      if (layer.id == layerId) {
        return layer.clone({ visible: visibility })
      }
      return layer
    })
  })
}

export const setLayerOpacity = (layerId: string, opacity: number) => {
  layers.update(currentLayers => {
    return currentLayers.map(layer => {
      if (layer.id == layerId) {
        return layer.clone({ opacity: opacity })
      }
      return layer
    })
  })
}

export const cloneLayers = () => {
  layers.update(layers => {
    return layers.map(layer => {
      return layer.clone({})
    })
  })
}
