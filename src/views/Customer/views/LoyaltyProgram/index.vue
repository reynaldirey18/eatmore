<template>
  <div>
    <card-loyalty-reward></card-loyalty-reward>
    <card-eligible-customer></card-eligible-customer>
  </div>
</template>

<script>
import CardLoyaltyReward from '@/views/Customer/components/CardLoyaltyReward'
import CardEligibleCustomer from '@/views/Customer/components/CardEligibleCustomer'
export default {
  name: 'LoyaltyProgram',
  components: {
    CardLoyaltyReward,
    CardEligibleCustomer
  },
  data () {
    return {
      data: ''
    }
  }
}
</script>
