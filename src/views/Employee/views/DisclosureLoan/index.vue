<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between align-center">
      <h1 class="app-title">DISCLOSURE</h1>
      <v-btn color="#FDB526" dark small>Print PDF</v-btn>
    </div>
    <v-card outlined class="mt-6 pa-6">
      <div class="d-flex flex-row justify-space-between align-center border-bottom">
        <div>
          <p class="app-title-md">COMPANY NAME</p>
        </div>
        <div class="d-flex flex-column text-right">
          <p class="app-title-md">DISCLOSURE STATEMENT OF LOAN APPLICATION</p>
          <p class="text-grey-20"># DO-1527-001</p>
          <p>Date: 16/04/2020</p>
        </div>
      </div>
      <div class="border-bottom">
        <v-row class="mt-8">
          <v-col cols="6">
            <p class="text-grey-18">Lender:</p>
            <v-row>
              <v-col cols="4" class="py-0"><p class="text-grey-14">Company Name:</p></v-col>
              <v-col cols="8" class="py-0"><p class="text-14">PT. Indah Makmur Amarta</p></v-col>
            </v-row>
            <v-row>
              <v-col cols="4" class="py-0"><p class="text-grey-14">Approved by:</p></v-col>
              <v-col cols="8" class="py-0"><p class="text-14">Andi Suswoyo</p></v-col>
            </v-row>
            <v-row>
              <v-col cols="4" class="py-0"><p class="text-grey-14">Division of:</p></v-col>
              <v-col cols="8" class="py-0"><p class="text-14">Finance</p></v-col>
            </v-row>
            <v-row>
              <v-col cols="4" class="py-0"><p class="text-grey-14">Mobile Number:</p></v-col>
              <v-col cols="8" class="py-0"><p class="text-14">+71 9622-5162-2372</p></v-col>
            </v-row>
            <v-row>
              <v-col cols="4" class="py-0"><p class="text-grey-14">Address:</p></v-col>
              <v-col cols="8" class="py-0"><p class="text-14">211, Jalan Tun Sambanthan, Brickfields, 50470 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia</p></v-col>
            </v-row>
          </v-col>
          <v-col cols="6">
            <p class="text-grey-18">Applicant:</p>
            <v-row>
              <v-col cols="4" class="py-0"><p class="text-grey-14">Employee Name:</p></v-col>
              <v-col cols="8" class="py-0"><p class="text-14">Djamal Hamadi</p></v-col>
            </v-row>
            <v-row>
              <v-col cols="4" class="py-0"><p class="text-grey-14">Division of:</p></v-col>
              <v-col cols="8" class="py-0"><p class="text-14">Cashier</p></v-col>
            </v-row>
            <v-row>
              <v-col cols="4" class="py-0"><p class="text-grey-14">Loan Type:</p></v-col>
              <v-col cols="8" class="py-0"><p class="text-14">Education</p></v-col>
            </v-row>
            <v-row>
              <v-col cols="4" class="py-0"><p class="text-grey-14">Mobile Number:</p></v-col>
              <v-col cols="8" class="py-0"><p class="text-14">+71 9622-5162-2372</p></v-col>
            </v-row>
            <v-row>
              <v-col cols="4" class="py-0"><p class="text-grey-14">Address:</p></v-col>
              <v-col cols="8" class="py-0"><p class="text-14">Jl. Setrasari Kulon V No.6, 678201, Bandung, Jawa Barat, Indonesia</p></v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div class="border-bottom d-flex flex-row py-4">
        <p class="text-grey-14 my-auto">Termin:</p>
        <p class="text-14 my-auto ml-3"><b>5 months</b></p>
      </div>
      <div class="table py-4">
        <p class="text-grey-18">Loan Amount:</p>
        <div class="table mt-6">
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
        <p class="text-grey-sm mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vero vitae laudantium labore odio excepturi ratione aspernatur reprehenderit placeat alias maxime quibusdam sunt adipisci quam dolorem corporis ad, nesciunt accusantium sint pariatur est? Earum, saepe laudantium eius incidunt similique autem sapiente fugit nihil recusandae modi suscipit, maiores quaerat. Quis, nemo.
        </p>
        <p class="text-grey-sm mt-2"><b>PIC: Andi Suwiryo - Finance Feast Ai</b></p>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
  methods: {
  }
}
</script>
