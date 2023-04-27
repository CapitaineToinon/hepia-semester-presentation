<script>
	import { onMount } from 'svelte';
	import { getContext } from '$lib/context';

	/**
	 * @type {string}
	 */
	export let url;

	/**
	 * @type {HTMLIFrameElement}
	 */
	let ref;

	const { darkMode } = getContext();

	onMount(() => {
		ref.addEventListener('mousemove', () => {
			console.log('keydown in iframe');
		});
	});
</script>

<iframe
	bind:this={ref}
	title="slide example"
	src={`${url}?darkMode=${$darkMode}`}
	width="100%"
	height="100%"
	class="pointer-events-none relative"
/>

<style>
	iframe::after {
		content: 'loading...';
		inset: 0;
		position: absolute;
	}
</style>
