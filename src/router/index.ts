import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/editor/:prosjektId?',
            name: 'editor',
            component: () => import('../views/EditorView.vue'),
            //meta: { requiresAuth: true }
        },
        {
            path: '/editor/:prosjektId/settings',
            component: () => import('../views/SettingsLayout.vue'),
            children: [
                { path: 'general', component: () => import('../components/GeneralSettings.vue') },
                { path: 'security', component: () => import('../components/SecuritySettings.vue') },
                { path: '', redirect: to => `/editor/${to.params.prosjektId}/settings/general` },
            ]
        },


        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('../views/NotFoundView.vue')
        }
    ]
})


export default router


router.beforeEach((to, from) => {
    const erLoggetInn = !!localStorage.getItem('code-collab-user')

    if (to.meta.requiresAuth && !erLoggetInn) {
        // Blokker navigasjon, send til login
        return { name: 'home' }
    }
})