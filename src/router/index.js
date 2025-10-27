import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../components/HomePage.vue"),
		},
		{
			path: '/scene',
			name: 'scene',
			component: () => import('../components/ScenePage.vue'),
		},
	],
});

export default router;
