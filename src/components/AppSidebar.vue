<template>
  <v-navigation-drawer
    permanent
    :mini-variant.sync="mini"
    app
  >
    <v-list dense>
      <v-list-item style="border-bottom: 1px solid rgba(0, 0, 0, 0.05);" class="pb-2">
        <v-list-item-icon>
          <div v-if="mini" style="margin-top: -5px; margin-left: 5px">
            <span style="font-weight: 900; font-size: 24px; color:#F5B13C;">e</span>
          </div>
          <v-img v-else
            class="mt-1"
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

    <v-list dense>
      <v-list-item link
        v-for="(sidebarItem, i) in sidebarData"
        :key="i"
        :to="sidebarItem.to"
        >
        <v-list-item-icon class="pr-0 mr-3">
          <v-icon color="#FDB526">{{sidebarItem.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{sidebarItem.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group
        v-for="(sidebarItem2, i) in sidebarData2"
        :key="'main menu ' + i"
        :value="false"
        color="#FDB526"
      >
        <template v-slot:prependIcon>
          <v-icon color="#FDB526">{{sidebarItem2.icon}}</v-icon>
        </template>
        <template v-slot:activator>
          <v-list-item-title style="margin-left:-15px">{{sidebarItem2.name}}</v-list-item-title>
        </template>
        <v-list-item link
          exact
          v-for="(itemChild, a) in sidebarItem2.children"
          :key="a"
          :to="itemChild.to"
          >
          <v-list-item-content class="pl-10">
            <v-list-item-title>{{itemChild.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-subheader class="pl-4 text-center" v-if="mini !== true">Main Menu</v-subheader>
      <v-list-group
        v-for="(mainMenuItem, i) in mainMenuData"
        :key="'main menu ' + i"
        :value="false"
        color="#FDB526"
      >
        <template v-slot:prependIcon>
          <v-icon color="#FDB526">{{mainMenuItem.icon}}</v-icon>
        </template>
        <template v-slot:activator>
          <v-list-item-title style="margin-left:-15px">{{mainMenuItem.name}}</v-list-item-title>
        </template>
        <v-list-item link
          exact
          v-for="(mainMenuItemChild, a) in mainMenuItem.children"
          :key="a"
          :to="mainMenuItemChild.to"
          >
          <v-list-item-content class="pl-10">
            <v-list-item-title>{{mainMenuItemChild.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { sidebar, sidebar2, mainMenu } from '@/router/nav'
export default {
  name: 'AppSidebar',
  data () {
    return {
      drawer: null,
      mini: false,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('resize', this.minisize)
    this.handleResize()
    this.minisize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('resize', this.minisize)
  },
  computed: {
    eatmoreLogo () {
      return require('@/assets/img/Eatmore logo-01 1.png')
    },
    sidebarData () {
      return sidebar
    },
    sidebarData2 () {
      return sidebar2
    },
    mainMenuData () {
      return mainMenu
    }
  },
  watch: {
    window (newVal) {
      console.log(newVal)
    }
  },
  methods: {
    minisize () {
      if (this.window.width <= 1270) {
        this.mini = true
      } else {
        this.mini = false
      }
    },
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    }
  }
}
</script>

<style lang="scss"></style>
