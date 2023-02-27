import chroma from 'chroma-js';

export const chromaScale = chroma
	.scale(['yellow', '008ae5', 'beige', 'orange', 'purple'])
	.mode('lch')
	.colors(90);

export const chromaScale10 = chroma.scale(['teal', 'brown', 'blue']).mode('lch').colors(10);

export const getCustomPolygonChromaFillColor = (code: number): any => {
	return chroma(chromaScale[code]).get('rgb');
};

export const getCustomPolygonChromaFillColor10 = (code: number): any => {
	return chroma(chromaScale10[code]).get('rgb');
};

export const vegetationFineBrewer = (vegCode: number): any => {
	const brewer = chroma.scale('YlGn').domain([1, 0]).colors(11);
	return chroma(brewer[vegCode]).rgb();
};
