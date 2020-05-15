<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">Outlet List</h1>
      <v-btn color="#FDB526" dark small width="160px" @click="goToAdd">Add New Outlet</v-btn>
    </div>
    <v-card class="mt-6" outlined>
      <div class="table">
        <v-data-table
          :headers="headers"
          :items="outlets"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4" v-if="itemsPerPage >= outlets.length">
            Show {{outlets.length}} of {{outlets.length}} Outlet
          </div>
          <div class="ma-4" v-else>
            Show {{itemsPerPage}} of {{outlets.length}} Outlet
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
export default {
  data () {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email', sortable: false },
        { text: 'Phone', value: 'phone', sortable: false }
      ],
      outlets: []
    }
  }
}
</script>
