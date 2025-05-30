<template>
    <div class="container mt-4">
        <h2 class="mb-4">Cadastrar Notícia</h2>

        <div v-if="mensagem" class="alert" :class="mensagemClasse" role="alert">
            {{ mensagem }}
        </div>

        <form @submit.prevent="enviar" class="mb-4">
            <div class="mb-3">
                <label class="form-label fw-bold">Título</label>
                <input v-model="titulo" type="text" class="form-control" required />
            </div>

            <div class="mb-3">
                <label class="form-label fw-bold">Conteúdo</label>
                <textarea v-model="conteudo" class="form-control" rows="5" required></textarea>
            </div>

            <div class="mb-3">
                <label class="form-label fw-bold">URL da Imagem de Capa</label>
                <input v-model="imagem" type="url" class="form-control" placeholder="https://exemplo.com/imagem.jpg" />
            </div>

            <button type="submit" class="btn btn-success">Salvar</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const titulo = ref('')
const conteudo = ref('')
const imagem = ref('')
const mensagem = ref('')
const mensagemClasse = ref('')

const enviar = async () => {
    try {
        const response = await axios.post('/noticias', {
            titulo: titulo.value,
            conteudo: conteudo.value,
            imagem: imagem.value,
        })

        mensagem.value = response.data.message
        mensagemClasse.value = 'alert-success'

        titulo.value = ''
        conteudo.value = ''
        imagem.value = ''
    } catch (error) {
        console.error(error)
        mensagem.value = 'Erro ao enviar notícia.'
        mensagemClasse.value = 'alert-danger'
    }
}
</script>
