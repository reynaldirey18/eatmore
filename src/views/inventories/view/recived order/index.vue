<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
        <h1 class="title">Received Order</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Create Received Order</span>
        </v-btn>
      </div>
    </div>

    <v-card class="mt-5" style="height:auto;">
      <div class="pa-10 text-center center" v-if="ROlist.length < 1">
        <v-img
            class="center"
            :src="eatmoreLogo"
            width="303.27px"
            height="202px"
        />
        <p class="text-blood">No Recived Order In Here</p>
      </div>
      <div v-if="ROlist.length >= 1">
        <v-data-table
          :headers="headers"
          :items="ROlist"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.actions>
            <div class="pt-4"><p class="text-blue cursor-pointer"   @click="goToPreview()">View Recived Order</p></div>
          </template>
          <template v-slot:item.other>
            <v-btn icon @click="goToPreview()">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4">
          Show {{itemsPerPage}} of {{ROlist.length}} Recived Order
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
        { text: 'Received Date', value: 'date' },
        { text: 'Received No.', value: 'Rno' },
        { text: 'PO Number', value: 'po' },
        { text: 'Supplier', value: 'name' },
        { text: '', value: '' },
        { text: '', value: 'actions', align: 'end', sortable: false },
        { text: '', value: 'other', sortable: false }
      ],
      ROlist: [
        {
          date: '16/04/2020',
          Rno: 'RE-2526-001',
          PO: 'PO-1527-001',
          name: 'PT Antam'
        },
        {
          date: '16/04/2020',
          Rno: 'RE-2526-001',
          PO: 'PO-1527-001',
          name: 'PT LEN'
        },
        {
          date: '16/04/2020',
          Rno: 'RE-2526-001',
          PO: 'PO-1527-001',
          name: 'PT INALUM'
        },
        {
          date: '16/04/2020',
          Rno: 'RE-2526-001',
          PO: 'PO-1527-001  ',
          name: 'PT JAYA ABADI'
        }
      ]
    }
  },
  watch: {
  },
  methods: {
    gotoAdd () {
      setTimeout(() => {
        this.$router.push('/inventories/add-recived-order')
      }, 1000)
    },
    goToPreview () {
      setTimeout(() => {
        this.$router.push('/inventories/view-recived-order')
      }, 1000)
    }
  }
}
</script>
