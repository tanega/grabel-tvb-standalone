import * as _ from 'lodash'
import * as turf from '@turf/turf'
import type {
  Feature,
  Geometry,
  GeoJsonProperties,
  GeometryCollection,
} from 'geojson'
import type { Properties } from '@turf/turf'

export const getMinMaxFromFeatureAttribute = (
  features: turf.helpers.GeometryCollection,
  key: string
): number[] => {
  return turf.propReduce(
    features,
    function (previousValue: number[], currentProperties) {
      //   console.log(previousValue)
      //   console.log(currentProperties)
      //   console.log(_.get(currentProperties, key))
      previousValue[0] =
        previousValue[0] === undefined ||
        _.get(currentProperties, key) < previousValue[0]
          ? _.get(currentProperties, key)
          : previousValue[0]
      previousValue[1] =
        previousValue[1] === undefined ||
        _.get(currentProperties, key) > previousValue[1]
          ? _.get(currentProperties, key)
          : previousValue[1]
      return previousValue
    },
    []
  )
}

/**
 * Mémo
 * 
let areaMinMax: number[] = []

fetch('/geojson/core/grabels_cadastre_parcelles_4326.json')
  .then(res => res.json())
  .then(data => {
    areaMinMax = getMinMaxFromFeatureAttribute(data, 'Shape_Area')
  })
console.log('areaMinMax :>> ', areaMinMax)

*/
