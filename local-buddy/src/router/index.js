import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: () => import('../views/Home.vue') },
        { path: '/register', name: 'register', component: () => import('../views/Register.vue') },
        { path: '/signin', name: 'signin', component: () => import('../views/SignIn.vue') },
        { path: '/feed', name: 'feed', component: () => import('../views/Feed.vue') },
    ]
});

export default router;
