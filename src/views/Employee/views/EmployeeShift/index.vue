<template>
  <div>
    <div class="mt-4 mb-5 d-flex flex-row justify-space-between">
      <h1 class="app-title">Employee Shift</h1>
    </div>

    <v-card outlined>
      <v-toolbar class="" dense short flat color="white">
        <v-toolbar-title class="app-subtitle app-toolbar-menu-title">Menu</v-toolbar-title>
      </v-toolbar>
      <v-tabs hide-slider background-color="#FBFBFB" color="dark" vertical>
        <v-tab
          v-for="(tabItem, i) in menuItems"
          :key="i"
          @click="tabActive = i"
          class="app-toolbar-menu-tabs"
        >
          <v-list-item two-line class="py-1" :style="tabActive === i  ? 'background-color: #F2F2F2' : ''">
              <v-list-item-content>
                  <v-list-item-title class="text-start text-capitalize app-title-small">{{tabItem.title}}</v-list-item-title>
                  <v-list-item-subtitle class="text-start text-capitalize app-subtitle-small">{{tabItem.subtitle}}</v-list-item-subtitle>
              </v-list-item-content>
          </v-list-item>
        </v-tab>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Employee Shift',
  data () {
    return {
      tabActive: 0,
      menuItems: [
        {
          title: 'Employee Shift',
          subtitle: 'Set your employee shift'
        },
        {
          title: 'Shift Period',
          subtitle: 'Set your shift period'
        },
        {
          title: 'Employee Schedule',
          subtitle: 'Set your employee schedule'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
