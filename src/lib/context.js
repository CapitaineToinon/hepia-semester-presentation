import { getContext as _get, setContext as _set } from 'svelte';
import { writable } from 'svelte/store';

const symbol = Symbol('ctx');

/**
 * @param {Partial<{ darkMode?: boolean }>} intial
 */
export function createContext(intial) {
	/**
	 * @type {import('./context').Context}
	 */
	const ctx = {
		darkMode: writable(intial.darkMode ?? false),
		key: writable(0),
		recent: writable([]),
	};

	setContext(ctx);
	return ctx;
}

export function getContext() {
	/**
	 * @type {import('./context').Context)}
	 */
	const ctx = _get(symbol);
	return ctx;
}

/**
 * @param {import('./context').Context} ctx
 */
export function setContext(ctx) {
	return _set(symbol, ctx);
}
