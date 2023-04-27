<script>
	import { cubicIn } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	export let step = 0;
	export let length = 0;
	export let duration = 250;

	const value = tweened(step, {
		duration,
		easing: cubicIn,
	});

	$: value.set(step);
</script>

<progress
	class="w-full bg-green-600"
	value={$value}
	max={length}
/>
