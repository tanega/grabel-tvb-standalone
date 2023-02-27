<script lang="ts">
	import {
		legend,
		type LegendItem,
		sources,
		setLayerVisibility,
		layers,
		setLayerOpacity
	} from '$stores/thermophileMapStore';
	import chroma from 'chroma-js';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@rgossiaux/svelte-headlessui';
	import { ChevronDownIcon, ChevronUpIcon } from '@rgossiaux/svelte-heroicons/outline';
	import Checkbox from '$lib/Core/Checkbox.svelte';
	import Slider from '$lib/Core/Slider.svelte';
	import { sort, ascend, prop } from 'ramda';
	import { getItemById } from '$lib/utils/array';

	/**
	 * To collapse all layers legend disclosure programmatically
	 * via event forwarding or external control with svelte/stores
	 */
	let isAllLegendDetailsCollapsed = false;

	const byId = ascend(prop('id'));
	const sortLegendItemsById = (
		layerName: string,
		legend: Record<string, LegendItem[]>
	): LegendItem[] => {
		if (legend[layerName]) {
			return sort(byId, legend[layerName]);
		} else {
			return [];
		}
	};

	const toggleLayerVisibility = (e: CustomEvent, layerId: string) => {
		setLayerVisibility(layerId, e.detail.checked as boolean);
	};
	const handleLayerOpacity = (e: CustomEvent, layerId: string) => {
		setLayerOpacity(layerId, e.detail.value as number);
	};
</script>

<aside class={`w-96 ${$$props.class}`} aria-label="Sidebar">
	<div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
		<!-- TODO: Reverse $sources as last deck.gl layers appears first -->
		{#each $sources as source (source.id)}
			<Disclosure let:open>
				<div class="mb-3 flex">
					<Checkbox
						class="mr-2"
						checked={getItemById(source.id, $layers)?.props?.visible}
						on:click={(e) => toggleLayerVisibility(e, source.id)}
					/>
					<div class="flex-1">{source.label}</div>
					<Slider
						class="flex-none"
						value={getItemById(source.id, $layers)?.props?.opacity}
						on:change={(e) => handleLayerOpacity(e, source.id)}
					/>
					<DisclosureButton>
						{#if open}
							<ChevronDownIcon class="text-gray-400 ml-2 h-4 w-4 group-hover:text-gray-500" />
						{:else}
							<ChevronUpIcon class="text-gray-400 ml-2 h-4 w-4 group-hover:text-gray-500" />
						{/if}
					</DisclosureButton>
				</div>
				{#if open && !isAllLegendDetailsCollapsed}
					<div>
						<DisclosurePanel static>
							<ul class="space-y-2 ml-6 last:mb-4">
								{#each sortLegendItemsById(source.id, $legend) as item}
									<li>
										<div class="flex flex-row justify-start items-center">
											<svg
												viewBox="0 0 9 9"
												xmlns="http://www.w3.org/2000/svg"
												class="w-4 h-4 flex-none"
											>
												<!-- Simple rect element -->
												<rect
													x="0"
													y="0"
													width="12"
													height="12"
													fill={chroma(item.rgbColors).hex()}
												/>
											</svg>
											<div class="flex-1 ml-2 text-sm text-slate-600">{item.label}</div>
										</div>
									</li>
								{/each}
							</ul>
						</DisclosurePanel>
					</div>
				{/if}
			</Disclosure>
		{/each}
	</div>
</aside>
