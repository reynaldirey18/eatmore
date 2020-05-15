<template>
  <div>
     <v-app-bar
      app
      dense
      color="white"
      style="height:56px;border: 1px solid rgba(0, 0, 0, 0.05)"
      elevation="0"
      flat
    >
      <v-toolbar-title>
        <!-- <v-overflow-btn
          class="my-2"
          :items="dropdown_font"
          label="Outlet"
          target="#dropdown-example"
          background-color="white"
          :elevation="0"
          shaped
          style="border-radius: 0;border-right:1px solid rgba(0, 0, 0, 0.05)"
        ></v-overflow-btn> -->
        <v-menu bottom offset-y>
          <template v-slot:activator="{ on }">
            <div class="outlet-list d-flex flex-row justify-space-between align-center cursor-pointer border-right px-2" v-on="on">
              <div>
                <v-icon color="black">mdi-store</v-icon>
              </div>
              <div class="d-flex flex-column ml-4 mt-5">
                <p class="mb-0 text-bold-sm">Outlet 1</p>
                <p class="black40">Restaurant</p>
              </div>
              <div>
                <v-icon color="black" class="ml-10">mdi-menu-down</v-icon>
              </div>
            </div>
          </template>
          <v-card>
            <v-list>
              <v-list-item
                v-for="(item, i) in outletList"
                :key="i"
                @click="actionItem(item.to)"
              >
                <v-list-item-title>{{ item.outlet_name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            class="px-0"
            v-on="on"
            icon
            color="#FDB526"
          >
            <v-avatar size="36">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9lBZgC2UOiMjOkXo0kuW_UwkOl406Z2W6QmU2vYoKODFWF8CK&usqp=CAU"
                alt="Naruto"
              >
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('outlet')

export default {
  name: 'AppHeader',
  data () {
    return {
      account: null,
      dropdown_font: ['Outlet 1', 'Outlet 2'],
      items: [
        {
          title: 'Logout',
          to: ''
        }
      ]
    }
  },
  computed: {
    ...mapState({
      outletList: state => state.outletList
    })
  },
  mounted () {
    this.$store.dispatch('outlet/getList')
  },
  methods: {
    actionItem () {
      Cookies.remove('token')
      this.$router.go()
    }
  }
}
</script>

<style lang="scss" scoped>
.v-avatar {
  border: 1px solid #FDB526;
  box-sizing: border-box;
  background-blend-mode: normal;
}
.outlet-list {
  height: 62px;
}
</style>
