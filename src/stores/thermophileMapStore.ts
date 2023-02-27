import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { MVTLayer } from '@deck.gl/geo-layers/typed';
// import type { Layer } from '@deck.gl/core/typed';
import { getItemById } from '$lib/utils/array';
import { getCustomPolygonChromaFillColor } from '$lib/utils/colors';

export type LegendItem = {
	id: number;
	rgbColors: number[];
	label: string;
};

export type Source = {
	id: string;
	label: string;
	layerType: 'MVTLayer' | 'GeoJSONLayer';
	description: string;
};

const INITIAL_SOURCES: Source[] = [
	{
		id: 'landcover_studyarea_4326',
		label: 'Occupation du sol',
		layerType: 'MVTLayer',
		description: 'Lorem ipsum'
	},
	{
		id: 'patches_timon',
		label: 'Habitat (Timon lepidus)',
		layerType: 'MVTLayer',
		description: 'Lorem ipsum'
	},
	{
		id: 'thermo_nodes',
		label: 'Noeuds du graphe',
		layerType: 'MVTLayer',
		description: 'Lorem ipsum'
	},
	{
		id: 'thermo_edges',
		label: 'Liens du graphe',
		layerType: 'MVTLayer',
		description: 'Lorem ipsum'
	},
	{
		id: 'thermo_paths',
		label: 'Chemins moindre-coût',
		layerType: 'MVTLayer',
		description: 'Lorem ipsum'
	}
];

const INITIAL_LAYERS = [
	new MVTLayer({
		id: 'landcover_studyarea_4326',
		visible: true,
		pickable: true,
		data: 'http://localhost:3000/public.landcover_studyarea_4326.json',
		stroked: true,
		filled: true,
		wireframe: true,
		getFillColor: (data: any) => {
			// console.log(getCustomPolygonChromaFillColor(data.properties.c2019_niv2));
			// return [56, 145, 22];
			return getCustomPolygonChromaFillColor(data.properties.c2019_niv2);
		},
		getLineColor: [80, 80, 80],
		// getElevation: (d: any) => {
		// 	return d.properties.surface_m2 / 10;
		// },
		lineWidth: 3,
		/**
		 * fix types; deck.gl docs is sparse and won't help...
		 * read source code
		 */
		onViewportLoad: (tiles) => {
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
	}),
	new MVTLayer({
		id: 'patches_timon',
		visible: true,
		pickable: true,
		data: 'http://localhost:3000/public.thermo_patches_timon.json',
		stroked: true,
		filled: true,
		wireframe: true,
		getFillColor: (data: any) => {
			return [255, 255, 0];
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
	new MVTLayer({
		id: 'thermo_edges',
		visible: true,
		pickable: true,
		stroked: false,
		filled: true,
		extruded: true,
		data: 'http://localhost:3000/public.thermo_cost_500_edges.json',
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
		id: 'thermo_paths',
		visible: false,
		pickable: true,
		stroked: false,
		filled: true,
		extruded: true,
		data: 'http://localhost:3000/public.thermo_cost_500_paths.json',
		lineWidthScale: 10,
		lineWidthMinPixels: 2,
		getLineColor: [140, 0, 0],
		// getElevation: (d: any) => {
		// 	return d.properties.surface_m2 / 10;
		// },
		getLineWidth: 2
	}),
	new MVTLayer({
		id: 'thermo_nodes',
		visible: true,
		pickable: true,
		data: 'http://localhost:3000/public.thermo_cost_500_nodes.json',
		getPointRadius: (data: any) => {
			console.log(Math.log2(data.properties['_if_d16000_p0.05_beta1_graph_plan_cost_prune_500m']));
			return Math.pow(
				Math.log2(data.properties['_if_d16000_p0.05_beta1_graph_plan_cost_prune_500m']) / 10,
				4
			);
		},
		getColor: (data: any) => {
			console.log(data);
			return [178, 12, 45];
		},
		getElevation: 5
	})
];

export const currentStyleStore = writable('Streets V10');

export const sources: Writable<Source[]> = writable([...INITIAL_SOURCES]);

export const layers: Writable<MVTLayer[]> = writable([...INITIAL_LAYERS]);

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
	layers.update((currentLayers) => {
		return currentLayers.map((layer) => {
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
			if (layer.id == layerId) {
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
