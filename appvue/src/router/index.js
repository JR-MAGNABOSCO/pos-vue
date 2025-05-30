import { createRouter, createWebHistory } from 'vue-router'
import Noticias from '../views/NoticiasView.vue'
import NoticiasForm from '../pages/NoticiasForm.vue'
import HomePage from '../pages/HomePage.vue'
import Sobre from '../pages/sobre.vue'
import Contato from '../pages/Contato.vue'
import NoticiaDetalhe from '@/pages/NoticiaDetalhe.vue';
import CategoriaPage from '@/pages/CategoriaPage.vue'

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/sobre', name: 'Sobre', component: Sobre },
    { path: '/contato', name: 'Contato', component: Contato },
    { path: '/noticias', name: 'Noticias', component: Noticias },
    { path: '/noticias/:id', name: 'noticia.detalhe', component: NoticiaDetalhe },
    { path: '/noticias/nova', name: 'NoticiasForm', component: NoticiasForm },
    { path: '/categorias/:id', name: 'categoria', component: CategoriaPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
