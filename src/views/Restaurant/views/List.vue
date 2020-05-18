<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">Outlet List</h1>
      <v-btn color="#FDB526" dark small width="160px" @click.prevent="goRegister">Add New Outlet</v-btn>
    </div>
    <v-card class="mt-6" outlined>
      <div class="table">
        <v-data-table
          :headers="headers"
          :items="outletList"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.outlet_name="{item}">
            <div class="d-flex flex-row align-center py-2">
              <div class="photo mr-4">
                <img :src="item.outlet_logo" alt="Photo">
              </div>
              <div>
                <p class="text-blood-sm mb-1">{{item.outlet_name}}</p>
                <p class="mb-1">{{item.outlet_email}}</p>
              </div>
            </div>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4" v-if="itemsPerPage >= outletList.length">
            Show {{outletList.length}} of {{outletList.length}} Outlet
          </div>
          <div class="ma-4" v-else>
            Show {{itemsPerPage}} of {{outletList.length}} Outlet
          </div>
          <div>
          <v-pagination
            v-model="page"
            color="#FDB526"
            :length="pageCount">
          </v-pagination>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('outlet')

export default {
  data () {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: 'Name', value: 'outlet_name' },
        { text: 'Phone', value: 'outlet_phone', sortable: false },
        { text: 'Address', value: 'outlet_address', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      outletList: state => state.outletList,
      lengthList: state => state.lengthList
    })
  },
  mounted () {
    this.$store.dispatch('outlet/getList')
  },
  methods: {
    goRegister () {
      this.$router.push('/outlet-registration')
    }
  }
}
</script>
