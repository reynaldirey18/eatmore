<template>
  <div>
    <div class="send-link">
      <div class="card">
        <img src="@/assets/img/shield.png" alt="" class="img-shield center">
        <div class="card-item">
          <h1 class="title-card">Have Troubles Logging In?</h1>
          <span>Enter your email and we'll send you a link to get back into your account.</span>
          <div class="form-input">
            <p class="label-form">Email</p>
            <v-form ref="form">
              <v-text-field
                v-model="email"
                type="email"
                outlined
                dense
              >
              </v-text-field>
            </v-form>
          </div>
        </div>
        <v-btn block color="#FDB526" dark class="button-login" @click="sendLink">Send Login Link</v-btn>
        <v-btn text class="back" color="#F32626" @click="getBack">Back</v-btn>
      </div>
      <modal-success v-if="modal" @close="closeModal"></modal-success>
    </div>
    <div class="background-modal" v-if="modal"></div>
  </div>
</template>

<script>
import modalSuccess from '../components/ModalSuccess'

export default {
  data () {
    return {
      modal: false
    }
  },
  components: {
    modalSuccess
  },
  methods: {
    getBack () {
      this.$router.push('/login')
    },
    sendLink () {
      this.modal = true
    },
    closeModal (val) {
      this.modal = val
    }
  }
}
</script>

<style lang="scss" scoped>
.send-link {
  background-color: #e5e5e5;
  height: 100vh;
  display: flex;
}
.card {
  padding: 20px 50px 90px 50px;
  margin: auto;
  background-color: #fff;
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .card-item {
    text-align: center;
    p {
      text-align: left;
    }
  }
  .title-card {
    margin-bottom: 15px;
  }
  .back {
    margin-top: 20px;
  }
}

.img-shield {
  height: 130px;
  margin-top: 30px;
  margin-bottom: 20px;
}

.background-modal {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .8;
}
.modal-success {
}
</style>
