<template>
  <div>
    <v-card class="pb-6" outlined>
      <v-card-title class="app-subtitle">Top Customer</v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead style="background-color:#FDB52630">
            <tr>
              <th class="text-left py-5" style="color:#FDB526">Customer ID</th>
              <th class="text-left py-5" style="color:#FDB526">Total Transaction</th>
              <th class="text-left py-5" style="color:#FDB526">Transaction Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data" :key="item.name">
              <td class="py-5">{{ item.customer_id }}</td>
              <td class="py-5">{{ item.total_transaction }}</td>
              <td class="py-5">{{ item.transaction_amount }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CardTopCustomer',
  props: ['data']
}
</script>
