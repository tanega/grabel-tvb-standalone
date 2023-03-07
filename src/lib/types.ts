import type {
  ScaleLinear,
  ScaleSequential,
  ScaleSequentialQuantile,
} from 'd3-scale'
import type {
  GeoJsonLayer,
  GeoJsonLayerProps,
} from '@deck.gl/layers/typed'

export type LegendOptionsType = {
  title: string
  tickSize?: number
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  ticks?: number
  tickFormat?: any
  tickValues?: any
}

export type ColorScaleType =
  | ScaleLinear<number, any>
  | ScaleSequentialQuantile<number, any>
  | ScaleSequential<number, any>

export type CoreLayer = GeoJsonLayer

export type Source = {
  id: string
  label: string
  layerType: 'MVTLayer' | 'GeoJsonLayer'
  description: string
  layerProps: GeoJsonLayerProps
  legendConfig?: any //WIP
}

export type LegendItem = {
  id: number
  rgbColors: number[]
  label: string
}
