<template>
    <div class="px-4 py-6">
        <h1 class="app-title pb-5">Gross Profit</h1>
        <form @submit.prevent="handleFormSubmit">
            <div>
                <p class="app-title-small" style="margin-bottom: -5px">Filter Date Range</p>
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                <template v-slot:activator="{ on }">
                  <v-text-field
                   v-model="dateRangeText"
                    prepend-icon="mdi-calendar"
                    v-on="on" readonly>
                  </v-text-field>
                </template>
                  <v-date-picker v-model="dates" @input="dates.length == 1" range></v-date-picker>
              </v-menu>
            </div>
            <div>
              <v-alert
                v-model="alert"
                dismissible
                color="#FFF8E9"
                elevation="2"
              >
                <strong>Important Note</strong> <br>
                <p>Integer nulla turpis, vehicula vel ante et, scelerisque facilisis sapien. Praesent sagittis blandit <br>turpis, eu sollicitudin erat consectetur sed. Cras eget magna.</p>
              </v-alert>
            </div>
            <div>
              <p class="text-blood pt-3">{{dateRangeText}}</p>
            </div>
            <div class="pa-5">
              <v-row class="border-grey">
                <v-col class="text-left" cols="6">Gross Sales</v-col>
                <v-col class="text-right" cols="6">Rp.155.500</v-col>
              </v-row>
              <v-row class="border-grey">
                <v-col class="text-left" cols="6">Discount</v-col>
                <v-col class="text-right" cols="6">(Rp.45.000)</v-col>
              </v-row>
              <v-row class="border-grey-dark">
                <v-col class="text-left" cols="6">Refounds</v-col>
                <v-col class="text-right" cols="6">Rp.0</v-col>
              </v-row>
              <v-row class="border-grey">
                <v-col class="text-left text-blood-sm" cols="6">Net Sales</v-col>
                <v-col class="text-right text-blood-sm" cols="6">Rp.110.500</v-col>
                <v-col class="text-right text-green" cols="12">100%</v-col>
              </v-row>
              <v-row class="border-grey">
                <v-col class="text-left" cols="6">Cost of Gods Sales (COGS)</v-col>
                <v-col class="text-right" cols="6">(Rp.27.000)</v-col>
                <v-col class="text-right text-red" cols="12">-21 %</v-col>
              </v-row>
              <v-row class="border-grey-dark bg-blue-sky">
                <v-col class="text-left text-blood-sm" cols="6">Gross Profit</v-col>
                <v-col class="text-right text-blood-sm" cols="6">Rp. 83.500</v-col>
                <v-col class="text-right text-green" cols="12">+78%</v-col>
              </v-row>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'ComponentBasicProfile',
  components: {
  },
  data () {
    return {
      alert: true,
      dates: ['', ''],
      menu: false
    }
  },
  computed: {
    dateRangeText () {
      return this.dates.join(' ~ ')
    }
  },
  watch: {
    dates (val) {
      console.log(val)
      const [year, month, day] = val[0].split('-')
      const [year1, month1, day1] = val[1].split('-')
      this.dates[0] = `${month}/${day}/${year}`
      this.dates[1] = `${month1}/${day1}/${year1}`
    }
  },
  methods: {
  }
}
</script>
