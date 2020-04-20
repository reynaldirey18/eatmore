<template>
  <div>
    <div class="d-flex">
      <h1 class="app-title mb-5">Reward</h1>
      <v-spacer></v-spacer>
      <v-btn color="#FDB526" flat dark><span class="text-capitalize">Add New Rewards</span></v-btn>
    </div>
    <v-card class="pb-6" outlined>
      <v-simple-table>
        <template v-slot:default>
          <thead style="background-color:#FDB52630">
            <tr>
              <th class="text-left py-3" style="color:#FDB526">Title</th>
              <th class="text-left py-3" style="color:#FDB526">Min Transaction</th>
              <th class="text-left py-3" style="color:#FDB526">Start Period</th>
              <th class="text-left py-3" style="color:#FDB526">End Period</th>
              <th class="text-left py-3" style="color:#FDB526">Reward</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reward in rewardData" :key="reward.title">
              <td class="py-5">{{ reward.title }}</td>
              <td class="py-5">{{ reward.min_transaction }}</td>
              <td class="py-5">{{ reward.start_period }}</td>
              <td class="py-5">{{ reward.end_period }}</td>
              <td class="py-5">{{ reward.reward }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
        <div class="d-flex">
          <v-spacer></v-spacer>
          <div>
            <v-pagination
              color="#FDB526"
              v-model="page"
              :length="4"
            ></v-pagination>
          </div>
        </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'LoyaltyReward Card',
  data () {
    return {
      page: 1,
      rewardData: [
        {
          title: '50% Cashback',
          min_transaction: 'Rp. 100.000',
          start_period: 'Mar, 3, 2020',
          end_period: 'Dec, 19, 2020',
          reward: 'Voucher'
        },
        {
          title: '50% Cashback',
          min_transaction: 'Rp. 100.000',
          start_period: 'Mar, 3, 2020',
          end_period: 'Dec, 19, 2020',
          reward: 'Voucher'
        },
        {
          title: '50% Cashback',
          min_transaction: 'Rp. 100.000',
          start_period: 'Mar, 3, 2020',
          end_period: 'Dec, 19, 2020',
          reward: 'Voucher'
        }
      ]
    }
  }
}
</script>
