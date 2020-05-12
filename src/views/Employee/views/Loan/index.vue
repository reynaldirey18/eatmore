<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between align-center">
      <h1 class="app-title">Loan</h1>
      <v-btn color="#FDB526" dark small width="160px" @click="toAddLoan">Add New Loan</v-btn>
    </div>
    <v-card class="pa-6 mt-6 d-flex" outlined min-height="400px" v-if="loans.length < 1">
      <div class="not-found d-flex flex-column">
        <img src="@/assets/img/illustration2.png" alt="Loan Not Found">
        <p class="text-bold mt-2">Don’t Have Any Loan Yet!</p>
      </div>
    </v-card>
    <v-card class="mt-6" outlined v-else>
      <div class="table">
        <v-data-table
          :headers="headers"
          :items="loans"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.amount="{item}">
            <p class="text-green-md my-auto">{{ item.amount }}</p>
          </template>
          <template v-slot:item.actions="{item}">
            <div class="d-flex flex-row align-center justify-end">
              <v-btn color="#FDB526" small dark class="mr-1" @click="seeDisclosure(item)">See Disclosure</v-btn>
              <v-btn icon color="#CCCCCC" @click="goToEdit(item)">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </div>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4" v-if="itemsPerPage >= loans.length">
            Show {{loans.length}} of {{loans.length}} Loan
          </div>
          <div class="ma-4" v-else>
            Show {{itemsPerPage}} of {{loans.length}} Loan
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
export default {
  name: 'AppLoan',
  data () {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: 'Trans ID', value: 'transId' },
        { text: 'Employee Name', value: 'name' },
        { text: 'Loan Type', value: 'type' },
        { text: 'Amount', value: 'amount' },
        { text: 'Loan Demand Date', value: 'demand' },
        { text: 'Status', value: 'status' },
        { text: 'Approved By', value: 'approvedBy' },
        { text: 'Disclosure', value: 'actions', sortable: false }
      ],
      loans: [
        {
          id: 1,
          transId: '#712637461',
          name: 'Djamal Hamadi',
          type: 'Education',
          amount: 'Rp. 500.000',
          demand: 'Jun 6, 2020',
          status: 'Requested',
          approvedBy: 'Finance Admin'
        },
        {
          id: 2,
          transId: '#712637461',
          name: 'Djamal Hamadi',
          type: 'Education',
          amount: 'Rp. 500.000',
          demand: 'Jun 6, 2020',
          status: 'Requested',
          approvedBy: 'Finance Admin'
        },
        {
          id: 3,
          transId: '#712637461',
          name: 'Djamal Hamadi',
          type: 'Education',
          amount: 'Rp. 500.000',
          demand: 'Jun 6, 2020',
          status: 'Requested',
          approvedBy: 'Finance Admin'
        }
      ]
    }
  },
  methods: {
    toAddLoan () {
      this.$router.push('/employee/add-loan')
    },
    seeDisclosure (item) {
      console.log(item)
      this.$router.push('/employee/disclosure')
    }
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  margin: auto;
  width: 100%;
  img {
    margin: auto;
    width: 30%;
  }
  p {
    margin: auto;
    color: black;
  }
}
</style>
