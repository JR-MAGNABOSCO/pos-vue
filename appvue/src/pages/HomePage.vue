<!-- src/pages/Home.vue -->
<template>
    <div class="container-fluid">

        <!-- Carrossel de destaques -->
        <div id="carouselDestaques" class="carousel slide mb-5 rounded-3" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(noticia, index) in destaques"
                    :class="['carousel-item', { active: index === 0 }]" :key="noticia.id" data-bs-interval="5000"
                    data-bs-pause="hover">
                    <img :src="noticia.imagem" class="d-block w-100" alt="Imagem destaque">
                    <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                        <h5>{{ noticia.titulo }}</h5>
                        <p>{{ noticia.conteudo.slice(0, 100) }}...</p>
                        <router-link :to="`/noticias/${noticia.id}`" class="btn btn-primary btn-sm">Leia
                            mais</router-link>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselDestaques"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselDestaques"
                data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>

        <!-- Botões de categorias -->
        <div class="mb-4 d-flex flex-wrap gap-3">
            <button v-for="categoria in categorias" :key="categoria.id" class="btn btn-outline-primary btn-sm"
                @click="verCategoria(categoria.id)">
                {{ categoria.nome }} - ({{ categoria.noticias_count }})
            </button>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const destaques = ref([])
const categorias = ref(null)
const router = useRouter()

onMounted(async () => {
    const respDestaques = await axios.get('/noticias/destaques')
    destaques.value = respDestaques.data

    const respCategorias = await axios.get('/categorias')
    categorias.value = respCategorias.data
})

function verCategoria(id) {
    console.log('ID da categoria:', id)
    if (!id) return alert('ID da categoria inválido!')
    router.push(`/categorias/${id}`)
}
</script>

<style scoped>
#carouselDestaques {
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
}
</style>
