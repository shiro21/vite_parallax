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
    {
        path: '/effect04',
        name: 'Effect04',
        component: () => import('@views/Effect04.vue'),
    },
    {
        path: '/effect05',
        name: 'Effect05',
        component: () => import('@views/Effect05.vue'),
    },
    {
        path: '/effect06',
        name: 'Effect06',
        component: () => import('@views/Effect06.vue'),
    },
    {
        path: '/effect07',
        name: 'Effect07',
        component: () => import('@views/Effect07.vue'),
    },
    {
        path: '/effect08',
        name: 'Effect08',
        component: () => import('@views/Effect08.vue'),
    },
    {
        path: '/effect09',
        name: 'Effect09',
        component: () => import('@views/Effect09.vue'),
    },
    {
        path: '/effect10',
        name: 'Effect10',
        component: () => import('@views/Effect10.vue'),
    },
    {
        path: '/effect11',
        name: 'Effect11',
        component: () => import('@views/Effect11.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router