import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => {
            if (window.innerWidth<1200){
                return import( '../views/phonePage')
            } return import( '../views/Home.vue')
        }
    },
    {
        path: '/private-policy',
        name: 'private-policy',
        component: () => import( '../views/privatPolicy.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
