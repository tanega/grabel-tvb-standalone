import { find, propEq } from 'rambda';

export type ObjectWithId = {
	id: number | string;
};

export const getItemById = <Type extends ObjectWithId>(
	id: string | number,
	collection: Type[]
): Type | undefined => {
	return find(propEq('id', id), collection);
};
