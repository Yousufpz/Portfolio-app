import {
	type RouteRecordRaw,
	createRouter,
	createWebHistory
} from 'vue-router';

import { profile } from '@/config';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home.vue'),
		meta: {
			title: '',
			showCollab: true
		}
	},
	{
		path: '/projects',
		name: 'Projects',
		component: () => import('@/views/Projects.vue'),
		meta: {
			title: 'Projects',
			showCollab: true
		}
	},
	{
		path: '/tools',
		name: 'Tools',
		component: () => import('@/views/Tools.vue'),
		meta: {
			title: 'Tools',
			showCollab: true
		}
	},
	{
		path: '/experience',
		name: 'Experience',
		component: () => import('@/views/Experience.vue'),
		meta: {
			title: 'Experience',
			showCollab: true
		}
	},
	{
		path: '/thoughts',
		name: 'Thoughts',
		component: () => import('@/views/Thoughts.vue'),
		meta: {
			title: 'Thoughts',
			showCollab: true
		}
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import('@/views/Contact.vue'),
		meta: {
			title: 'Contact',
			showCollab: false
		}
	},
	{ path: '/:pathMatch(.*)*', redirect: '/' } // Catch-all route to prevent 404s
];

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth'
			};
		}
		if (savedPosition) {
			return savedPosition;
		}
		return { top: 0 };
	}
});

router.beforeEach((to, _, next) => {
	if (to.meta && to.meta.title) {
		document.title = `${profile.name} | ${String(to.name)}`;
	} else {
		document.title = profile.name;
	}

	if (!to.hash) {
		window.scrollTo(0, 0);
	}
	next();
});

export default router;
