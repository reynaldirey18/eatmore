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
          <h4 class="text-blood">Daily Gross Sales Amount</h4>
          <dailyGross />
        </div>
      </v-card>
  </div>
</template>
<script>
import dailyGross from './component/daily.vue'
export default {
  components: {
    dailyGross
  }
}
</script>
