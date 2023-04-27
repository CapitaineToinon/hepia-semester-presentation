// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		interface Context {
			darkMode: Writable<bool>;
			key: Writable<number>;
			recent: Writable<
				{
					name: string;
					isRecent: true;
					action: () => void;
				}[]
			>;
		}
	}
}

export {};
