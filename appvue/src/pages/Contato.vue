<script>
export default {
    name: 'PaginaContato'
}
</script>

<template>
    <div class="container mt-5">
        <div v-if="mensagem" :class="['alert', mensagem.startsWith('Erro') ? 'alert-danger' : 'alert-success']"
            role="alert">
            {{ mensagem }}
        </div>
        <h1>Fale Conosco</h1>
        <form @submit.prevent="enviarMensagem" class="mb-4">
            <div class="mb-3">
                <input type="text" v-model="form.nome" class="form-control" placeholder="Nome" required />
            </div>
            <div class="mb-3">
                <input type="email" v-model="form.email" class="form-control" placeholder="E-mail" required />
            </div>
            <div class="mb-3">
                <textarea v-model="form.mensagem" class="form-control" placeholder="Mensagem" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="carregando">
                <span v-if="carregando" class="spinner-border spinner-border-sm" role="status"
                    aria-hidden="true"></span>
                <span v-if="carregando"> Enviando...</span>
                <span v-else> Enviar </span>
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref({
    nome: '',
    email: '',
    mensagem: ''
})

const mensagem = ref('')
const carregando = ref(false)

const enviarMensagem = async () => {
    carregando.value = true
    mensagem.value = ''

    try {
        const response = await axios.post('/contato', form.value)
        mensagem.value = response.data.mensagem || 'Mensagem enviada com sucesso!'
        form.value = { nome: '', email: '', mensagem: '' }

        // Esconde a mensagem depois de 5 segundos
        setTimeout(() => {
            mensagem.value = ''
        }, 5000)

    } catch (error) {
        if (error.response?.data?.errors) {
            const erros = Object.values(error.response.data.errors).flat().join(' ')
            mensagem.value = 'Erro: ' + erros
        } else {
            mensagem.value = 'Erro ao enviar mensagem.'
        }

        // Esconde o erro depois de 5 segundos
        setTimeout(() => {
            mensagem.value = ''
        }, 5000)
    } finally {
        carregando.value = false
    }
}
</script>


<style scoped>
h1 {
    color: #3600cc;
}
</style>
