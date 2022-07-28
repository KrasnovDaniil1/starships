import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('../views/Search.vue'),
    },
    {
        path: '/starships',
        name: 'starships',
        component: () => import('../views/Starships.vue'),
    },
    {
        path: '/starship/:id',
        name: 'detailstarship',
        component: () => import('../views/DetailStarship.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
