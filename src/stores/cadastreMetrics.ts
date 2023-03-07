import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
import type { GeoJsonLayer as GeoJsonLayerType } from '@deck.gl/layers/typed'
import type { GeoJsonLayerProps } from '@deck.gl/layers/typed'
import { GeoJsonLayer } from '@deck.gl/layers/typed'
import type { Feature, Geometry, GeoJsonProperties } from 'geojson'
import chroma from 'chroma-js'
import {
  vegFineOrdinalColorScale,
  areaColorLinearScale,
  formatForDeck,
} from '$lib/utils/colors'
import type { CoreLayer, Source } from '$lib/types'
import * as _ from 'lodash'

/**
 * Support DeckGL layer setup with config
 */
const INITIAL_SOURCES: Source[] = [
  {
    id: 'cadastre-outline-layer',
    label: 'Limites parcellaire',
    layerType: 'GeoJsonLayer',
    description: 'Lorem ipsum',
    layerProps: {
      id: 'cadastre-outline-layer',
      data: '/geojson/core/grabels_cadastre_parcelles_4326.json',
      visible: true,
      pickable: true,
      stroked: true,
      filled: true,
      opacity: 0.5,
      lineWidthMinPixels: 1,
      getFillColor: [0, 0, 0, 0],
      getLineColor: () => chroma('#9c755f').rgb(),
      getPointRadius: 100,
      getLineWidth: 1,
    },
  },
  {
    id: 'cadastre-geojson-layer',
    label: 'Cadastre (parcelles)',
    layerType: 'GeoJsonLayer',
    description: 'Lorem ipsum',
    layerProps: {
      id: 'cadastre-geojson-layer',
      data: '/geojson/core/grabels_cadastre_parcelles_4326.json',
      visible: true,
      pickable: true,
      stroked: true,
      filled: true,
      opacity: 0.5,
      lineWidthMinPixels: 1,
      getFillColor: (feature: any) => {
        return formatForDeck(
          areaColorLinearScale([0, 500000])(
            Math.round(_.get(feature, 'properties.Shape_Area'))
          )
        )
      },
      getLineColor: () => chroma('white').rgb(),
      getPointRadius: 100,
      getLineWidth: 1,
    },
    legendConfig: {
      component: 'Legend',
      color: areaColorLinearScale([0, 456221]),
      options: {
        title: 'Superficie de la parcelle (m²)',
        columns: '180px',
      },
    },
  },
  {
    id: 'vegetation-fine-geojson',
    label: 'Végétation fine (Grabels)',
    layerType: 'GeoJsonLayer',
    description: 'Lorem ipsum',
    layerProps: {
      id: 'vegetation-fine-geojson',
      data: '/geojson/core/vegetation_fine_grabels.json',
      pickable: true,
      visible: true,
      stroked: false,
      filled: true,
      pointType: 'circle',
      lineWidthScale: 20,
      lineWidthMinPixels: 2,
      getFillColor: (d: Feature<Geometry, GeoJsonProperties>) => {
        return formatForDeck(
          vegFineOrdinalColorScale(d.properties?.LIB_VEG_n)
        )
      },
      getLineColor: [160, 160, 180, 200],
      getPointRadius: 100,
      getLineWidth: 1,
    },
    legendConfig: {
      component: 'Swatches',
      color: vegFineOrdinalColorScale,
      options: {
        title: 'Type de végétation',
        columns: '180px',
      },
    },
  },
]

const initLayer = (
  layerSources: Source[]
): GeoJsonLayerType[] | any => {
  return layerSources.map(({ layerType, id, layerProps }) => {
    switch (layerType) {
      case 'GeoJsonLayer':
        return new GeoJsonLayer({
          ...layerProps,
          id: id,
        })
    }
  })
}

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
