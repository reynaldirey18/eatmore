<template>
  <div>
    <div class="mb-8">
      <card-loyalty-reward></card-loyalty-reward>
    </div>
    <div class="mb-8">
      <card-eligible-customer></card-eligible-customer>
    </div>
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
