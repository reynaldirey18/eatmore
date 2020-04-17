<template>
  <div>
    <h1 class="app-title mb-5">Customer Overview</h1>
    <card-customer-summary></card-customer-summary>
    <v-row>
      <v-col cols="6">
        <card-top-customer :data="topCustomer"></card-top-customer>
      </v-col>
      <v-col cols="6">
        <card-top-location></card-top-location>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import CardCustomerSummary from '@/views/Customer/components/CardCustomerSummary'
import CardTopCustomer from '@/views/Customer/components/CardTopCustomer'
import CardTopLocation from '@/views/Customer/components/CardTopLocation'
export default {
  name: 'Customer Summary',
  components: {
    CardCustomerSummary,
    CardTopCustomer,
    CardTopLocation
  },
  data () {
    return {
      topCustomer: [
        {
          customer_id: 'DarkSider1',
          total_transaction: 41,
          transaction_amount: 'Rp 7.300.000'
        },
        {
          customer_id: 'the_bings',
          total_transaction: 78,
          transaction_amount: 'Rp 16.300.000'
        },
        {
          customer_id: 'DarkSider1',
          total_transaction: 41,
          transaction_amount: 'Rp 7.300.000'
        },
        {
          customer_id: 'Bings',
          total_transaction: 78,
          transaction_amount: 'Rp 16.380.000'
        },
        {
          customer_id: 'Bingsss',
          total_transaction: 41,
          transaction_amount: 'Rp 7.300.000'
        },
        {
          customer_id: 'the_bings',
          total_transaction: 78,
          transaction_amount: 'Rp 16.300.000'
        },
        {
          customer_id: 'DarkSider1',
          total_transaction: 41,
          transaction_amount: 'Rp 7.300.000'
        },
        {
          customer_id: 'the_bings',
          total_transaction: 78,
          transaction_amount: 'Rp 16.300.000'
        }
      ]
    }
  }
}
</script>
