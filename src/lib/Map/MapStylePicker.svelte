<script lang="ts">
	export let currentStyle: string;
	import { currentStyleStore } from '../../stores/forestMapStore';

	const MAPBOX_DEFAULT_MAPSTYLES = [
		{ label: 'Streets V10', value: 'mapbox://styles/mapbox/streets-v10' },
		{ label: 'Outdoors V10', value: 'mapbox://styles/mapbox/outdoors-v10' },
		{ label: 'Light V9', value: 'mapbox://styles/mapbox/light-v9' },
		{ label: 'Dark V9', value: 'mapbox://styles/mapbox/dark-v9' },
		{ label: 'Satellite V9', value: 'mapbox://styles/mapbox/satellite-v9' },
		{
			label: 'Satellite Streets V10',
			value: 'mapbox://styles/mapbox/satellite-streets-v10'
		},
		{
			label: 'Navigation Preview Day V4',
			value: 'mapbox://styles/mapbox/navigation-preview-day-v4'
		},
		{
			label: 'Navitation Preview Night V4',
			value: 'mapbox://styles/mapbox/navigation-preview-night-v4'
		},
		{
			label: 'Navigation Guidance Day V4',
			value: 'mapbox://styles/mapbox/navigation-guidance-day-v4'
		},
		{
			label: 'Navigation Guidance Night V4',
			value: 'mapbox://styles/mapbox/navigation-guidance-night-v4'
		}
	];

	function changeCurrentStyleStore(style: string) {
		currentStyleStore.set(style);
	}

	$: currentStyle && changeCurrentStyleStore(currentStyle);
</script>

<select class="map-style-picker" bind:value={currentStyle} on:change>
	{#each MAPBOX_DEFAULT_MAPSTYLES as style (style.value)}
		<option value={style.value}>
			{style.label}
		</option>
	{/each}
</select>

<style>
	.map-style-picker {
		background-color: #fff;
		position: absolute;
		top: 20px;
		right: 20px;
		z-index: 100;
	}
</style>
