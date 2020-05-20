<template>
  <div class="px-4 py-6">
    <h1 class="app-title mb-10">Email</h1>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <v-form @submit.prevent="handleSubmit(saveChange)">
        <p class="app-title-small ma-0">Business Email</p>
        <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
          <v-text-field
            placeholder="Eg. resto@resto.com"
            :error-messages="errors"
            type="email"
            v-model="businessEmail"
            single-line
            dense
            outlined
          ></v-text-field>
        </ValidationProvider>
        <div class="mt-8 d-flex justify-end align-end">
          <v-btn type="submit" color="#FDB526" dark :loading="loading">save change</v-btn>
        </div>
      </v-form>
    </ValidationObserver>

    <!-- dialog success -->
    <v-dialog v-model="dialog" persistent max-width="350">
      <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
        <img src="@/assets/img/success.png" alt="success" class="mx-auto">
        <v-card-title class="title-card mx-auto">Data has been saved</v-card-title>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="dialog = false"
            color="#FDB526" class="mt-3 w-full"
            width="100%"
            dark>
            <span class="text-capitalize">Okay</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- dialog failed -->
    <v-dialog v-model="dialog2" persistent max-width="350">
      <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
        <v-icon color="#F32626" size="100px">mdi-alert-circle-outline</v-icon>
        <v-card-title class="title-card mx-auto">Failed to save data</v-card-title>
        <p class="mx-auto">{{ errorMessage }}</p>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="dialog2 = false"
            color="#FDB526" class="mt-3 w-full"
            width="100%"
            dark>
            <span class="text-capitalize">Okay</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('outlet')

export default {
  data () {
    return {
      businessEmail: null,
      loading: false,
      dialog: false,
      dialog2: false,
      errorMessage: null
    }
  },
  mounted () {
    this.$store.dispatch('outlet/viewProfile')
  },
  computed: {
    ...mapState({
      dataProfil: state => state.dataProfil
    })
  },
  watch: {
    dataProfil (newVal) {
      this.businessEmail = newVal.outlet_email
    }
  },
  methods: {
    saveChange () {
      var allData = {}
      allData.outlet_email = this.businessEmail
      var formData = new FormData()
      for (var key in allData) {
        formData.append(key, allData[key])
      }

      this.$store.commit('outlet/SET_EDIT', formData)
      this.$store.dispatch('outlet/editProfile')
        .then(response => {
          const res = response.data
          if (res.status) {
            this.dialog = true
          } else {
            this.loading = false
          }
        }).catch((error) => {
          const message = error.response.data.message
          this.errorMessage = message
          this.dialog2 = true
          this.loading = false
        })
    }
  }
}
</script>
