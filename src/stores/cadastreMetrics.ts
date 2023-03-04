import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
import { GeoJsonLayer } from '@deck.gl/layers/typed'
import type { Feature, Geometry, GeoJsonProperties } from 'geojson'
// import * as turf from '@turf/turf';
import { scaleLinear } from 'd3-scale'
import chroma from 'chroma-js'

import { getItemById } from '$lib/utils/array'
import { vegetationFineBrewer } from '$lib/utils/colors'

// import landuse from '$lib/assets/core/landuse_studyarea.json';

const color = scaleLinear([0, 100], ['white', 'black'])

export type LegendItem = {
  id: number
  rgbColors: number[]
  label: string
}

export type CoreLayer = GeoJsonLayer

export type Source = {
  id: string
  label: string
  layerType: 'MVTLayer' | 'GeoJsonLayer'
  description: string
}

/**
 * Refact memo
 * 
 const layersDefaultConfig = [
	[
		'nodes',
		{
			id: 'nodes',
			label: 'Noeuds du graphe',
			layerType: 'MVTLayer',
			description: 'Lorem ipsum'
		}
	],
	[
		'edges',
		{
			id: 'edges',
			label: 'Liens du graphe',
			layerType: 'MVTLayer',
			description: 'Lorem ipsum'
		}
	]
	///...
] as Iterable<readonly [string, Source]>;
const configMap = new Map<string, Source>(layersDefaultConfig);
console.log(configMap.get('nodes'));
 * 
 */

const INITIAL_SOURCES: Source[] = [
  {
    id: 'cadastre-geojson-layer',
    label: 'Cadastre (parcelles)',
    layerType: 'GeoJsonLayer',
    description: 'Lorem ipsum',
  },
  {
    id: 'vegetation-fine-geojson',
    label: 'Végétation fine (Grabels)',
    layerType: 'GeoJsonLayer',
    description: 'Lorem ipsum',
  },
]

const INITIAL_LAYERS = [
  new GeoJsonLayer({
    id: 'cadastre-geojson-layer',
    data: '/geojson/core/grabels_cadastre_parcelles_4326.json',
    visible: true,
    pickable: true,
    stroked: true,
    filled: true,
    opacity: 0.5,
    lineWidthMinPixels: 1,
    getFillColor: [0, 0, 0, 0],
    getLineColor: () => chroma(color(1)).rgb(),
    getPointRadius: 100,
    getLineWidth: 1,
  }),
  new GeoJsonLayer({
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
      return vegetationFineBrewer(d.properties?.COD_VEG_n)
    },
    getLineColor: [160, 160, 180, 200],
    getPointRadius: 100,
    getLineWidth: 1,
  }),
]

export const currentStyleStore = writable('Streets V10')

export const sources: Writable<Source[]> = writable([
  ...INITIAL_SOURCES,
])

export const layers: Writable<CoreLayer[]> = writable(
  [...INITIAL_LAYERS].reverse()
)

export const legend: Writable<Record<string, LegendItem[]>> =
  writable({})

export const addLegendItem = (
  layerName: string,
  legendItem: LegendItem
) => {
  legend.update(legend => {
    const newLegend = { ...legend }
    const legendItems = newLegend[layerName]
    if (!legendItems) {
      newLegend[layerName] = [legendItem]
    }
    if (legendItems && legendItems.length > 0) {
      if (!getItemById(legendItem.id, legendItems)) {
        newLegend[layerName] = [...newLegend[layerName], legendItem]
      }
    }
    return newLegend
  })
}

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
