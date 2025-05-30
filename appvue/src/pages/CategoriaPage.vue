<template>
    <div>
        <h2>Categoria: {{ categoria?.nome }}</h2>

        <div v-if="categoria?.noticias?.length">
            <div v-for="noticia in categoria.noticias" :key="noticia.id" class="card">
                <h3>{{ noticia.titulo }}</h3>
                <p>{{ noticia.conteudo }}</p>
            </div>
        </div>
        <div v-else>
            <p>Nenhuma notícia encontrada.</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const categoria = ref(null)
const route = useRoute()

onMounted(async () => {
    const id = route.params.id
    const response = await axios.get(`/categorias/${id}`)
    categoria.value = response.data
})
</script>

<style scoped>
.card {
    border: 1px solid #ddd;
    padding: 16px;
    margin-bottom: 12px;
}
</style>
