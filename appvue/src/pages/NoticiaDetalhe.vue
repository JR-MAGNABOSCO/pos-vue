<template>
    <div class="container mt-5">
        <div v-if="noticia" class="card shadow-lg mb-3">
            <img :src="noticia.imagem" class="rounded-5 mx-auto d-block py-3" alt="Imagem da notícia"
                style="width: 30rem; object-fit: cover;">
            <div class="card-body">
                <h2 class="card-title fw-bold">{{ noticia.titulo }}</h2>
                <p class="card-text text-muted">
                    <small class="badge bg-secondary">Publicado em {{ formatarData(noticia.created_at) }}</small>
                </p>
                <hr />
                <p class="card-text fs-5 lh-lg">{{ noticia.conteudo }}</p>
                <router-link to="/noticias" class="btn btn-outline-primary mt-3">
                    ← Voltar para lista
                </router-link>
            </div>
        </div>

        <div v-else class="alert alert-info text-center">
            Carregando notícia...
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';


const route = useRoute();
const noticia = ref({});

const carregarNoticia = async () => {
    try {
        const response = await axios.get(`/noticias/${route.params.id}`);
        noticia.value = response.data;
    } catch (error) {
        console.error('Erro ao carregar notícia:', error);
    }
};

const formatarData = (data) => {
    const d = new Date(data)
    return d.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    })
}


onMounted(carregarNoticia);
</script>
