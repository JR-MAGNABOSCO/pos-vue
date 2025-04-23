<template>
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2025 Elaine Trindade Consultoria em Saúde. Todos os direitos reservados.</p>
            <div class="footer-links">
                <a href="/privacidade">Política de Privacidade</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "AppFooter"
}
</script>

<style scoped>
.footer {
    background-color: #f3f3f3;
    color: #4d4c4c;
    padding: 20px;
    text-align: center;
}

.footer-links a {
    margin: 0 10px;
    color: #4d4c4c;
    text-decoration: none;
}

.footer-links a:hover {
    text-decoration: underline;
}
</style>