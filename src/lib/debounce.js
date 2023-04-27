/**
 * @param {Function} fn
 * @param {number} delay
 */
export const debounceFn = (fn, delay = 1000) => {
	/**
	 * @type {NodeJS.Timeout | undefined}
	 */
	let timer;

	return function () {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => fn(), delay);
	};
};
