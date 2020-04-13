<template>
  <v-app>
    <main style="app-main">
      <app-sidebar></app-sidebar>
      <app-header></app-header>
      <v-content>
        <router-view></router-view>
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
app-main {
  display: flex;
  flex-direction: row;
  .app-content {
    position: relative;
    margin-left: 300px;
    min-height: 100vh;
    background-color: #faa;
  }
}
</style>
