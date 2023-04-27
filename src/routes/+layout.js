import { z } from 'zod';

const searchParams = z.object({
	darkMode: z.coerce.boolean().default(false).catch(false).optional(),
	speed: z.coerce.number().default(0).catch(0).optional(),
});

export const load = ({ url }) => {
	return searchParams.parse({
		darkMode: url.searchParams.get('darkMode'),
		speed: url.searchParams.get('speed'),
	});
};
