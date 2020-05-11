<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between align-center">
      <h1 class="app-title">Attendance - Leaves</h1>
      <v-btn color="#FDB526" dark small>Add New Leave</v-btn>
    </div>
    <v-card class="pa-6 mt-6 d-flex" outlined min-height="400px" v-if="attendance.length < 1">
      <div class="not-found d-flex flex-column">
        <img src="@/assets/img/illustration2.png" alt="No Attendance">
        <p class="text-bold mt-2">No Attendance Yet!</p>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      attendance: []
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
