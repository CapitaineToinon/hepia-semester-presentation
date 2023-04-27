import Slide01 from './01.svelte';
import Slide02 from './02.svelte';
import Slide03 from './03.svelte';
import Slide04 from './04.svelte';

export const slides = [
	{ name: 'Cover', chapter: null, component: Slide01 },
	{ name: 'Plan', chapter: 'Introduction', component: Slide02 },
	{ name: 'Context', chapter: 'Introduction', component: Slide03 },
	{ name: 'The problem', chapter: 'Introduction', component: Slide04 },
];
