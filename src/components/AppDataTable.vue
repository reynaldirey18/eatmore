<template>
  <div>
    <v-card-title>
        <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        label="Search"
        single-line
        outlined
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :loading="loading"
      :items-per-page="perPage"
      :server-items-length="itemsLength"
      :options.sync="tableOptions"
      hide-default-footer
    >
      <template v-slot:footer="{props: { options, pagination }}">
        <v-divider></v-divider>
        <div class="d-flex">
          <div>
            <p>{{getTextShowing(pagination)}}</p>
          </div>
          <v-spacer></v-spacer>
          <div>
            <v-pagination
            color="#FDB526"
            v-model="tableOptions.page"
            :length="pagination.pageCount"
          ></v-pagination>
          </div>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TransactionHistory',
  props: ['headers', 'name', 'url', 'perPage'],
  data () {
    return {
      search: '',
      loading: false,
      tableOptions: {},
      itemsLength: 0,
      items: []
    }
  },
  watch: {
    tableOptions: {
      handler () {
        this.getDataFromAPI().then(response => {
          this.items = response.items
          this.itemsLength = response.length
        })
      },
      deep: true
    }
  },
  methods: {
    getDataFromAPI () {
      this.loading = true
      return new Promise((resolve, reject) => {
        const { page } = this.tableOptions

        axios.get(this.url, {
          params: {
            page,
            per_page: this.perPage
          }
        }).then(response => {
          resolve({ items: response.data.data, length: response.data.total })
        }).finally(() => {
          this.loading = false
        })
      })
    },
    getTextShowing (pagination) {
      const { itemsLength, itemsPerPage } = pagination

      if (itemsLength < itemsPerPage) {
        return 'Showing ' + itemsLength + ' of ' + itemsLength + ' ' + this.name
      } else {
        return 'Showing ' + itemsPerPage + ' of ' + itemsLength + ' ' + this.name
      }
    }
  },
  created () {
    this.getDataFromAPI().then(response => {
      this.items = response.items
      this.itemsLength = response.length
    })
  }
}
</script>
