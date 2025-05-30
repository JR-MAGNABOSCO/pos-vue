<script>
export default {
    name: 'PaginaSobre'
}
</script>

<template>
    <div class="container mt-5">
        <h1>{{ titulo }}</h1>
        <p class="mt-3">{{ conteudo }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const titulo = ref('')
const conteudo = ref('')

onMounted(async () => {
    const response = await axios.get('/sobre')
    titulo.value = response.data.titulo
    conteudo.value = response.data.conteudo
})
</script>

<style scoped>
h1 {
    color: #0066cc;
}
</style>
