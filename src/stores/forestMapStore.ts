import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { LayerData } from '@deck.gl/core/typed';
import { GeoJsonLayer } from '@deck.gl/layers/typed';
import type { Feature, Geometry, GeoJsonProperties, FeatureCollection } from 'geojson';
import * as turf from '@turf/turf';
import { merge } from 'rambda';
import { scaleLinear } from 'd3-scale';
import chroma from 'chroma-js';
import * as aq from 'arquero';

import { getItemById } from '$lib/utils/array';
import { getCustomPolygonChromaFillColor, vegetationFineBrewer } from '$lib/utils/colors';

import cadastre from '$lib/assets/geojson/core/grabels_cadastre_parcelles_4326.json';
import vegetation from '$lib/assets/geojson/core/vegetation_fine_grabels.json';
import landuse from '$lib/assets/geojson/core/landuse_studyarea.json';

import nodes from '$lib/assets/geojson/forest/nodes.json';
import edges from '$lib/assets/geojson/forest/edges.json';
import paths from '$lib/assets/geojson/forest/paths.json';
import patches from '$lib/assets/geojson/forest/patches.json';

const cadastreProperties: GeoJsonProperties[] = [];
turf.meta.featureEach(cadastre as FeatureCollection, function (currentFeature) {
	cadastreProperties.push(currentFeature.properties);
});

console.log(cadastreProperties);
const df = aq.fromJSON(cadastreProperties);
console.log(df.numRows());

const color = scaleLinear([0, 100], ['white', 'black']);

export type LegendItem = {
	id: number;
	rgbColors: number[];
	label: string;
};

export type CoreLayer = GeoJsonLayer;

export type Source = {
	id: string;
	label: string;
	layerType: 'MVTLayer' | 'GeoJsonLayer';
	description: string;
};

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
		id: 'nodes',
		label: 'Noeuds du graphe',
		layerType: 'GeoJsonLayer',
		description: 'Lorem ipsum'
	},
	{
		id: 'edges',
		label: 'Liens du graphe',
		layerType: 'GeoJsonLayer',
		description: 'Lorem ipsum'
	},
	{
		id: 'paths',
		label: 'Chemins moindre-coût',
		layerType: 'GeoJsonLayer',
		description: 'Lorem ipsum'
	},
	{
		id: 'public_patches_sciurus',
		label: 'Habitat (Sciurus vulgaris)',
		layerType: 'GeoJsonLayer',
		description: 'Lorem ipsum'
	},
	{
		id: 'cadastre-geojson-layer',
		label: 'Cadastre (parcelles)',
		layerType: 'GeoJsonLayer',
		description: 'Lorem ipsum'
	},
	{
		id: 'vegetation-fine-geojson',
		label: 'Végétation fine (Grabels)',
		layerType: 'GeoJsonLayer',
		description: 'Lorem ipsum'
	},
	{
		id: 'landcover_studyarea_4326',
		label: 'Occupation du sol',
		layerType: 'MVTLayer',
		description: 'Lorem ipsum'
	}
];

