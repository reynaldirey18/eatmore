<template>
  <div>
    <div v-if="addReward" key="add Reward">
      <card-add-reward @setAddReward="setAddReward"></card-add-reward>
    </div>
    <div v-else key="add Reward Off">
      <div class="mb-8">
        <card-loyalty-reward @setAddReward="setAddReward"></card-loyalty-reward>
      </div>
      <div class="mb-8">
        <card-eligible-customer></card-eligible-customer>
      </div>
    </div>
  </div>
</template>

<script>
import CardLoyaltyReward from '@/views/Customer/components/CardLoyaltyReward'
import CardAddReward from '@/views/Customer/components/CardAddReward'
import CardEligibleCustomer from '@/views/Customer/components/CardEligibleCustomer'
export default {
  name: 'LoyaltyProgram',
  components: {
    CardLoyaltyReward,
    CardAddReward,
    CardEligibleCustomer
  },
  data () {
    return {
      addReward: false
    }
  },
  methods: {
    setAddReward (curent) {
      this.addReward = curent
    }
  }
}
</script>
