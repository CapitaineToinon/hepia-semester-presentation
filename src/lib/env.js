import { z } from 'zod';

const schema = z.object({
	DEV: z.coerce.boolean().default(false).catch(false),
});

const env = schema.parse(import.meta.env);

export const DEV = env.DEV;
