import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Noticias from '../views/Noticias.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/noticias', name: 'Noticias', component: Noticias }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
