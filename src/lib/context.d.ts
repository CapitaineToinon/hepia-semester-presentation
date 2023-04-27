import type { Writable } from 'svelte/store';

export type Context = {
	darkMode: Writable<bool>;
	key: Writable<number>;
	recent: Writable<
		{
			name: string;
			isRecent: true;
			action: () => void;
		}[]
	>;
};
