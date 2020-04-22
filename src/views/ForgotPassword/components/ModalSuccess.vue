<template>
  <div class="modal">
    <div class="card">
      <img src="@/assets/img/success.png" alt="success">
      <h1 class="title-card">Link Sent!</h1>
      <p>We sent a link to reset your password</p>
      <v-btn block color="#FDB526" dark class="button-success" @click="closeModal">Okay</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal () {
      this.$emit('close', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  .card {
    padding: 40px;
    background-color: #fff;
    width: 25vw;
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
