import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { MVTLayer } from '@deck.gl/geo-layers/typed';
import { GeoJsonLayer } from '@deck.gl/layers/typed';
import type { Feature, Geometry, GeoJsonProperties } from 'geojson';
import { merge } from 'rambda';
// import cadastreData from "./grabels_cadastre_parcelles_4326.geojson"

// import type { Layer } from '@deck.gl/core/typed';
import { getItemById } from '$lib/utils/array';
import { getCustomPolygonChromaFillColor, vegetationFineBrewer } from '$lib/utils/colors';

export type LegendItem = {
	id: number;
	rgbColors: number[];
	label: string;
};

export type CoreLayer = MVTLayer | GeoJsonLayer;

export type Source = {
	id: string;
	label: string;
	layerType: 'MVTLayer' | 'GeoJsonLayer';
	description: string;
};

const INITIAL_SOURCES: Source[] = [
	{
		id: 'nodes',
		label: 'Noeuds du graphe',
		layerType: 'MVTLayer',
		description: 'Lorem ipsum'
	},
	{
		id: 'edges',
		label: 'Liens du graphe',
		layerType: 'MVTLayer',
		description: 'Lorem ipsum'
	},
	{
		id: 'paths',
		label: 'Chemins moindre-coût',
		layerType: 'MVTLayer',
		description: 'Lorem ipsum'
	},
	{
		id: 'public_patches_sciurus',
		label: 'Habitat (Sciurus vulgaris)',
		layerType: 'MVTLayer',
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

const layerDefault = {
	visible: true,
	pickable: true,
	stroked: true,
	filled: true,
	wireframe: true,
	lineWidth: 3
};

const INITIAL_LAYERS = [
	new MVTLayer({
		id: 'edges',
		stroked: false,
		filled: true,
		extruded: true,
		visible: true,
		data: 'http://localhost:3000/public.forest_initial_edges.json',
		lineWidthScale: 20,
		lineWidthMinPixels: 2,
		getFillColor: [160, 160, 180, 200],
		getLineColor: [80, 80, 80],
		// getElevation: (d: any) => {
		// 	return d.properties.surface_m2 / 10;
		// },
		getLineWidth: 2
	}),
	new MVTLayer({
		id: 'paths',
		stroked: false,
		filled: true,
		visible: true,
		extruded: true,
		data: 'http://localhost:3000/public.forest_initial_paths.json',
		lineWidthScale: 10,
		lineWidthMinPixels: 2,
		getLineColor: [140, 0, 0],
		// getElevation: (d: any) => {
		// 	return d.properties.surface_m2 / 10;
		// },
		getLineWidth: 2
	}),
	new MVTLayer({
		id: 'nodes',
		pickable: true,
		visible: true,
		data: 'http://localhost:3000/public.forest_initial_nodes.json',
		getPointRadius: (data: any) => {
			// console.log(data.properties);
			// console.log(Math.log2(data.properties['_if_d16000_p0.05_beta1_graph_plan_cost_prune_500m']));
			return 24;
			// return Math.pow(
			// 	Math.log2(data.properties['_if_d16000_p0.05_beta1_graph_plan_cost_prune_500m']) / 10,
			// 	4
			// );
		},
		getColor: (data: any) => {
			console.log(data);
			return [178, 12, 45];
		},
		getElevation: 5
	}),
	new MVTLayer({
		id: 'public_patches_sciurus',
		visible: true,
		pickable: true,
		data: 'http://localhost:3000/public.public_patches_sciurus.json',
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
		data: '/grabels_cadastre_parcelles_4326.geojson',
		visible: true,
		pickable: true,
		stroked: false,
		filled: true,
		pointType: 'circle',
		lineWidthScale: 20,
		lineWidthMinPixels: 2,
		getFillColor: [160, 160, 180, 200],
		getLineColor: [255, 255, 180, 200],
		getPointRadius: 100,
		getLineWidth: 1
	}),
	new GeoJsonLayer({
		id: 'vegetation-fine-geojson',
		data: '/vegetation_fine_grabels_light.geojson',
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
	new MVTLayer(
		merge(layerDefault, {
			id: 'landcover_studyarea_4326',
			data: 'http://localhost:3000/public.landcover_studyarea_4326.json',
			getFillColor: (data: any) => {
				// console.log(getCustomPolygonChromaFillColor(data.properties.c2019_niv2));
				// return [56, 145, 22];
				return getCustomPolygonChromaFillColor(data.properties.c2019_niv2);
			},
			getLineColor: [80, 80, 80],
			elevation: -2,
			lineWidth: 3,
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
	)
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

export const setLayerVisibility = (layerId: string, visibility: boolean) => {
	console.log(layerId, visibility);
	layers.update((currentLayers) => {
		return currentLayers.map((layer) => {
			console.log(layer);
			if (layer.id == layerId) {
				console.log(layer.id, layerId);
				console.log(layer.id == layerId);
				return layer.clone({ visible: visibility });
			}
			return layer;
		});
	});
};

export const setLayerOpacity = (layerId: string, opacity: number) => {
	layers.update((currentLayers) => {
		return currentLayers.map((layer) => {
			console.log(layer);
			if (layer.id === layerId) {
				console.log(layer.id, layerId);
				console.log(layer.id == layerId);
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
