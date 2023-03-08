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
    'Infrastructures routières et ferroviaires',
    'Extraction de matériaux, décharges, chantiers',
    'Grands équipements urbains',
    "Zones d'activité économique",
    "Zones bâties à prédominance d'habitat",
    'Espaces verts (parcs, jardins)',
    'Equipements sportifs et de loisirs',
    'Terres arables non inondées et espaces prairiaux agricoles',
    'Cultures permanentes',
    'Conifères dominants',
    'Feuillus dominants',
    'Espaces boisés en mutation',
    'Peuplements indéterminés',
    'Boisements linéaires',
    'Végétations sclérophylles',
    'Landes et fourrés',
    'Pelouses et steppes',
    'Eaux continentales ou littorales',
    "Cours et voies d'eau",
  ],
  [
    '#787878',
    '#D2D2D2',
    '#BC0000',
    '#EB6569',
    '#FD4B1F',
    '#00FF00',
    '#24BF4C',
    '#FEFFB6',
    '#E46200',
    '#A96424',
    '#007E83',
    '#006600',
    '#008500',
    '#006600',
    '#E1CC00',
    '#EBEE00',
    '#ABE27A',
    '#00A7AD',
    '#007FFF',
  ]
)

export const formatForDeck = (
  hexColor: string
): [number, number, number] => chroma(hexColor).rgb()
