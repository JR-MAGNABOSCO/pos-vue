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
    <nav aria-label="Navegação de página">
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: paginaAtual === 1 }">
                <button class="page-link" @click="mudarPagina(paginaAtual - 1)" :disabled="paginaAtual === 1">
                    Anterior
                </button>
            </li>

            <li v-for="n in totalPaginas" :key="n" class="page-item" :class="{ active: n === paginaAtual }">
                <button class="page-link" @click="mudarPagina(n)">
                    {{ n }}
                </button>
            </li>

            <li class="page-item" :class="{ disabled: paginaAtual === totalPaginas }">
                <button class="page-link" @click="mudarPagina(paginaAtual + 1)"
                    :disabled="paginaAtual === totalPaginas">
                    Próxima
                </button>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const noticias = ref([])
const paginaAtual = ref(1)
const totalPaginas = ref(1)

const carregarNoticias = async (pagina = 1) => {
    try {
        const response = await axios.get(`/noticias?page=${pagina}`)
        noticias.value = response.data.data
        paginaAtual.value = response.data.current_page
        totalPaginas.value = response.data.last_page
    } catch (error) {
        console.error('Erro ao buscar notícias:', error)
    }
}

const mudarPagina = (pagina) => {
    if (pagina >= 1 && pagina <= totalPaginas.value) {
        carregarNoticias(pagina)
    }
}

const resumo = (texto, limite = 150) => {
    return texto.length > limite ? texto.slice(0, limite) + '...' : texto
}

onMounted(() => {
    carregarNoticias()
})
</script>
<style scoped>
.card-title {
    color: #333;
}
</style>
