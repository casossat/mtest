import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'
import Dashboard from '../views/erp/dashboard/Dashboard.vue'
import Report from '../views/erp/report/Report.vue'
import Principal from '../views/Principal.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/Login'
    },
    {
        path: '/Login',
        component: Login
    },
    {
        path: '/MasivianErp',
        component: Principal,
        meta: {
            breadcrumb: [
                { name: 'Masivian ERP' }
            ]
        },
        children: [{
                path: 'Dashboard',
                component: Dashboard,
                meta: {
                    breadcrumb: [
                        { name: 'Masivian ERP' },
                        { name: 'Dashboard' }
                    ]
                }
            },
            {
                path: 'Report',
                component: Report,
                meta: {
                    breadcrumb: [
                        { name: 'Masivian ERP' },
                        { name: 'Detalle Facturación' }
                    ]
                }
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router