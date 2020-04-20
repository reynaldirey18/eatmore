<template>
  <div>
    <div class="d-flex">
      <h1 class="app-title mb-5">Add Rewards</h1>
      <v-spacer></v-spacer>
      <v-btn color="#FDB526" @click.prevent="handleCreateReward" dark><span class="text-capitalize">Create Rewards</span></v-btn>
    </div>
    <v-card class="pb-6" outlined>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'LoyaltyRewardCard',
  data () {
    return {
    }
  },
  methods: {
    handleCreateReward () {
      this.$emit('setAddReward', false)
    }
  }
}
</script>
