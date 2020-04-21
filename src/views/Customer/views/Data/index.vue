<template>
  <div>
    <h1 class="app-title mb-5">Customer Data</h1>
    <v-card class="pb-6" outlined>
      <v-simple-table>
        <template v-slot:default>
          <thead style="background-color:#FDB52630">
            <tr>
              <th class="text-left py-5" style="color:#FDB526">Customer ID</th>
              <th class="text-left py-5" style="color:#FDB526">Email</th>
              <th class="text-left py-5" style="color:#FDB526">Phone Number</th>
              <th class="text-left py-5" style="color:#FDB526">City</th>
              <th class="text-left py-5" style="color:#FDB526">Transaction Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in customerData" :key="item.name">
              <td class="py-5">{{ item.customer_id }}</td>
              <td class="py-5">{{ item.email }}</td>
              <td class="py-5">{{ item.phone_number }}</td>
              <td class="py-5">{{ item.city }}</td>
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
  name: 'CustomerData',
  data () {
    return {
      customerData: [
        {
          customer_id: 'aa',
          email: 'aa@aa.aa',
          phone_number: '111111',
          city: 'aa',
          transaction_amount: 'Rp 11.111'
        }
      ]
    }
  }
}
</script>
