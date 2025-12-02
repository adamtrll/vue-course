import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import { useAuthStore } from '@/store/auth'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/pages/AboutPage.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/pages/auth/LoginPage.vue'),
        },
        {
            path: '/user/:id',
            name: 'user',
            component: () => import('@/pages/UserPage.vue'),
        },
        {
            path: '/account',
            component: () => import('@/layouts/Settings.vue'),
            children: [
                {
                    path: '',
                    name: 'account.profile',
                    component: () => import('@/pages/account/ProfilePage.vue'),
                    meta: {
                        requiresAuth: true,
                    },
                },
                {
                    path: 'password',
                    name: 'account.password',
                    component: () => import('@/pages/account/PasswordPage.vue'),
                    meta: {
                        requiresAuth: true,
                    },
                },
            ],
        },
        {
            path: '/:catchAll(.*)*',
            name: '404',
            component: () => import('@/pages/NotFoundPage.vue'),
        },
    ],
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()

    if (to.meta?.requiresAuth && !authStore.isLoggedIn) {
        // store the intended destination so that after login the user can be redirected to the intended page
        authStore.setIntendedPage(to)

        next({ name: 'login' })
    } else {
        next()
    }
})

export default router
