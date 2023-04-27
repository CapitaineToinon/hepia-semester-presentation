import { page } from '$app/stores';
import { goto } from '$app/navigation';
import { get } from 'svelte/store';

/**
 * @param {number} next
 */
export function slideTo(next) {
	goto(`/${next}?${get(page).url.searchParams.toString()}`);
}
