import SlideCover from './cover.svelte';
import SlidePlan from './plan.svelte';
import SlideStateOfWeb1 from './stateofweb_1.svelte';
import SlideStateOfWeb2 from './stateofweb_2.svelte';
import SlideProblem from './theproblem.svelte';
import SlideDisclaimer from './disclaimer.svelte';
import SlideMusts from './musts.svelte';
import SlideNiceToHaves from './nices.svelte';
import SlideMeta from './metaframeworks.svelte';
import SlideTheEnd from './theend.svelte';
import SlidePrisma from './prisma.svelte';
import SlideDrizzle from './drizzle.svelte';
import SlideKysley from './kysley.svelte';
import SlideDbWinner from './dbwin.svelte';
import SlideNuxt from './nuxt.svelte';
import SlideRemix from './remix.svelte';
import SlideSveltekit from './sveltekit.svelte';
import SlideQwik from './qwik.svelte';
import SlideTrpc from './trpc.svelte';
// import SlideTrpcVideo from './trpcExample.svelte';
import SlideAndMore from './andmore.svelte';
import SlideFlex from './flex.svelte';
import SlideFinalStack from './finalstack.svelte';
import SlideFurther from './further.svelte';
import SlidePlaywright from './playwright.svelte';
import SlideGithub from './github.svelte';
import SlideFinalWords from './finalwords.svelte';

export const slides = [
	{ name: 'Cover', chapter: null, component: SlideCover },
	{ name: 'Plan', chapter: 'Introduction', component: SlidePlan },
	{
		name: 'What people think',
		chapter: 'The Problem',
		component: SlideStateOfWeb1,
	},
	{
		name: 'What is actually is',
		chapter: 'The Problem',
		component: SlideStateOfWeb2,
	},
	{ name: 'Coherence', chapter: 'The Problem', component: SlideProblem },
	{ name: 'Disclaimer', chapter: 'Requirements', component: SlideDisclaimer },
	{ name: 'Meta-frameworks', chapter: 'Requirements', component: SlideMeta },
	{ name: 'Must haves', chapter: 'Requirements', component: SlideMusts },
	{
		name: 'Nice to haves',
		chapter: 'Requirements',
		component: SlideNiceToHaves,
	},
	{ name: 'Goal', chapter: 'Requirements', component: SlideFlex },
	// { name: 'Example', chapter: 'Requirements', component: SlideTrpcVideo },
	{ name: 'Prisma', chapter: 'Solutions', component: SlidePrisma },
	{ name: 'Drizzle', chapter: 'Solutions', component: SlideDrizzle },
	{ name: 'Kysley', chapter: 'Solutions', component: SlideKysley },
	{ name: 'Database Choice', chapter: 'Solutions', component: SlideDbWinner },
	{ name: 'Nuxt', chapter: 'Solutions', component: SlideNuxt },
	{ name: 'Remix', chapter: 'Solutions', component: SlideRemix },
	{ name: 'Sveltekit', chapter: 'Solutions', component: SlideSveltekit },
	{ name: 'Qwik', chapter: 'Solutions', component: SlideQwik },
	{ name: 'tRPC', chapter: 'Solutions', component: SlideTrpc },
	{ name: 'And many more', chapter: 'Solutions', component: SlideAndMore },
	{ name: 'Final stack', chapter: 'Solutions', component: SlideFinalStack },
	{ name: 'Playwright', chapter: 'Solutions', component: SlidePlaywright },
	{ name: 'Github CI', chapter: 'Solutions', component: SlideGithub },
	{ name: 'Going further', chapter: 'Conclusion', component: SlideFurther },
	{ name: 'Final words', chapter: 'Conclusion', component: SlideFinalWords },
	{ name: 'Thank you', chapter: 'The end', component: SlideTheEnd },
];
