import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
import type { CoreLayer, Source } from '$lib/types'
import {
  formatForDeck,
  landuseOrdinalColorScale,
  colorQuantize,
} from '$lib/utils/colors'
import { initLayer } from '$lib/utils/geo'
import type { Feature, GeoJsonProperties, Geometry } from 'geojson'
import { circleRadius, elevationScale } from '$lib/utils/scale'
import chroma from 'chroma-js'

const INITIAL_SOURCES: Source[] = [
  {
    id: 'forest_nodes',
    label: 'Noeuds du graphe',
    layerType: 'GeoJsonLayer',
    description: 'Lorem ipsum',
    layerProps: {
      id: 'forest_nodes',
      pickable: true,
      visible: true,
      data: '/geojson/forest/nodes.json',
      getFillColor: (feature: any) => {
        return formatForDeck(
          colorQuantize([2.52e7, 2.67e13])(
            Math.round(
              feature['properties']['_IF_d1000_p0.5_beta1_Graph2']
            )
          )
        )
      },
      getPointRadius: d =>
        circleRadius([0, 3.79e7], d.properties?.Capacity),
    },
    legendConfig: {
      component: 'Legend',
      color: colorQuantize([2.52e7, 2.67e13]),
      options: {
        title: 'Interaction de flux',
        ticks: 3,
        tickFormat: '.1e',
      },
    },
  },
  {
    id: 'forest_edges',
    label: 'Liens du graphe',
    layerType: 'GeoJsonLayer',
    description: 'Lorem ipsum',
    layerProps: {
      id: 'forest_edges',
      stroked: false,
      filled: true,
      extruded: true,
      visible: true,
      data: '/geojson/forest/edges.json',
      lineWidthMinPixels: 1,
      getFillColor: chroma('teal').rgb(),
      getLineColor: chroma('teal').rgb(),
      // getElevation: (d: any) => {
      // 	return d.properties.surface_m2 / 10;
      // },
      getLineWidth: 1,
    },
  },
  {
    id: 'forest_paths',
    label: 'Chemins moindre-coût',
    layerType: 'GeoJsonLayer',
    description: 'Lorem ipsum',
    layerProps: {
      id: 'forest_paths',
      stroked: false,
      filled: true,
      visible: false,
      extruded: true,
      data: '/geojson/forest/paths.json',
      lineWidthScale: 5,
      lineWidthMinPixels: 1,
      getLineColor: chroma('turquoise').rgb(),
      // getElevation: (d: any) => {
      // 	return d.properties.surface_m2 / 10;
      // },
      getLineWidth: 1,
    },
  },
  {
    id: 'forest_subgrahs',
    label: 'Composantes du graphe paysager',
    layerType: 'GeoJsonLayer',
    description: 'Lorem ipsum',
    layerProps: {
      id: 'forest_subgrahs',
      visible: true,
      pickable: true,
      stroked: true,
      filled: true,
      opacity: 0.5,
      data: '/geojson/forest/subgraphs.json',
      lineWidthMinPixels: 1,
      getLineColor: () => chroma('aquamarine').rgb(),
      getFillColor: [0, 0, 0, 0],
      // getElevation: (d: any) => {
      // 	return d.properties.surface_m2 / 10;
      // },
      getLineWidth: 1,
    },
  },

  {
    id: 'forest_patches',
    label: 'Habitat (Sciurus vulgaris)',
    layerType: 'GeoJsonLayer',
    description: 'Lorem ipsum',
    layerProps: {
      id: 'forest_patches',
      pickable: true,
      stroked: false,
      filled: true,
      extruded: true,
      visible: false,
      data: '/geojson/forest/patches_simple.geojson',
      lineWidthScale: 20,
      lineWidthMinPixels: 2,
      getFillColor: [23, 119, 100],
      getLineColor: [160, 160, 180, 200],
      getPointRadius: 100,
      getLineWidth: 1,
      getElevation: d =>
        elevationScale(
          [0, 3.79e7],
          d.properties?.['_IF_d1000_p0.5_beta1_Graph2']
        ),
    },
  },
  {
    id: 'forest_landcover',
    label: 'Occupation du sol',
    layerType: 'MVTLayer',
    description: 'Lorem ipsum',
    layerProps: {
      id: 'forest_landcover',
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
      //   getFillColor: (data: any) => {
      //     // console.log(getCustomPolygonChromaFillColor(data.properties.c2019_niv2));
      //     // return [56, 145, 22];
      //     return getCustomPolygonChromaFillColor(
      //       data.properties.c2019_niv2
      //     )
      //   },
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
      // console.log(layer);
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
      if (layer.id === layerId) {
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

// let range: number[] = []

// fetch('/geojson/forest/nodes.json')
//   .then(res => res.json())
//   .then(data => {
//     range = getMinMaxFromFeatureAttribute(
//       data,
//       '_IF_d1000_p0.5_beta1_Graph2'
//     )
//     console.log('range :>> ', range)
//   })
