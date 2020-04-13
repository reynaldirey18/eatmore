<template>
  <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      app
    >
      <v-list dense>
        <v-list-item style="border-bottom: 1px solid rgba(0, 0, 0, 0.05);" class="pb-2">
          <v-list-item-icon>
            <v-img
              :src="eatmoreLogo"
              height="21"
            />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-btn @click="mini = !mini" fab x-small elevation="0" outlined color="#DADADA">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
        </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppSidebar',
  data () {
    return {
      drawer: true,
      mini: false
    }
  },
  computed: {
    eatmoreLogo () {
      return require('@/assets/img/Eatmore logo-01 1.png')
    }
  }
}
</script>

<style lang="scss"></style>
