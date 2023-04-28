<script>
	import SlideWrapper from '$lib/components/Slide.svelte';
	import { slides } from '$lib/components/slides';
	import { createContext } from '$lib/context';
	import { debounceFn } from '$lib/debounce';
	import Spotlight from '$lib/components/Spotlight.svelte';
	import { slideTo } from '$lib/navigate.js';
	import { fly } from 'svelte/transition';
	import Progress from '$lib/components/Progress.svelte';

	export let data;

	/**
	 * @type {HTMLDialogElement}
	 */
	let dialogRef;

	const { darkMode, key } = createContext({ darkMode: data.darkMode });

	$: step = data.step;
	$: {
		darkMode.set(data.darkMode);
	}

	/**
	 * @param {KeyboardEvent} e
	 */
	function onKeyDown(e) {
		console.log(e.key);
		switch (e.key) {
			case 'Escape':
				dialogRef.open && dialogRef.close();
				break;
			case 'k':
			case 'K':
				if (!e.metaKey) return;
				dialogRef.open ? dialogRef.close() : dialogRef.showModal();
				break;
			case 'r':
			case 'R':
				if (!e.metaKey) return;
				e.preventDefault();
				$key++;
				break;
			case ' ':
			case 'ArrowUp':
			case 'ArrowRight':
				if (dialogRef.open) return;
				if (step === slides.length - 1) return;
				slideTo(step + 1);
				return;
			case 'ArrowDown':
			case 'ArrowLeft':
				if (dialogRef.open) return;
				if (step === 0) return;
				slideTo(step - 1);
				return;
		}

		switch (e.key) {
			case 'ArrowUp':
			case 'ArrowRight':
				if (step === slides.length - 1) return;
				slideTo(step + 1);
				return;
			case 'ArrowDown':
			case 'ArrowLeft':
				if (step === 0) return;
				slideTo(step - 1);
				return;
		}
	}

	const onResize = debounceFn(() => $key++, 1000);
</script>

<svelte:window
	on:keydown={onKeyDown}
	on:resize={onResize}
/>

<dialog
	bind:this={dialogRef}
	class="shadow-xl rounded-md w-96 backdrop:backdrop-blur-sm p-0 my-0 mt-16"
>
	<Spotlight on:action={() => dialogRef.open && dialogRef.close()} />
</dialog>

<main
	class="h-[100vh] relative"
	class:bg-black={$darkMode}
>
	{#each slides as { name, chapter, component }, index}
		<SlideWrapper
			{step}
			{index}
			duration={data.speed}
		>
			<svelte:component this={component} />
		</SlideWrapper>
	{/each}

	{#if slides[step].chapter}
		<div
			transition:fly={{ x: -100, duration: data.speed }}
			class="fixed top-0 left-0 h-6 flex items-center justify-end p-10 text-lg"
			class:text-white={$darkMode}
		>
			<span>
				{slides[step].chapter} - {slides[step].name}
			</span>
		</div>
	{/if}

	<div
		class="fixed bottom-0 right-0 h-6 flex items-center justify-end p-10 text-lg"
		class:text-white={$darkMode}
	>
		<span>
			{step + 1} / {slides.length}
		</span>
	</div>

	<div class="fixed bottom-0 left-0 right-0 h-2 w-full">
		<Progress
			step={step + 1}
			length={slides.length}
			duration={data.speed}
		/>
	</div>
</main>
