<template>
    <section class="content">
        <router-view></router-view>
    </section>
</template>

<script>
export default {
    name: 'AppContent',
}
</script>

<style scoped>
.content {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
}
</style>