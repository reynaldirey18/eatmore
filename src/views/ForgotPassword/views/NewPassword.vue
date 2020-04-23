<template>
  <div class="new-password">
    <div class="card">
      <div class="title">
        <h1 class="title-card">Create New Password</h1>
        <span>Please enter your new password</span>
      </div>
      <div class="form-input">
        <p class="label-form">New Password</p>
        <v-form ref="form">
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            :rules="[rules.required, rules.min]"
            hint="At least 6 characters"
            outlined
            dense
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-form>

        <p class="label-form">Re-type Password</p>
        <v-form ref="form">
          <v-text-field
            v-model="reType"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            name="input-10-1"
            outlined
            dense
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-form>
        <v-btn block color="#FDB526" dark @click="resetPass">Reset Password</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      show2: false,
      password: null,
      reType: null,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 6 || 'Min 6 characters'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.new-password {
  background-color: #e5e5e5;
  height: 100vh;
  display: flex;
  .card {
    padding: 60px 50px 90px 50px;
    margin: auto;
    background-color: #fff;
    width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      text-align: center;
      .title-card {
        margin-bottom: 15px;
      }
    }
    .form-input {
      margin-top: 50px;
    }
    .v-btn {
      margin-top: 20px;
    }
  }
}
</style>
