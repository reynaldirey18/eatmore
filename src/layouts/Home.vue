<template>
  <v-app>
    <app-sidebar></app-sidebar>
    <app-header></app-header>
    <v-content class="app-content">
      <div class="ml-0 mt-3">
        <v-breadcrumbs :items="breadcrumbItems">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
              :disabled="item.disabled"
              :exact="item.exact"
              :to="item.to">
              <span :class="!item.disabled && 'meteor-primary'">{{ item.text }}</span>
            </v-breadcrumbs-item>
          </template>
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </div>
      <div class="px-5 mb-10">
        <router-view></router-view>
      </div>
    </v-content>
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
        let currentBreadcrumbValue = null
        const breadcrumbComponent = breadcrumbArr.map(item => {
          if (item.name === currentBreadcrumbValue) {
            return false
          } else {
            currentBreadcrumbValue = item.name
            return {
              text: item.name,
              to: item.path,
              exact: true,
              disabled: this.$route.name === item.name
            }
          }
        })
        return breadcrumbComponent.filter(item => item)
      } else {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-content {
  position: relative;
  min-height: 100vh;
  background-color: #F4F5F6;
}
.bg-color{
  background-color: #E5E5E5 !important;
  min-height: 100vh;
}
</style>
