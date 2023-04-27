<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { slides } from '$lib/components/slides';
	import { getContext } from '$lib/context';
	import { slideTo } from '$lib/navigate';
	import Fuse from 'fuse.js';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const { darkMode, key, recent } = getContext();

	$: source = [
		...slides.map((slide, index) => ({
			index: index + 1,
			name: `${index + 1} - ${slide.name}`,
			action: () => slideTo(index),
		})),
		{
			name: 'Toggle theme',
			action: () => {
				$darkMode
					? $page.url.searchParams.delete('darkMode')
					: $page.url.searchParams.set('darkMode', 'true');

				$darkMode = !$darkMode;
				$key++;

				goto(
					`${$page.url.pathname}?${$page.url.searchParams.toString()}`
				);
			},
		},
		{ name: 'Reload', action: () => $key++ },
		{ name: 'Download as PDF', action: () => console.log('todo') },
	].map((s) => ({ ...s, isRecent: false }));

	const keys = [
		{
			name: 'name',
			weight: 0.3,
		},
		{
			name: 'index',
			weight: 0.7,
		},
	];

	$: fuse = new Fuse(source, {
		includeScore: false,
		keys,
	});

	let input = '';
	let selected = 0;

	$: matches =
		input.length > 0
			? fuse.search(input).map(({ item }) => item)
			: [
					...$recent,
					...source.filter(
						(s) => !$recent.find((r) => r.name === s.name)
					),
			  ];

	$: {
		if (matches.length) selected = 0;
	}

	/**
	 * @param {KeyboardEvent} e
	 */
	function onKeyDown(e) {
		switch (e.key) {
			case 'ArrowUp':
				if (selected === 0) return;
				selected--;
				break;
			case 'ArrowDown':
				if (selected === matches.length - 1) return;
				selected++;
				break;
			case 'Enter':
				action(selected);
				break;
		}
	}

	/**
	 * @param {number} index
	 */
	function action(index) {
		const match = matches[index];

		$recent = [
			{
				...match,
				isRecent: true,
			},
		];

		match.action();
		input = '';
		dispatch('action');
	}
</script>

<div class="flex flex-col gap-1 p-2 bg-stone-100">
	<input
		bind:value={input}
		on:keydown={onKeyDown}
		type="search"
		id="search"
		class="mt-1 w-full rounded-md shadow-sm sm:text-sm border-green-600 focus:border-green-600 focus:outline-green-600 focus:outline-offset-0 focus:outline-1 focus:ring-0"
	/>

	<ul class="flex flex-col gap-1">
		{#each matches as match, index}
			<li>
				<button
					class="w-full inline-block rounded-md border border-green-600 px-12 py-3 text-sm font-medium focus:outline-none focus:ring active:bg-green-600"
					class:bg-green-600={selected === index}
					class:bg-white={selected !== index}
					class:text-white={selected === index}
					on:click={() => action(index)}
					on:mouseenter={() => (selected = index)}
					on:focus={() => (selected = index)}
				>
					<span class="flex gap-1 items-center justify-center">
						{#if match.isRecent}
							<svg
								class="h-4"
								class:fill-current={selected === index}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								><path
									d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.25022 4 6.82447 5.38734 5.38451 7.50024L8 7.5V9.5H2V3.5H4L3.99989 5.99918C5.82434 3.57075 8.72873 2 12 2ZM13 7L12.9998 11.585L16.2426 14.8284L14.8284 16.2426L10.9998 12.413L11 7H13Z"
								/></svg
							>
						{/if}
						{match.name}
					</span>
				</button>
			</li>
		{/each}
	</ul>
</div>
