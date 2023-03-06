import type {
  ScaleLinear,
  ScaleSequential,
  ScaleSequentialQuantile,
} from 'd3-scale'

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
