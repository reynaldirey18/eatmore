<template>
  <v-app>
    <main class="app-main">
      <app-sidebar></app-sidebar>
      <app-header></app-header>
      <v-content class="app-content">
        <div class="ml-0 mt-3">
          <v-breadcrumbs :items="breadcrumbItems">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </div>
        <div class="px-5 mb-10">
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
  },
  computed: {
    breadcrumbItems () {
      const isLength = this.$route.matched.length > 0
      if (isLength) {
        const breadcrumbArr = [...this.$route.matched]
        breadcrumbArr.shift()
        return breadcrumbArr.map(item => {
          return {
            text: item.name,
            to: item.path,
            exact: true,
            disabled: this.$route.name === item.name
          }
        })
      } else {
        return []
      }
    }
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
.bg-color{
  background-color: #E5E5E5 !important;
  min-height: 100vh;
}
</style>
