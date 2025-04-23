<template>
    <aside class="sidebar">
        <nav class="sidebar-menu">
            <a href="#" class="menu-item">
                <font-awesome-icon :icon="['fas', 'house']" />
                <span>Início</span>
            </a>
            <a href="#" class="menu-item">
                <font-awesome-icon :icon="['fas', 'user']" />
                <span>Sobre</span>
            </a>
            <a href="#" class="menu-item">
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <span>Contato</span>
            </a>
        </nav>
    </aside>
</template>

<script>
export default {
    name: 'AppSidebar',
}
</script>

<style scoped>
.sidebar {
    width: 250px;
    background-color: #f4f4f4;
    height: 100%;
}


.sidebar-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20%;
}

.menu-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #333;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    transition: color 0.3s;
}

.menu-item:hover {
    color: #007BFF;
}
</style>