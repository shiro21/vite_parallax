import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@views/Main.vue'),
    },
    {
        path: '/effect01',
        name: 'Effect01',
        component: () => import('@views/Effect01.vue'),
    },
    {
        path: '/effect02',
        name: 'Effect02',
        component: () => import('@views/Effect02.vue'),
    },
    {
        path: '/effect03',
        name: 'Effect03',
        component: () => import('@views/Effect03.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router