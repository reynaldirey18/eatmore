<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between align-center">
      <h1 class="app-title">Loan</h1>
      <v-btn color="#FDB526" dark small width="160px">Add New Loan</v-btn>
    </div>
    <v-card outlined class="mt-6 pa-4 pb-8">
      <div class="border-bottom">
        <p class="app-subtitle">Loan Details</p>
      </div>
      <div class="form-input">
        <p class="label-form">Employee Name</p>
        <v-autocomplete
          v-model="name"
          :items="items"
          dense
          filled
          placeholder="Eg. John Doe"
          outlined
        ></v-autocomplete>
        <p class="label-form">Loan Type</p>
        <v-text-field
          v-model="type"
          placeholder="Eg. Education"
          outlined
          dense
        ></v-text-field>
        <p class="label-form">Description</p>
        <v-textarea
          outlined
          dense
        ></v-textarea>
        <!-- loan calculator -->
        <p class="app-subtitle">Loan Calculator</p>
        <p class="label-form">Amount</p>
        <v-text-field
          v-model="amount"
          prefix="Rp."
          placeholder="000.000"
          outlined
          dense
        ></v-text-field>
        <div class="payment d-flex flex-row justify-space-between">
          <div class="payment-date w-40">
            <p class="label-form">First Payment Date</p>
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="paymentDate"
                  outlined
                  dense
                  readonly
                  v-on="on"
                >
                  <template v-slot:prepend-inner>
                    <div class="icon-input">
                      <v-icon size="20" color="black">mdi-calendar-month</v-icon>
                    </div>
                  </template>
                </v-text-field>
              </template>
              <v-date-picker v-model="paymentDate" @input="menu = false"></v-date-picker>
            </v-menu>
          </div>
          <div class="term w-50">
            <p class="label-form">Term</p>
            <v-select
              :items="term"
              v-model="selectedTerm"
              outlined
              dense
            ></v-select>
          </div>
          <div class="month px-2 py-2 d-flex mt-6">
            <p class="ma-auto">Month</p>
          </div>
        </div>
        <v-btn color="#FDB526" small dark v-if="calculate === true" @click="goCalculate">Calculate Now</v-btn>
        <v-btn color="#CCCCCC" small dark v-else>Calculate Now</v-btn>
        <div class="table mt-6" v-if="calculation">
          <v-data-table
            :headers="headers"
            :items="calculations"
            hide-default-footer
            class="elevation-1"
          >
            <template v-slot:item.amount="{item}">
              <p class="text-green-md my-auto">{{ item.amount }}</p>
            </template>
            <template v-slot:item.balance="{item}">
              <p class="text-red-md my-auto">{{ item.balance }}</p>
            </template>
          </v-data-table>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AppAddLoan',
  data () {
    return {
      menu: false,
      paymentDate: null,
      amount: null,
      name: null,
      items: ['Steve Roger', 'Djamal Hamadi', 'Peter Parker', 'Tony Stark'],
      selectedTerm: 1,
      term: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      calculation: false,
      headers: [
        { text: 'Date', value: 'date', align: 'center', sortable: false },
        { text: 'Amount to Pay', value: 'amount', align: 'center', sortable: false },
        { text: 'Balance', value: 'balance', align: 'center', sortable: false }
      ],
      calculations: [
        {
          id: 1,
          date: 'Jun 2, 2020',
          amount: 'Rp. 1.000.000',
          balance: 'Rp. 4.000.000'
        },
        {
          id: 2,
          date: 'Jun 2, 2020',
          amount: 'Rp. 1.000.000',
          balance: 'Rp. 3.000.000'
        },
        {
          id: 3,
          date: 'Jun 2, 2020',
          amount: 'Rp. 1.000.000',
          balance: 'Rp. 2.000.000'
        },
        {
          id: 4,
          date: 'Jun 2, 2020',
          amount: 'Rp. 1.000.000',
          balance: 'Rp. 1.000.000'
        },
        {
          id: 5,
          date: 'Jun 2, 2020',
          amount: 'Rp. 1.000.000',
          balance: 'Rp. 0'
        }
      ]
    }
  },
  computed: {
    calculate () {
      if (this.paymentDate !== null & this.selectedTerm !== null && this.amount !== null) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    goCalculate () {
      this.calculation = true
    }
  }
}
</script>

<style lang="scss" scoped>
.month {
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 75px;
  height: 40px;
}
</style>
