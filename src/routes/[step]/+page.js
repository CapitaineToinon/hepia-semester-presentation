import { z } from 'zod';

export const load = ({ params }) => {
	const step = z.coerce.number().catch(0).parse(params.step);

	return {
		step,
	};
};