const INITIAL_LAYERS = [
	new GeoJsonLayer({
		id: 'edges',
		stroked: false,
		filled: true,
		extruded: true,
		visible: true,
		data: edges as any,
		lineWidthMinPixels: 2,
		getFillColor: [160, 160, 180, 200],
		getLineColor: [80, 80, 80],
		// getElevation: (d: any) => {
		// 	return d.properties.surface_m2 / 10;
		// },
		getLineWidth: 2
	}),
	new GeoJsonLayer({
		id: 'paths',
		stroked: false,
		filled: true,
		visible: true,
		extruded: true,
		data: paths as any,
		lineWidthScale: 10,
		lineWidthMinPixels: 2,
		getLineColor: [140, 0, 0],
		// getElevation: (d: any) => {
		// 	return d.properties.surface_m2 / 10;
		// },
		getLineWidth: 2
	}),
	new GeoJsonLayer({
		id: 'nodes',
		pickable: true,
		visible: true,
		data: nodes as any,
		getPointRadius: (data: any) => {
			// console.log(data.properties);
			// console.log(Math.log2(data.properties['_if_d16000_p0.05_beta1_graph_plan_cost_prune_500m']));
			return 56;
			// return Math.pow(
			// 	Math.log2(data.properties['_if_d16000_p0.05_beta1_graph_plan_cost_prune_500m']) / 10,
			// 	4
			// );
		},
		getColor: (data: any) => {
			return [178, 12, 45];
		},
		getElevation: 5
	}),
	new GeoJsonLayer({
		id: 'public_patches_sciurus',
		visible: true,
		pickable: true,
		data: patches as any,
		stroked: true,
		filled: true,
		wireframe: true,
		getFillColor: (data: any) => {
			return [45, 78, 18];
		},
		getLineColor: [80, 80, 80],
		// getElevation: (d: any) => {
		// 	return d.properties.surface_m2 / 10;
		// },
		lineWidth: 3
		/**
		 * fix types; deck.gl docs is sparse and won't help...
		 * read source code
		 */
	}),
	new GeoJsonLayer({
		id: 'cadastre-geojson-layer',
		data: cadastre as LayerData<Feature<Geometry, GeoJsonProperties>>,
		visible: true,
		pickable: true,
		stroked: true,
		filled: true,
		opacity: 0.5,
		lineWidthMinPixels: 1,
		getFillColor: () => chroma(color(25)).rgb(),
		getLineColor: () => chroma(color(75)).rgb(),
		getPointRadius: 100,
		getLineWidth: 1
	}),
	new GeoJsonLayer({
		id: 'vegetation-fine-geojson',
		data: vegetation as LayerData<Feature<Geometry, GeoJsonProperties>>,
		pickable: true,
		visible: true,
		stroked: false,
		filled: true,
		pointType: 'circle',
		lineWidthScale: 20,
		lineWidthMinPixels: 2,
		getFillColor: (d: Feature<Geometry, GeoJsonProperties>) => {
			return vegetationFineBrewer(d.properties?.COD_VEG_n);
		},
		getLineColor: [160, 160, 180, 200],
		getPointRadius: 100,
		getLineWidth: 1
	}),
	new GeoJsonLayer({
		id: 'landcover_studyarea_4326',
		data: landuse as LayerData<Feature<Geometry, GeoJsonProperties>>,
		visible: true,
		pickable: true,
		stroked: true,
		filled: true,
		wireframe: true,
		lineWidth: 3,
		getFillColor: (data: any) => {
			// console.log(getCustomPolygonChromaFillColor(data.properties.c2019_niv2));
			// return [56, 145, 22];
			return getCustomPolygonChromaFillColor(data.properties.c2019_niv2);
		},
		getLineColor: [80, 80, 80],
		elevation: -2,
		/**
		 * fix types; deck.gl docs is sparse and won't help...
		 * read source code
		 */
		onViewportLoad: (tiles: any) => {
			tiles.forEach((tile: any) => {
				// data in world coordinates (WGS84)
				const dataInWGS84 = tile.dataInWGS84;
				if (dataInWGS84) {
					dataInWGS84.map((feature: any) => {
						const legendItem = {
							id: feature.properties.c2019_niv2 as number,
							rgbColors: getCustomPolygonChromaFillColor(feature.properties.c2019_niv2),
							label: feature.properties.lib19_niv2 as string
						};
						addLegendItem('landcover_studyarea_4326', legendItem);
					});
				}
			});
		}
	})
];

export const currentStyleStore = writable('Streets V10');

export const sources: Writable<Source[]> = writable([...INITIAL_SOURCES]);

export const layers: Writable<CoreLayer[]> = writable([...INITIAL_LAYERS].reverse());

export const legend: Writable<Record<string, LegendItem[]>> = writable({});

export const addLegendItem = (layerName: string, legendItem: LegendItem) => {
	legend.update((legend) => {
		const newLegend = { ...legend };
		const legendItems = newLegend[layerName];
		if (!legendItems) {
			newLegend[layerName] = [legendItem];
		}
		if (legendItems && legendItems.length > 0) {
			if (!getItemById(legendItem.id, legendItems)) {
				newLegend[layerName] = [...newLegend[layerName], legendItem];
			}
		}
		return newLegend;
	});
};

turf.meta.featureEach(landuse as FeatureCollection, function (currentFeature) {
	const legendItem = {
		id: currentFeature?.properties?.c2019_niv2 as number,
		rgbColors: getCustomPolygonChromaFillColor(currentFeature?.properties?.c2019_niv2),
		label: currentFeature?.properties?.lib19_niv2 as string
	};
	addLegendItem('landcover_studyarea_4326', legendItem);
});

export const setLayerVisibility = (layerId: string, visibility: boolean) => {
	layers.update((currentLayers) => {
		return currentLayers.map((layer) => {
			// console.log(layer);
			if (layer.id == layerId) {
				return layer.clone({ visible: visibility });
			}
			return layer;
		});
	});
};

export const setLayerOpacity = (layerId: string, opacity: number) => {
	layers.update((currentLayers) => {
		return currentLayers.map((layer) => {
			if (layer.id === layerId) {
				return layer.clone({ opacity: opacity });
			}
			return layer;
		});
	});
};

export const cloneLayers = () => {
	layers.update((layers) => {
		return layers.map((layer) => {
			return layer.clone({});
		});
	});
};
