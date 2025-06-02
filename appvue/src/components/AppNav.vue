<template>
    <nav class="nav-bar">
        <img alt="Consultoria logo" src="@/assets/nova_logomarca_azul.png" class="img-logo" />
        <h1 class="titulo">Elaine Trindade Consultoria</h1>
        <ul class="nav-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/noticias">Notícias</router-link></li>
            <li><router-link to="/noticias/nova">Nova Notícia</router-link></li>
            <li><router-link to="/contato">Contato</router-link></li>
            <li><router-link to="/sobre">Sobre</router-link></li>
        </ul>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Pesquisar..." aria-label="Search">
            <button class="btn btn-outline-primary" type="submit">Pesquisar</button>
        </form>
    </nav>
</template>

<script>
export default {
    name: 'AppNav'
}
</script>

<style scoped>
.nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f3f3f3;
    padding: 0px 20px;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.img-logo {
    height: 100px;
    ;
    margin-right: 20px;
}

.titulo {
    font-size: 1.5rem;
    color: #333;
}

.nav-links {
    display: flex;
    gap: 1rem;
    list-style: none;
}

/* Estilo da lista de navegação */
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
}

/* Estilo dos itens da lista */
li {
    margin: 0 15px;
    position: relative;
}

/* Estilo dos links */
a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease;
}

/* Efeito de hover no link */
li:hover a {
    color: #1f73e8;
    /* Azul para destaque */
}

/* Efeito de underline animado */
li::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #1f73e8;
    transition: width 0.3s;
}

li:hover::after {
    width: 100%;
}
</style>