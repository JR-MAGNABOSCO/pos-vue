<template>
    <div class="container mt-4">
        <h2 class="mb-4">Lista de Notícias</h2>
        <div class="row">
            <div class="col-md-4" v-for="noticia in noticias" :key="noticia.id">
                <div class="card mb-3 shadow-sm">
                    <div class="card-body">
                        <img :src="noticia.imagem" class="img-thumbnail rounded-top mb-3" alt="Imagem da notícia"
                            style="max-height: 150px; object-fit: cover;">
                        <h5 class="card-title">{{ noticia.titulo }}</h5>
                        <p class="card-text">{{ resumo(noticia.conteudo) }}</p>
                        <router-link :to="{ name: 'noticia.detalhe', params: { id: noticia.id } }"
                            class="btn btn-primary btn-sm">
                            Ver mais
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const noticias = ref([])

const resumo = (texto, limite = 150) => {
    return texto.length > limite ? texto.slice(0, limite) + '...' : texto;
};


onMounted(async () => {
    const response = await axios.get('/noticias')
    noticias.value = response.data
})
</script>
<style scoped>
.card-title {
    color: #333;
}
</style>
