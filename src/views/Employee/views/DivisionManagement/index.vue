<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">Division Management</h1>
      <v-btn color="#FDB526" dark small width="160px">Add New Division</v-btn>
    </div>
    <v-card class="pa-6 mt-6 d-flex" outlined min-height="400px">
      <div class="not-found d-flex flex-column" v-if="division.length < 1">
        <img src="@/assets/img/employee_not_found.png" alt="Division Not Found">
        <p class="text-bold">You Don't Have Any Division</p>
        <p>Go make some division right now.</p>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      division: []
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
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
}
</style>
