<template>
  <div>
    <card-transaction-report></card-transaction-report>
    <div class="mt-8">
      <v-card>
        <div class="d-flex">
          <v-card-title class="app-subtitle">Transaction History</v-card-title>
          <v-spacer></v-spacer>
        </div>
        <app-datatable
          name="Customer"
          :headers="headers"
          url="https://reqres.in/api/users"
          :perPage="10"
        >
        </app-datatable>
      </v-card>
    </div>
  </div>
</template>

<script>
import AppDatatable from '@/components/AppDataTable'
import CardTransactionReport from '@/views/Customer/components/CardTransactionReport'
export default {
  name: 'TransactionHistory',
  components: {
    AppDatatable,
    CardTransactionReport
  },
  data () {
    return {
      headers: [
        {
          text: 'Order ID',
          value: 'id'
        },
        {
          text: 'Date',
          value: 'email'
        },
        {
          text: 'Transaction Amount',
          value: 'transaction_amount'
        },
        {
          text: 'Status',
          value: 'status'
        }
      ],
      items: []
    }
  }
}
</script>
