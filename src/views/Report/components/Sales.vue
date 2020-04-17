<template>
    <div class="px-4 py-6">
        <h1 class="app-title pb-5">Product Sell
          <v-btn @click.prevent="handleFormSubmit" color="#FDB526" class="float-right" dark><span class="text-capitalize">Export</span></v-btn>
        </h1>
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
                  <v-text-field v-model="dateRangeText" prepend-icon="mdi-calendar" v-on="on" readonly></v-text-field>
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
              <v-simple-table fixed-header height="300px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">Product Name</th>
                      <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">SKU</th>
                      <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">Category</th>
                      <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">Sold</th>
                      <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">Item Refunded</th>
                      <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">Gross Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="data in product" :key="data.id">
                      <td class="bg-grey text-blood-sm">{{ data.name }}</td>
                      <td class="text-grey-sm">NS-256-raw</td>
                      <td class="text-blood-sm">Side-Dish</td>
                      <td>10</td>
                      <td class="text-blood-sm">-</td>
                      <td class="text-blood-sm">Rp.155.000</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
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
      menu: false,
      product: [
        {
          id: 1,
          name: 'Fried Rice Chiken Noya',
          category: 'NS-256-raw',
          sold: '',
          itemRefund: '',
          grossSales: ''
        },
        {
          id: 2,
          name: 'Tumis Berit',
          category: '',
          sold: '',
          itemRefund: '',
          grossSales: ''
        },
        {
          id: 3,
          name: 'Pete Bakar',
          category: '',
          sold: '',
          itemRefund: '',
          grossSales: ''
        },
        {
          id: 4,
          name: 'Semur Jengkol',
          category: '',
          sold: '',
          itemRefund: '',
          grossSales: ''
        },
        {
          id: 1,
          name: 'Nasi Pake Sayur Koll',
          category: '',
          sold: '',
          itemRefund: '',
          grossSales: ''
        }
      ]
    }
  },
  computed: {
    dateRangeText () {
      return this.dates.join(' ~ ')
    }
  },
  watch: {
    // dates (val) {
    //   console.log(val)
    //   const [year, month, day] = val[0].split('-')
    //   const [year1, month1, day1] = val[1].split('-')
    //   this.dates[0] = `${month}/${day}/${year}`
    //   this.dates[1] = `${month1}/${day1}/${year1}`
    // }
  },
  methods: {
  }
}
</script>
