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
        <v-simple-table fixed-header height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">Product</th>
                <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">Item Sold</th>
                <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">Gross Sales</th>
                <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">Net Sales</th>
                <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">Gross Profit</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in product" :key="data.id">
                <td>
                  <v-row>
                    <v-col cols="2">
                      <v-img src="https://tabloidnyata.com/wp-content/uploads/2017/08/aurelie-ello-696x418.jpg" style="width:100%; height:48px" aspect-ratio="1.7"></v-img>
                    </v-col>
                    <v-col cols="10">
                      <span class="text-blood">{{data.name}}</span><br>
                      <span>{{data.number}}</span>
                    </v-col>
                  </v-row>
                </td>
                <td>{{ data.item }}</td>
                <td>Rp {{ data.gross }}</td>
                <td>{{ data.net }}</td>
                <td>{{ data.profit }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
  </div>
</template>
<script>
import dailyGross from './component/daily.vue'
import dayAmount from './component/dayamount.vue'
import hourAmount from './component/houramount.vue'
export default {
  components: {
    dailyGross,
    dayAmount,
    hourAmount
  },
  data: function () {
    return {
      product: [
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
  }
}
</script>
<style>
</style>
