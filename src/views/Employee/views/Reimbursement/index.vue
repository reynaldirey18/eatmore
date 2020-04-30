<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">Reimbursement</h1>
      <v-btn color="#FDB526" dark small width="160px" @click="goToAdd">New Reimbursement</v-btn>
    </div>
    <v-card class="pa-6 mt-6 d-flex flex-column" outlined min-height="650px" v-if="reimbursement.length < 1">
      <div class="header d-flex">
        <div class="image-reimburse align-self-end ml-6">
          <img src="@/assets/img/reimbursement_illustrate.png" alt="Illustration">
        </div>
        <div class="summary d-flex flex-row justify-space-between align-end pa-6 pl-12 pr-12">
          <div class="approved ml-10">
            <p class="app-title-small">Total Approved</p>
            <p class="text-blue-sm"><span class="text-36 mr-1">0</span>Records</p>
          </div>
          <div class="reimbursed">
            <p class="app-title-small">Total Reimbursed</p>
            <p class="text-green"><span class="text-36 mr-1">0</span>Records</p>
          </div>
          <div class="rejected">
            <p class="app-title-small">Total Rejected</p>
            <p class="text-red"><span class="text-36 mr-1">0</span>Records</p>
          </div>
          <div class="request mr-10">
            <p class="app-title-small">Total Request</p>
            <p class="text-orange-sm"><span class="text-36 mr-1">0</span>Records</p>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      reimbursement: []
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
.header {
  width: 100%;
  height: 178px;
  background-color: #F4F5F6;
  border-radius: 4px;
  .image-reimburse {
    img{
      height: 150px;
    }
  }
}
.summary {
  width: 100%;
}
</style>
