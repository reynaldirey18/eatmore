<template>
  <div>
    <v-row>
      <v-col cols="10">
        <h1 class="title">Purchase Order</h1>
      </v-col>
      <v-col cols="auto">
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Create PO</span>
        </v-btn>
      </v-col>
    </v-row>

    <v-card class="mt-5" style="height:auto;">
      <div class="pa-10 text-center center" v-if="Supplierlist.length < 1">
        <v-img
            class="center"
            :src="eatmoreLogo"
            width="303.27px"
            height="202px"
        />
        <p class="text-blood">No Purchase Order In Here</p>
      </div>
      <div v-if="Supplierlist.length >= 1">
        <v-data-table
          :headers="headers"
          :items="Supplierlist"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.actions>
            <div class="pt-4"><p class="text-blue cursor-pointer"  @click="dialog = true">View PO</p></div>
          </template>
          <template v-slot:item.other>
            <v-btn icon @click="goToEdit()">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4">
          Show {{itemsPerPage}} of {{Supplierlist.length}} Purchase Order
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
        { text: 'PO Number', value: 'number' },
        { text: 'Supplier', value: 'name' },
        { text: 'PO Date', value: 'date' },
        { text: 'Delivery Date', value: 'delive' },
        { text: 'Order Items', value: 'item' },
        { text: 'Total Cost', value: 'cost' },
        { text: '', value: 'actions', align: 'end', sortable: false },
        { text: '', value: 'other', sortable: false }
      ],
      Supplierlist: [
        {
          name: 'PT Akur Pratama Yogya group',
          number: 'SL-256-raw',
          date: '11/01/2021',
          delive: '11/01/2021',
          item: 2,
          cost: 'Rp 14.000.000'
        },
        {
          name: 'PT Akur Pratama Yogya group',
          number: 'SL-256-raw',
          date: '11/01/2021',
          delive: '11/01/2021',
          item: 2,
          cost: 'Rp 14.000.000'
        },
        {
          name: 'PT Akur Pratama Yogya group',
          number: 'SL-256-raw',
          date: '11/01/2021',
          delive: '11/01/2021',
          item: 2,
          cost: 'Rp 14.000.000'
        },
        {
          name: 'PT Akur Pratama Yogya group',
          number: 'SL-256-raw',
          date: '11/01/2021',
          delive: '11/01/2021',
          item: 2,
          cost: 'Rp 14.000.000'
        },
        {
          name: 'PT Akur Pratama Yogya group',
          number: 'SL-256-raw',
          date: '11/01/2021',
          delive: '11/01/2021',
          item: 2,
          cost: 'Rp 14.000.000'
        }
      ]
    }
  },
  watch: {
  },
  methods: {
    gotoAdd () {
      setTimeout(() => {
        this.$router.push('/inventories/add-purchase-order')
      }, 1000)
    },
    goToEdit () {
      setTimeout(() => {
        this.$router.push('/inventories/edit-supplier')
      }, 1000)
    }
  }
}
</script>
