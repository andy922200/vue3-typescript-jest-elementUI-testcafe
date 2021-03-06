import {
    createRouter, createWebHistory, RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/Home/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About/About.vue')
    },
    {
        path: '/demo',
        name: 'Demo',
        component: () => import('../views/Demo/Demo.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    linkExactActiveClass: 'active',
    routes
})

export default router
