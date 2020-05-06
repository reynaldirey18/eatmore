<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
        <h1 class="title">Confirm Stock Adjustment</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          color="#FDB526" class="text-center w-full"
          text>
          <span class="text-blue">Cancel</span>
        </v-btn>
        <v-btn
          color="#FDB526" class="text-center w-full"
          text>
          <span class="text-red">Delete</span>
        </v-btn>
        <v-btn
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Confirm Adjustment</span>
        </v-btn>
      </div>
    </div>

    <v-card class="mt-5" style="height:auto;">
      <v-row>
        <v-col cols="12" style="max-height: 52px;">
          <div class="app-box">
            <p class="text-bold pl-3">Adjustment Form</p>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="px-3 d-flex flex-row justify-space-between">
            <div class="">
              <p class="pb-0 mb-0" style="font-size: 12px; color: #333333;">Reason</p>
              <p class="pb-0 mb-0" style="font-size: 24px; color: #000000;">Demage</p>
              <p style="font-size: 12px; color: #333333;">Requested: 16/04/2020 14:30</p>
            </div>
            <div class="">
              <p class="pb-0 mb-0">Status</p>
              <p style="font-size: 14px; color: #FDB526;">Review</p>
            </div>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="px-3">
            <p class="text-blood pb-0 mb-3">Stock Adjust: ({{itemlist.length}})</p>
            <v-data-table
              :headers="headers"
              :items="itemlist"
              :search="search"
              :page.sync="page"
              :items-per-page="itemsPerPage"
              hide-default-footer
              class="elevation-1"
              @page-count="pageCount = $event"
            >
              <template v-slot:item.name="{item}">
                <p class="text-blood-sm pt-4">{{item.name}}</p>
              </template>
              <template v-slot:item.total="{item}">
                <p class="text-grey-14 pt-4">{{item.total}}</p>
              </template>
            </v-data-table>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="px-3 mt-5">
            <p class="text-blood pb-0 mb-4">Notes</p>
            <p class="pb-1">There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun. The truth is the universe is a constantly changing, moving.</p>
            <p class="pt-3 pb-2" style="color: #999999;">PIC: Andi Suwiryo - Finance Feast Ai</p>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
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
      headers: [
        { text: 'Inventories Name', value: 'name' },
        { text: 'Unit', align: 'center', value: 'unit' },
        { text: 'Remove Stock', align: 'center', value: 'stock' },
        { text: 'Value', align: 'start', value: 'value' },
        { text: '', align: 'end', value: '' }
      ],
      itemlist: [
        {
          name: 'Onion',
          unit: 'Kilogram (Kg)',
          stock: '23',
          value: 'Rp.476.000'
        },
        {
          name: 'Souce',
          unit: 'Bottle (Bt)',
          stock: '23',
          value: 'Rp.476.000'
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
    goToPreview () {
      setTimeout(() => {
        this.$router.push('/inventories/previewPO')
      }, 1000)
    }
  }
}
</script>
