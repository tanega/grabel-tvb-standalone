import { find, propEq } from 'rambda'

export type ObjectWithId = {
  id: number | string
}

export const getItemById = <Type extends ObjectWithId>(
  id: string | number,
  collection: Type[]
): Type | undefined => {
  if (collection && id) {
    return find(propEq('id', id), collection)
  } else {
    return undefined
  }
}
