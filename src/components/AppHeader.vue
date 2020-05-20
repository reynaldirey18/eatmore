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
        <v-menu bottom offset-y v-if="isLoaded">
          <template v-slot:activator="{ on }">
            <div class="outlet-list d-flex flex-row justify-space-between align-center cursor-pointer border-right px-2" v-on="on">
              <div>
                <v-icon color="black">mdi-store</v-icon>
              </div>
              <div class="d-flex flex-column ml-4 mt-5">
                <p class="mb-0 text-bold-sm">Outlet</p>
                <p class="black40">{{ account }}</p>
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
                @click="setOutlet(item)"
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
import axios from 'axios'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('outlet')

export default {
  name: 'AppHeader',
  data () {
    return {
      account: null,
      items: [
        {
          title: 'Logout',
          to: ''
        }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('outlet/getList')
    const token = Cookies.get('token')
    axios.get('http://api.eatmore.id/profile_service/', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        const res = response.data
        this.account = res.data.outlet_name
        Cookies.set('id-outlet', res.data.outlet_id)
      }, error => {
        console.log(error)
      })
  },
  computed: {
    isLoaded () {
      return this.$store.getters['outlet/didItLoad']
    },
    ...mapState({
      outletList: state => state.outletList
    })
  },
  methods: {
    actionItem () {
      Cookies.remove('token')
      this.$router.go()
    },
    setOutlet (val) {
      this.$store.commit('outlet/SET_ID_OUTLET', val.outlet_id)
      Cookies.set('id-outlet', val.outlet_id)
      this.$store.dispatch('outlet/getList')
      this.refreshToken()
    },
    refreshToken () {
      this.$store.dispatch('outlet/refreshToken')
        .then(response => {
          const res = response.data
          if (res.status) {
            Cookies.set('token', res.data.token, { expires: 1 })
            this.$store.commit('auth/SET_TOKEN', res.data.token)
            this.$router.go()
          } else {
            console.log(res.errors)
          }
        }).catch((error) => {
          console.log(error)
        })
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
