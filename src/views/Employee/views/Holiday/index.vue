<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">Holidays</h1>
      <v-btn color="#FDB526" dark small width="160px" @click="goToAdd">Add Holiday</v-btn>
    </div>
    <v-card class="pa-6 mt-6 d-flex" outlined min-height="400px" v-if="holidays.length < 1">
      <div class="not-found d-flex flex-column">
        <img src="@/assets/img/illustration1.png" alt="Holiday Not Found">
        <p class="text-bold mt-2">Don’t Have Any Holiday Yet!</p>
        <p class="mt-2">Add some holiday now to make your employee keep productive</p>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      holidays: []
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
