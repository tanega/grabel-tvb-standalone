import { scaleSqrt } from 'd3-scale'

/**
 *
 */
export const circleRadius = (
  domain: [number, number],
  value: number
) => {
  const scale = scaleSqrt() // instead of scaleLinear()
    .domain(domain)
    .range([0, 1000])
  return scale(value)
}

export const elevationScale = (
  domain: [number, number],
  value: number
) => {
  const scale = scaleSqrt() // instead of scaleLinear()
    .domain(domain)
    .range([0, 1])
  console.log(value, scale(value))
  return scale(value)
}
