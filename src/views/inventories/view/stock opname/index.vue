<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
        <h1 class="title">Stock Opname</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">New Stock Opname</span>
        </v-btn>
      </div>
    </div>

    <v-card class="mt-5" style="height:auto;">
      <div class="pa-10 text-center center" v-if="stockOpnameList.length < 1">
        <v-img
            class="center"
            :src="eatmoreLogo"
            width="303.27px"
            height="202px"
        />
        <p class="text-blood">No Stock Opname In Here</p>
      </div>
      <div v-if="stockOpnameList.length >= 1">
        <v-data-table
          :headers="headers"
          :items="stockOpnameList"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.actions>
            <div class="pt-4"><p class="text-blue cursor-pointer"   @click="goToPreview()">View Detail</p></div>
          </template>
          <template v-slot:item.other>
            <v-btn icon @click="goToPreview()">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4">
          Show {{itemsPerPage}} of {{stockOpnameList.length}} Stock Opname
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
  name: 'product',
  components: {
  },
  computed: {
    eatmoreLogo () {
      return require('@/assets/img/NotFound.png')
    }
  },
  data () {
    return {
      search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      dropdown_font: null,
      headers: [
        { text: 'Opname Date', value: 'date' },
        { text: 'System Inventory', value: 'system' },
        { text: 'Actual Inventory', value: 'actual' },
        { text: 'Gap', value: 'gap' },
        { text: 'Error', value: 'error' },
        { text: '', value: 'actions', align: 'end', sortable: false },
        { text: '', value: 'other', sortable: false }
      ],
      stockOpnameList: [
        {
          date: '16/04/2020',
          system: 'Rp.1.000.000.000',
          actual: 'Rp.1.001.260.000',
          gap: '+ Rp.1.260.000',
          error: '0.4%'
        },
        {
          date: '16/04/2020',
          system: 'Rp.1.000.000.000',
          actual: 'Rp.1.000.000.000',
          gap: '- Rp.1.260.000',
          error: '0.4%'
        },
        {
          date: '16/04/2020',
          system: 'Rp.1.000.000.000',
          actual: 'Rp.1.000.260.000',
          gap: '-',
          error: '0.4%'
        },
        {
          date: '16/04/2020',
          system: 'Rp.1.000.000.000',
          actual: 'Rp.1.000.260.000',
          gap: '-',
          error: '0.4%'
        },
        {
          date: '16/04/2020',
          system: 'Rp.1.000.000.000',
          actual: 'Rp.1.000.260.000',
          gap: '-',
          error: '0.4%'
        }
      ]
    }
  },
  watch: {
  },
  methods: {
    gotoAdd () {
      setTimeout(() => {
        this.$router.push('/inventories/add-stock-opname')
      }, 1000)
    },
    goToPreview () {
      // setTimeout(() => {
      //   this.$router.push('/inventories/view-recived-order')
      // }, 1000)
    }
  }
}
</script>
