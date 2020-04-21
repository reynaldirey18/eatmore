<template>
  <div>
    <card-transaction-report></card-transaction-report>
  </div>
</template>

<script>
import CardTransactionReport from '@/views/Customer/components/CardTransactionReport'
export default {
  name: 'TransactionHistory',
  components: {
    CardTransactionReport
  },
  data () {
    return {
      data: ''
    }
  }
}
</script>
