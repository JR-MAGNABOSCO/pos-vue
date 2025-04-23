<template>
  <div class="app-view">
    <AppSidebar />
    <AppContent />
  </div>
</template>

<script>
import AppSidebar from './AppSidebar.vue'
import AppContent from './AppContent.vue'

export default {
  name: 'AppView',
  components: {
    AppSidebar,
    AppContent
  }
}
</script>

<style scoped>
.app-view {
  display: flex;
  flex: 1;
  height: 100%;
}
</style>
