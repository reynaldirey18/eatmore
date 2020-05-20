<template>
  <div class="px-4 py-6">
    <h1 class="app-title mb-10">Business Hours</h1>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <v-form @submit.prevent="handleSubmit(saveChange)">
        <div>
          <p class="app-title-small" style="margin-bottom: 0px">Daily Bussiness</p>
          <div>
            <v-btn
              v-for="(day, i) in businessHours"
              :key="'day' +i"
              class="btn-daylist"
              :color="day.is_active ? '#FDB526' : '#999999'"
              :style="day.is_active ? 'background-color:#FFF8E9': ''"
              height="44"
              outlined
              max-width="125"
              @click="day.is_active = !day.is_active"
            >
              <span class="text-capitalize">{{day.hour_day}}</span>
            </v-btn>
          </div>
        </div>
        <div class="mt-8">
          <div v-for="(item, index) in businessHours" :key="index">
            <div v-if="item.is_active">
              <p class="app-subtitle text-capitalize">{{ item.hour_day }}</p>
              <v-row>
                <v-col cols="6">
                  <div>
                    <p class="app-title-small ma-0">Time Open</p>
                    <ValidationProvider v-slot="{ errors }" name="Time open" rules="required">
                      <v-text-field
                        :error-messages="errors"
                        v-model="item.hour_start_time"
                        @input="updateTime"
                        :value="item.hour_start_time"
                        single-line
                        dense
                        outlined
                      ></v-text-field>
                    </ValidationProvider>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div>
                    <p class="app-title-small ma-0">Time Close</p>
                    <ValidationProvider v-slot="{ errors }" name="Time close" rules="required">
                      <v-text-field
                        placeholder="Eg. 21:00"
                        :error-messages="errors"
                        v-model="item.hour_end_time"
                        :value="item.hour_end_time"
                        @input="updateTime"
                        single-line
                        dense
                        outlined
                      ></v-text-field>
                    </ValidationProvider>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
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
      loading: false,
      dialog: false,
      dialog2: false,
      errorMessage: null
    }
  },
  mounted () {
    this.$store.dispatch('outlet/getBusinessHours')
  },
  computed: {
    ...mapState({
      businessHours: state => state.businessHours
    })
  },
  methods: {
    saveChange () {
      var allData = []
      this.businessHours.forEach(element => {
        var data = {
          hour_id: element.hour_id,
          hour_type: element.hour_type,
          hour_start_time: element.hour_start_time,
          hour_end_time: element.hour_end_time,
          hour_day: element.hour_end_time,
          is_active: element.is_active
        }
        allData.push(data)
      })
      var sendData = {
        business_hours: allData
      }
      this.$store.commit('outlet/NEW_BUSINESS_TIME', sendData)
      this.$store.dispatch('outlet/updateBusinessHours')
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
    },
    updateTime (e) {
      this.$store.commit('UPDATE_TIME_BUSINESS', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-daylist {
  margin-right: 10px;
  background-color: #FAFAFA;
  &last-child {
      margin-right: 0px;
  }
}
</style>
