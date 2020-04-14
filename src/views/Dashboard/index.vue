<template>
  <div class="pl-5">
    <h1 class="title">Dashboard</h1>
      <v-card
        class="mx-auto mt-3"
        outlined
      >
        <h4 class="ma-3 text-blood">Sales Summary</h4>
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
            <span class="text-blood">Rp. 14.000.000</span><br>
            <span class="text-green">+21% from last week</span>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card
              class="mx-2 pa-3"
              outlined
            >
            Gross Profit<br>
            <span class="text-blood">Rp. 14.000.000</span><br>
            <span class="text-green">+21% from last week</span>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
  </div>
</template>
