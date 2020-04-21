<template>
    <v-card class="mx-auto mt-3 pb-6" outlined>
      <div class="d-flex justify-space-between">
        <v-card-title class="app-subtitle">Transaction Reports</v-card-title>
          <v-spacer></v-spacer>
          <div style="width:141px">
            <v-overflow-btn
              class="ma-2"
              :items="chartTypeList"
              v-model="chartType"
              target="#dropdown-example-1"
            ></v-overflow-btn>
          </div>
      </div>
      <div>
        <card-transaction-history-daily key="daily" v-if="chartType === 0"></card-transaction-history-daily>
        <card-transaction-history-monthly key="monthly" v-else-if="chartType === 1"></card-transaction-history-monthly>
        <card-transaction-history-yearly key="yearly" v-else-if="chartType === 2"></card-transaction-history-yearly>
      </div>
    </v-card>
</template>

<script>
import CardTransactionHistoryDaily from './CardTransactionHistoryDaily'
import CardTransactionHistoryMonthly from './CardTransactionHistoryMonthly'
import CardTransactionHistoryYearly from './CardTransactionHistoryYearly'
export default {
  components: {
    CardTransactionHistoryDaily,
    CardTransactionHistoryMonthly,
    CardTransactionHistoryYearly
  },
  data () {
    return {
      tab: 1,
      chartType: 0,
      chartTypeList: [
        { text: 'Daily', value: 0 },
        { text: 'Mounthly', value: 1 },
        { text: 'Yearly', value: 2 }
      ]
    }
  }
}
</script>
