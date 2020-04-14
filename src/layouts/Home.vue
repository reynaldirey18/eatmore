<template>
  <v-app>
    <main class="app-main">
      <app-sidebar></app-sidebar>
      <app-header></app-header>
      <v-content class="app-content">
        <div class="ml-3 mt-3">
          <router-view></router-view>
        </div>
      </v-content>
    </main>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppSidebar from '@/components/AppSidebar'
export default {
  name: 'AppHomeLayout',
  components: {
    AppSidebar,
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  .app-content {
    position: relative;
    min-height: 100vh;
    background-color: #F4F5F6;
  }
}
</style>
