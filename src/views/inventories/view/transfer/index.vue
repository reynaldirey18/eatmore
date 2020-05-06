<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
        <h1 class="title">Transfer Inventories</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">New Transfer Inventories</span>
        </v-btn>
      </div>
    </div>

    <v-card class="mt-5" style="height:auto;">
      <div class="pa-10 text-center center" v-if="transferList.length < 1">
        <v-img
            class="center"
            :src="eatmoreLogo"
            width="303.27px"
            height="202px"
        />
        <p class="text-blood">No Transfer Inventories In Here</p>
        <p class="text-grey-sm">You able to transfer inventories to another outlet</p>
      </div>
      <div v-if="transferList.length >= 1">
        <v-data-table
          :headers="headers"
          :items="transferList"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.actions>
            <div class="pt-4"><p class="text-blue cursor-pointer"   @click="goToPreview()">View</p></div>
          </template>
          <template v-slot:item.number="{item}">
              <p class=" mb-0 mt-5">{{item.number}}</p>
              <p class="text-grey-sm">{{item.created}}</p>
          </template>
          <template v-slot:item.to="{item}">
              <p class=" mb-0 mt-5">{{item.to}}</p>
              <p class="text-grey-sm">{{item.address}}</p>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4">
          Show {{itemsPerPage}} of {{transferList.length}} Transfer Inventories
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
        { text: 'Transfer Number', value: 'number' },
        { text: 'Transfer To.', value: 'to' },
        { text: 'Delivery Date', value: 'date' },
        { text: 'Delivery Cost', value: 'cost' },
        { text: 'Total Incom', value: 'incom' },
        { text: '', value: 'actions', align: 'end', sortable: false }
      ],
      transferList: [
        {
          id: 1,
          number: 'TZ-23434-WCR',
          created: '16/04/2020',
          to: 'RE-2526-001',
          address: 'Jl. Asia Afrika No.1',
          date: 'Mon, 16/04/2020',
          cost: '(Rp.200.000)',
          incom: 'Rp.18.000.000'
        },
        {
          id: 2,
          number: 'TZ-32343-WCR',
          created: '16/04/2020',
          to: 'RE-2526-001',
          address: 'Jl. Asia Afrika No.1',
          date: 'Mon, 16/04/2020',
          cost: '(Rp.200.000)',
          incom: 'Rp.18.000.000'
        },
        {
          id: 3,
          number: 'TZ-55677-WCR',
          created: '16/04/2020',
          to: 'RE-2526-001',
          address: 'Jl. Asia Afrika No.1',
          date: 'Mon, 16/04/2020',
          cost: '(Rp.200.000)',
          incom: 'Rp.18.000.000'
        }
      ]
    }
  },
  watch: {
  },
  methods: {
    gotoAdd () {
      setTimeout(() => {
        this.$router.push('/inventories/add-transfer-inventories')
      }, 1000)
    },
    goToPreview () {
      setTimeout(() => {
        this.$router.push('/inventories/view-transfer-inventories')
      }, 1000)
    }
  }
}
</script>
