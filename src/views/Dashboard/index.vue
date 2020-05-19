<template>
  <div>
    <h1 class="title">Dashboard</h1>
      <v-card
        class="mx-auto mt-3"
        outlined
      >
        <h4 class="mt-3 mx-3 text-blood">Sales Summary</h4>
        <v-row>
          <v-col cols="4">
            <v-card
              class="mx-2 pa-3"
              outlined
            >
            Gross Sales<br>
            <span class="text-blood">Rp. 14.000.000</span><br>
            <span class="text-green">+21% from last week</span>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card
              class="mx-2 pa-3"
              outlined
            >
            Not Sales<br>
            <span class="text-blood">Rp. 13.000.000</span><br>
            <span class="text-green">+21% from last week</span>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card
              class="mx-2 pa-3"
              outlined
            >
            Gross Profit<br>
            <span class="text-blood">Rp. 4.000.000</span><br>
            <span class="text-green">+21% from last week</span>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-card
              class="mx-2 pa-3"
              outlined
            >
            Transactions<br>
            <span class="text-blood">7</span><br>
            <span class="text-red">+21% from last week</span>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card
              class="mx-2 pa-3"
              outlined
            >
            Average Sale Per Transaction<br>
            <span class="text-blood">Rp. 150.000</span><br>
            <span class="text-green">+21% from last week</span>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card
              class="mx-2 pa-3"
              outlined
            >
            Gross Margin<br>
            <span class="text-blood">75.61%</span><br>
            <span class="text-green">+21% from last week</span>
            </v-card>
          </v-col>
        </v-row>
        <div class="ma-3">
          <h4 class="text-blood pb-1">Daily Gross Sales Amount</h4>
          <v-card
            outlined
          >
            <dailyGross style="width:100%" />
          </v-card>
        </div>
        <div class="ma-3">
          <v-row>
            <v-col cols="6">
              <h4 class="text-blood mb-1">Day Of Week Gross Sales Ammount</h4>
              <v-card
                outlined
              >
                <dayAmount style="width:100%" />
              </v-card>
            </v-col>
            <v-col cols="6">
              <h4 class="text-blood mb-1">Hourly Gross Ammount</h4>
              <v-card
                outlined
              >
                <hourAmount style="width:100%" />
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-card>
      <v-card
        class="mx-auto mt-3"
        outlined
      >
        <div class="pa-10 text-center center" v-if="product.length < 1">
          <v-img
              class="center"
              :src="eatmoreLogo"
              width="303.27px"
              height="202px"
          />
          <p class="text-blood">No product In Here</p>
        </div>
        <div v-if="product.length > 1">
          <v-data-table
            :headers="headers"
            :items="product"
            :search="search"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
          >
            <template v-slot:item.name="{item}">
              <v-row>
                <v-col cols="2">
                  <v-img src="https://cdn-brilio-net.akamaized.net/news/2020/04/20/182842/1212446-resep-takjil-buka-puasa.jpg" style="width:90px; height:48px; border-radius: 4px;" aspect-ratio="1.7"></v-img>
                </v-col>
                <v-col cols="10">
                  <span class="text-blood">{{item.name}}</span><br>
                  <span>{{item.number}}</span>
                </v-col>
              </v-row>
            </template>
          </v-data-table>
          <div class="d-flex justify-space-between mt-3">
            <div class="ma-4">
            Show {{itemsPerPage}} of {{product.length}} Products
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
import dailyGross from './component/daily.vue'
import dayAmount from './component/dayamount.vue'
import hourAmount from './component/houramount.vue'
import Cookies from 'js-cookie'

export default {
  components: {
    dailyGross,
    dayAmount,
    hourAmount
  },
  computed: {
    eatmoreLogo () {
      return require('@/assets/img/NotFound.png')
    }
  },
  data: function () {
    return {
      search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: 'Product',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Item Sold', value: 'item' },
        { text: 'Gross Sales', value: 'gross' },
        { text: 'Net Sales', value: 'net' },
        { text: 'Gros Profit', value: 'profit' }
      ],
      product: [
        {
          id: 1,
          name: 'Takjil Sop Buah',
          number: 'NS-256-raw',
          item: 10,
          gross: '1.000.000',
          net: '1.000.000',
          profit: '1.000.000'
        },
        {
          id: 1,
          name: 'Fried Rice Chiken Noya',
          number: 'NS-256-raw',
          item: 10,
          gross: '1.000.000',
          net: '1.000.000',
          profit: '1.000.000'
        },
        {
          id: 1,
          name: 'Fried Rice Chiken Noya',
          number: 'NS-256-raw',
          item: 10,
          gross: '1.000.000',
          net: '1.000.000',
          profit: '1.000.000'
        }
      ]
    }
  },
  mounted () {
    const fromSignup = Cookies.get('fromSignup')
    console.log(fromSignup)
    if (fromSignup) {
      console.log('ok123')
      Cookies.remove('fromSignup')
      setTimeout(() => {
        this.$router.go()
      }, 200)
    }
  }
}
</script>
<style>
</style>
