import chroma from 'chroma-js'
import {
  scaleOrdinal,
  scalePow,
  scaleQuantize,
  scaleSequential,
  scaleSequentialQuantile,
  scaleSequentialSqrt,
} from 'd3-scale'
import {
  interpolatePuRd,
  interpolateViridis,
  schemePurples,
  schemeYlGn,
} from 'd3-scale-chromatic'

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

export const colorQuantize = (
  domain: number[],
  interpolator = schemePurples[5]
) =>
  // scaleSequentialQuantile(domain, interpolateViridis)
  scaleQuantize(domain, interpolator)

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
  chroma.scale(['#fafa6e', '#2A4858']).mode('lch').colors(8)
)

export const landuseOrdinalColorScale = ordinalColorScale(
  [
    'Espaces verts (parcs, jardins)',
    "Zones bâties à prédominance d'habitat",
    'Infrastructures routières et ferroviaires',
    'Grands équipements urbains',
    "Zones d'activité économique",
    'Conifères dominants',
    'Equipements sportifs et de loisirs',
    'Terres arables non inondées et espaces prairiaux agricoles',
    'Landes et fourrés',
    'Cultures permanentes',
    'Extraction de matériaux, décharges, chantiers',
    'Feuillus dominants',
    'Végétations sclérophylles',
    'Espaces boisés en mutation',
    'Boisements linéaires',
    'Eaux continentales ou littorales',
    'Peuplements indéterminés',
    'Pelouses et steppes',
    "Cours et voies d'eau",
  ],
  [
    ...chroma.scale(['#6b6b6b', '#151f23']).mode('lch').colors(3),
    '#1842db',
    ...chroma.scale(['#f2d91f', '#bc291c']).mode('lch').colors(15),
  ]
)

export const formatForDeck = (
  hexColor: string
): [number, number, number] => chroma(hexColor).rgb()
