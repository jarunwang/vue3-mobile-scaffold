import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Index from './views/Index.vue';

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/demo', // demo
        name: 'demo',
        component: () => import(/* webpackChunkName: "demo" */ './views/Demo/Demo.vue'),
    },
]

export default createRouter({
    // 指定路由的模式,此处使用的是hash模式
    history: createWebHistory(process.env.BASE_URL),
    // 路由地址
    routes: routes,
})