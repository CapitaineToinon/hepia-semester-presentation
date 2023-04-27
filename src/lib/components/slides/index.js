import Slide01 from './01.svelte';
import Slide02 from './02.svelte';
import Slide03 from './03.svelte';
import Slide04 from './04.svelte';
import Slide05 from './05_disclaimer.svelte';
import Slide06 from './06_musts.svelte';
import Slide07 from './07_nices.svelte';
import Slide99 from './99.svelte';

export const slides = [
	{ name: 'Cover', chapter: null, component: Slide01 },
	{ name: 'Plan', chapter: 'Introduction', component: Slide02 },
	{ name: 'Context', chapter: 'Introduction', component: Slide03 },
	{ name: 'The problem', chapter: 'Introduction', component: Slide04 },
	{ name: 'Disclaimer', chapter: 'Introduction', component: Slide05 },
	{ name: 'Must haves', chapter: 'Requirements', component: Slide06 },
	{ name: 'Nice to haves', chapter: 'Requirements', component: Slide07 },
	{ name: 'Thank You', chapter: 'The end', component: Slide99 },
];
