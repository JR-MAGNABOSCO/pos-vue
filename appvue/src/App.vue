<template>
  <div id="app">
    <AppNav />
    <AppView>
      <AppSidebar />
      <AppContent />
    </AppView>
    <AppFooter />
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue'
import AppView from './components/AppView.vue'
import AppSidebar from './components/AppSidebar.vue'
import AppContent from './components/AppContent.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'AppRoot',
  components: {
    AppNav,
    AppView,
    AppSidebar,
    AppContent,
    AppFooter
  }
}
</script>

<style scoped>
.app-view {
  display: flex;
  flex: 1;
}

.app-body {
  display: flex;
  flex: 1;
  height: 100%;
}
</style>