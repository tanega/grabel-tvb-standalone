/** @type {import('./$types').PageLoad} */
export function load({ params }: any) {
	return {
		data: {
			id: params.id,
			content: `Content for ${params.id} goes here`
		}
	};
}
