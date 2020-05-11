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
      <v-toolbar-title style="
        dispay: block;
        width: 200px;
        height: 63px;
      ">
        <v-overflow-btn
          class="my-2"
          :items="dropdown_font"
          label="Outlet"
          target="#dropdown-example"
          background-color="white"
          :elevation="0"
          shaped
          style="border-radius: 0;border-right:1px solid rgba(0, 0, 0, 0.05)"
        ></v-overflow-btn>
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
              @click="actionItem(item.to)"
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
</style>
