<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">Reimbursement</h1>
      <v-btn color="#FDB526" dark small width="160px" @click="goToAdd">New Reimbursement</v-btn>
    </div>
    <v-card class="pa-6 mt-6 d-flex flex-column" outlined>
      <div class="header d-flex">
        <div class="image-reimburse align-self-end ml-6">
          <img src="@/assets/img/reimbursement_illustrate.png" alt="Illustration">
        </div>
        <div class="summary d-flex flex-row justify-space-between align-end pa-6 pl-12 pr-12">
          <div class="approved ml-10">
            <p class="app-title-small">Total Approved</p>
            <p class="text-blue-sm"><span class="text-36 mr-1">0</span>Records</p>
          </div>
          <div class="reimbursed">
            <p class="app-title-small">Total Reimbursed</p>
            <p class="text-green"><span class="text-36 mr-1">0</span>Records</p>
          </div>
          <div class="rejected">
            <p class="app-title-small">Total Rejected</p>
            <p class="text-red"><span class="text-36 mr-1">0</span>Records</p>
          </div>
          <div class="request mr-10">
            <p class="app-title-small">Total Request</p>
            <p class="text-orange-sm"><span class="text-36 mr-1">0</span>Records</p>
          </div>
        </div>
      </div>
      <div class="not-found d-flex flex-column mt-12 mb-12" v-if="reimbursement.length < 1">
        <img src="@/assets/img/employee_not_found.png" alt="Reimbursement Not Found">
        <p class="text-bold mt-4">Seems Like You Don’t Have Any Reimbursement</p>
      </div>
      <div class="table mt-6" v-else-if="reimbursement.length >= 1">
        <v-data-table
          :headers="headers"
          :items="reimbursement"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.actions="{item}">
            <div class="d-flex flex-row align-center justify-end" v-if="item.id < 3">
              <v-btn color="#FDB526" small dark @click="approveReimburse(item)" class="mr-1">Approve</v-btn>
              <v-btn icon color="#CCCCCC" @click="goToEdit(item)">
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </div>
            <div v-else>
              <v-btn color="#999999" small dark class="mr-1">Approved</v-btn>
            </div>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4" v-if="itemsPerPage >= reimbursement.length">
            Showing {{reimbursement.length}} of {{reimbursement.length}} Records
          </div>
          <div class="ma-4" v-else>
            Showing {{itemsPerPage}} of {{reimbursement.length}} Records
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
  data () {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: 'Ref Id', value: 'ref' },
        { text: 'Employee Name', value: 'name' },
        { text: 'Division Name', value: 'division' },
        { text: 'Expense Category', value: 'category' },
        { text: 'Transaction Date', value: 'transactionDate' },
        { text: 'Created Date', value: 'createdDate' },
        { text: 'Amount', value: 'amount' },
        { text: '', value: 'actions', sortable: false }
      ],
      reimbursement: [
        {
          id: 1,
          ref: '#12534123',
          name: 'Theresa Bell',
          division: 'Cashier',
          category: 'Transportation',
          transactionDate: 'June 9, 2020',
          createdDate: 'June 9, 2020',
          amount: 'Rp. 500.000'
        },
        {
          id: 2,
          ref: '#12534123',
          name: 'Kristin Williamson',
          division: 'Cashier',
          category: 'Transportation',
          transactionDate: 'June 9, 2020',
          createdDate: 'June 9, 2020',
          amount: 'Rp. 500.000'
        },
        {
          id: 3,
          ref: '#12534123',
          name: 'Irma Nguyen',
          division: 'Cashier',
          category: 'Transportation',
          transactionDate: 'June 9, 2020',
          createdDate: 'June 9, 2020',
          amount: 'Rp. 500.000'
        }
      ]
    }
  },
  methods: {
    goToAdd () {
      this.$router.push('/employee/new-reimbursement')
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
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
}
.header {
  width: 100%;
  height: 178px;
  background-color: #F4F5F6;
  border-radius: 4px;
  .image-reimburse {
    img{
      height: 150px;
    }
  }
}
.summary {
  width: 100%;
}
</style>
