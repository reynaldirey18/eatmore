<template>
  <div>
    <v-card outlined>
      <v-card-title class="app-subtitle">Top Customer</v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead style="background-color:#FDB52630">
            <tr>
              <th class="text-left" style="color:#FDB526">Customer ID</th>
              <th class="text-left" style="color:#FDB526">Total Transaction</th>
              <th class="text-left" style="color:#FDB526">Transaction Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data" :key="item.name">
              <td>{{ item.customer_id }}</td>
              <td>{{ item.total_transaction }}</td>
              <td>{{ item.transaction_amount }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Card Top Customer',
  props: ['data']
}
</script>
