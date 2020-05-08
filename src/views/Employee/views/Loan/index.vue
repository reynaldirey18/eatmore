<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between align-center">
      <h1 class="app-title">Loan</h1>
      <v-btn color="#FDB526" dark small width="160px">Add New Loan</v-btn>
    </div>
    <v-card class="pa-6 mt-6 d-flex" outlined min-height="400px" v-if="loan.length < 1">
      <div class="not-found d-flex flex-column">
        <img src="@/assets/img/illustration2.png" alt="Loan Not Found">
        <p class="text-bold mt-2">Don’t Have Any Loan Yet!</p>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AppLoan',
  data () {
    return {
      loan: []
    }
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  margin: auto;
  width: 100%;
  img {
    margin: auto;
    width: 30%;
  }
  p {
    margin: auto;
    color: black;
  }
}
</style>
