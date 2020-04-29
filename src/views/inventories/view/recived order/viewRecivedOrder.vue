<template>
  <div>
    <v-row>
      <v-col cols="10" class="mr-12">
        <h1 class="title">View Received Order</h1>
      </v-col>
      <v-col cols="auto">
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Print Out</span>
        </v-btn>
      </v-col>
    </v-row>

    <v-card class="mt-5" style="height:auto;">
      <div class="pa-5">
        <div class="app-box">
          <v-row>
            <v-col cols="6">
            </v-col>
            <v-col cols="6" class="text-right">
              <p class="pb-0 mb-0" style="font-size: 24px; text-transform: uppercase; color: #000000;">Received Order</p>
              <p class="py-0 my-0" style="font-size: 20px; color: #333333;">#RE-2526-001</p>
              <p style="font-size: 12px; color: #333333;">Date: 16/04/2020</p>
            </v-col>
          </v-row>
        </div>
        <div class="app-box mt-5">
          <v-row>
            <v-col cols="6">
              <span>PO Number</span>: <span class=" pl-3 text-blood-sm">PO-1527-001</span>
            </v-col>
            <v-col cols="6">
              <span>Invoice Number</span>: <span class=" pl-3 text-blood-sm">INV-1527-001</span>
            </v-col>
          </v-row>
        </div>
        <div class="app-box">
          <v-row>
            <v-col cols="6">
              <div class="pr-12">
                <p class="text-blood pb-0 mb-3">From:</p>
                <v-row>
                  <v-col cols="3" class="text-grey-14 mb-0 pb-0">Company Name:</v-col>
                  <v-col cols="9" class="text-blood-sm mb-0 pb-0">PT. Indah Makmur Amarta</v-col>

                  <v-col cols="3" class="text-grey-14 mb-0 pb-0">Email Address:</v-col>
                  <v-col cols="9" class="text-blood-sm mb-0 pb-0">Sales@indahamarta.com</v-col>

                  <v-col cols="3" class="text-grey-14 mb-0 pb-0">Phone Number:</v-col>
                  <v-col cols="9" class="text-blood-sm mb-0 pb-0">022 2516272</v-col>

                  <v-col cols="3" class="text-grey-14 mb-0 pb-0">Mobile Number:</v-col>
                  <v-col cols="9" class="text-blood-sm mb-0 pb-0">+71 9622-5162-2372</v-col>

                  <v-col cols="3" class="text-grey-14 mb-0 pb-0">Address:</v-col>
                  <v-col cols="9" class="text-blood-sm text-left mb-0 pb-0">211, Jalan Tun Sambanthan, Brickfields, 50470 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia</v-col>
                </v-row>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="pr-12">
                <p class="text-blood pb-0 mb-3">To:</p>
                <v-row>
                  <v-col cols="3" class="text-grey-14 mb-0 pb-0">Company Name:</v-col>
                  <v-col cols="9" class="text-blood-sm mb-0 pb-0">PT. Fiesta</v-col>

                  <v-col cols="3" class="text-grey-14 mb-0 pb-0">Email Address:</v-col>
                  <v-col cols="9" class="text-blood-sm mb-0 pb-0">Sales@indahamarta.com</v-col>

                  <v-col cols="3" class="text-grey-14 mb-0 pb-0">Phone Number:</v-col>
                  <v-col cols="9" class="text-blood-sm mb-0 pb-0">022 2516272</v-col>

                  <v-col cols="3" class="text-grey-14 mb-0 pb-0">Mobile Number:</v-col>
                  <v-col cols="9" class="text-blood-sm mb-0 pb-0">+71 9622-5162-2372</v-col>

                  <v-col cols="3" class="text-grey-14 mb-0 pb-0">Address:</v-col>
                  <v-col cols="9" class="text-blood-sm text-left mb-0 pb-0">211, Jalan Tun Sambanthan, Brickfields, 50470 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia</v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="app-box mt-5">
          <p class="text-blood pb-0 mb-3">Item Orders:</p>
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
        <div class="app-box mt-5">
          <p class="text-blood pb-0 mb-3">Notes</p>
          <p class="pb-5">There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun. The truth is the universe is a constantly changing, moving.</p>
        </div>
        <div class="app-box mt-5">
          <p class="" style="color: rgba(51, 52, 78, 0.5);">There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun. The truth is the universe is a constantly changing, moving, some would say “living” thing because you just never know what you are going to see on any given night of stargazing.simultaneously a bad joke but an accurate depiction of how astronomy fans view them. Unlike suns, planets and moons, asteroids are on the move, ever changing and, if they appear in the night sky, exciting and dynamic.</p>
          <p class="pt-3 pb-5" style="color: #999999;">PIC: Andi Suwiryo - Finance Feast Ai</p>
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
      headers: [
        { text: 'Item Name', value: 'name' },
        { text: 'Price/Unit', align: 'center', value: 'unit' },
        { text: 'Total Received', align: 'center', value: 'total' },
        { text: 'Good Recieved', align: 'center', value: 'good' },
        { text: 'NG Return', align: 'end', value: 'return' }
      ],
      itemlist: [
        {
          name: 'Telur',
          unit: '',
          total: '100 Kg',
          good: '90 Kg',
          return: '(10 Kg)'
        },
        {
          name: 'Garam',
          unit: '',
          total: '100 Kg',
          good: '90 Kg',
          return: '(10 Kg)'
        },
        {
          name: 'Gula',
          unit: '',
          total: '100 Kg',
          good: '90 Kg',
          return: '(10 Kg)'
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
