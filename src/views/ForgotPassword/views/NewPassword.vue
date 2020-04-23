<template>
  <div class="modal">
    <div class="card">
      <img src="@/assets/img/success.png" alt="success">
      <h1 class="title-card">Link Sent!</h1>
      <p>We sent a link to reset your password</p>
      <v-btn block color="#FDB526" dark class="button-success">Okay</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  height: 100vh;
  background-color: #000;
  opacity: .8;
  display: flex;
  .card {
    padding: 40px;
    background-color: #fff;
    width: 25vw;
    margin: auto;
    border-radius: 20px;
    text-align: center;
    img {
      height: 180px;
      margin-bottom: 20px;
    }
    .title-card {
      font-weight: 700;
      margin-bottom: 10px;
    }
    .v-btn {
      margin-top: 20px;
    }
  }
}
</style>
