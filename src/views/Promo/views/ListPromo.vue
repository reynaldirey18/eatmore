<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">Promo</h1>
      <v-btn color="#FDB526" dark small width="160px">New Promo</v-btn>
    </div>
    <v-card class="pa-6 mt-6" outlined>
      <span class="app-subtitle-small">Eatmore Promo</span>
      <v-row>
        <v-col cols="4">
          <div class="picture d-flex">
            <v-icon class="align-self-center mx-auto" color="#000000" size="30">mdi-file-image-outline</v-icon>
          </div>
          <div class="detail-promo d-flex flex-column pa-2 mb-2">
            <span class="app-subtitle">PROMO HARKULNAS</span>
            <span>Diskon 50%</span>
            <span>Valid Date 22-11-2020</span>
          </div>
          <v-btn color="#FDB526" dark block>Join Promo</v-btn>
        </v-col>
        <v-col cols="4">
          <div class="picture d-flex">
            <v-icon class="align-self-center mx-auto" color="#000000" size="30">mdi-file-image-outline</v-icon>
          </div>
          <div class="detail-promo d-flex flex-column pa-2 mb-2">
            <span class="app-subtitle">SPECIAL RAMADHAN OFFER</span>
            <span>Potongan Harga Rp. 23.000</span>
            <span>Valid Date 20-11-2020</span>
          </div>
          <v-btn color="#FDB526" dark block>Join Promo</v-btn>
        </v-col>
        <v-col cols="4">
          <div class="picture d-flex">
            <v-icon class="align-self-center mx-auto" color="#000000" size="30">mdi-file-image-outline</v-icon>
          </div>
          <div class="detail-promo d-flex flex-column pa-2 mb-2">
            <span class="app-subtitle">PROMO STAY AT HOME</span>
            <span>Potongan Harga Rp. 23.000</span>
            <span>Valid Date 19-11-2020</span>
          </div>
          <v-btn color="#FDB526" dark block>Join Promo</v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5">
      <v-data-table
        :headers="headers"
        :items="promo"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
        @click:row="handleClick($event)"
      >
        <template v-slot:item.status="{item}">
          <div>
            <div class="text-green" v-if="item.status == 'Ongoing'">{{item.status}}</div>
            <div class="text-green" v-else-if="item.status == 'Confirmed'">{{item.status}}</div>
            <div class="text-grey-sm" v-else-if="item.status == 'Drafted'">{{item.status}}</div>
            <div class="text-red" v-else-if="item.status == 'Expired'">{{item.status}}</div>
            <div class="text-yellow-sm" v-else-if="item.status == 'Waiting Agreement'">{{item.status}}</div>
          </div>
        </template>
        <template v-slot:item.actions>
          <div class="pt-4"><p class="text-blue-sm cursor-pointer"  @click="goToEdit()">Edit Promo</p></div>
        </template>
        <template v-slot:item.other>
          <!-- <v-btn icon @click="goToEdit()">
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn> -->
          <v-btn icon color="#F32626">
            <v-icon>mdi-trash-can</v-icon>
          </v-btn>
        </template>
      </v-data-table>
      <div class="d-flex justify-space-between mt-3">
        <div class="ma-4" v-if="itemsPerPage >= promo.length">
          Show {{promo.length}} of {{promo.length}} Promo
        </div>
        <div class="ma-4" v-else>
          Show {{itemsPerPage}} of {{promo.length}} Promo
        </div>
        <div>
        <v-pagination
          v-model="page"
          color="#FDB526"
          :length="pageCount">
        </v-pagination>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: 'Title Promo', value: 'name' },
        { text: 'Type Promo', value: 'type' },
        { text: 'Promo Period', value: 'period' },
        { text: 'Promo Price', value: 'price' },
        { text: 'Status', align: 'center', value: 'status' },
        { text: 'Type Promo', align: 'center', value: 'actions', sortable: false },
        { text: '', align: 'center', value: 'other', sortable: false }
      ],
      promo: [
        {
          id: 1,
          name: 'Stay at Home',
          type: 'Eatmore',
          period: '19-11-2020 / 22-11-2020',
          price: 'Rp. 25.000',
          status: 'Drafted'
        },
        {
          id: 2,
          name: 'HARKULNAS',
          type: 'Eatmore',
          period: '14-11-2020 / 18-11-2020',
          price: 'Rp. 50.000',
          status: 'Ongoing'
        },
        {
          id: 3,
          name: 'Special Ramadhan',
          type: 'Premium',
          period: '12-11-2020 / 14-11-2020',
          price: 'Rp. 72.350',
          status: 'Waiting Agreement'
        },
        {
          id: 4,
          name: 'BM50',
          type: 'Premium',
          period: '10-11-2020 / 14-11-2020',
          price: 'Rp. 12.250',
          status: 'Confirmed'
        },
        {
          id: 5,
          name: 'PHD Offer',
          type: 'Regular',
          period: '12-09-2020 / 16-09-2020',
          price: 'Rp. 67.230',
          status: 'Expired'
        }
      ]
    }
  },
  methods: {
    handleClick (val) {
      this.$router.push('/promo/detail-promo/' + val.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-subtitle {
  font-weight: bold;
}
.app-subtitle-small {
  font-size: 14px;
}
.picture {
  width: 100%;
  height: 164px;
  background-color: #F4F5F6;
}
.detail-promo {
  background-color: #FFF8E9;
}
</style>
