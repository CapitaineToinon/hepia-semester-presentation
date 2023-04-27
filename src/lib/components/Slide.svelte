<script>
	import { tweened } from 'svelte/motion';
	import { cubicIn } from 'svelte/easing';
	import { getContext } from '$lib/context';

	/**
	 * @type {number}
	 */
	export let step;

	/**
	 * @type {number}
	 */
	export let index;

	/**
	 * @type {number}
	 */
	export let duration = 250;

	const { key } = getContext();

	$: isActive = step === index;

	$: x = tweened(0, {
		duration: duration,
		easing: cubicIn,
	});

	$: {
		x.set((step - index) * -100);
	}
</script>

{#key $key}
	<div
		class="fixed inset-0 transform translate-x-[--x] opacity-100"
		style:transition-duration={`${duration}ms`}
		style:--x={`${$x}%`}
		class:opacity-50={!isActive}
	>
		<slot />
	</div>
{/key}
