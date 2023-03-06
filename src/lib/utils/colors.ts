import chroma from 'chroma-js'
import { scaleOrdinal, scalePow, scaleSequential } from 'd3-scale'
import { interpolateViridis, schemeYlGn } from 'd3-scale-chromatic'

export const chromaScale = chroma
  .scale(['yellow', '008ae5', 'beige', 'orange', 'purple'])
  .mode('lch')
  .colors(90)

export const chromaScale10 = chroma
  .scale(['teal', 'brown', 'blue'])
  .mode('lch')
  .colors(10)

export const getCustomPolygonChromaFillColor = (
  code: number
): any => {
  return chroma(chromaScale[code]).get('rgb')
}

export const getCustomPolygonChromaFillColor10 = (
  code: number
): any => {
  return chroma(chromaScale10[code]).get('rgb')
}

export const vegetationFineBrewer = (vegCode: number): any => {
  const brewer = chroma.scale('YlGn').domain([1, 0]).colors(11)
  return chroma(brewer[vegCode]).rgb()
}

export const areaColorScale = scalePow()
  .exponent(0.2)
  .domain([0, 456221])
  .range([
    [0, 60, 255],
    [0, 255, 40],
  ] as Iterable<number>)

export const areaColorScaleRefact = (domain: number[]) =>
  scalePow()
    .exponent(0.2)
    .domain(domain)
    .range([
      [0, 60, 255],
      [0, 255, 40],
    ] as Iterable<number>)

export const areaColorLinearScale = (domain: number[]) =>
  scaleSequential(domain, interpolateViridis)

export const ordinalColorScale = (
  domain: string[],
  rangeInterpolator: readonly string[]
) => scaleOrdinal(domain, rangeInterpolator)

export const vegFineOrdinalColorScale = ordinalColorScale(
  [
    'Herbacée',
    'Formation arbustive',
    'Canopée arbustive linéaire',
    'Petit arbre ou arbuste isolé',
    'Arbre isolé',
    "Formation d'arbres isolés",
    "Canopée d'arbres alignés",
    'Bois',
  ],
  schemeYlGn[8]
)

export const formatForDeck = (
  hexColor: string
): [number, number, number] => chroma(hexColor).rgb()
