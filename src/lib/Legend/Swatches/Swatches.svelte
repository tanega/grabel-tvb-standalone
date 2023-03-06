<script lang="ts">
  import { scaleImplicit } from 'd3-scale'
  import SwatchItems from './SwatchItem.svelte'
  export let color: any
  export let options: any = {
    columns: null,
    format: null,
    unknown: null,
    swatchSize: 15,
    marginLeft: 0,
  }

  let {
    columns = null,
    format,
    unknown: formatUnknown,
    swatchSize = 15,
    swatchWidth = swatchSize,
    swatchHeight = swatchSize,
    marginLeft = 0,
  } = options

  let id = `-swatches-${Math.random().toString(16).slice(2)}`
  let unknown = formatUnknown == null ? undefined : color.unknown()
  let unknowns =
    unknown == null || unknown === scaleImplicit ? [] : [unknown]
  let domain = color.domain().concat(unknowns)
  if (format === undefined)
    format = (x: any) => (x === unknown ? formatUnknown : x)

  function entity(character: string): string {
    return `&#${character.charCodeAt(0).toString()};`
  }
</script>

{#if columns !== null}
  <div
    style={`display: flex; align-items: center; margin-left: ${marginLeft}px; min-height: 33px; font: 10px sans-serif;`}
  >
    <SwatchItems
      {format}
      {domain}
      {color}
      --swatch-size={swatchSize}
    />
  </div>
{/if}
