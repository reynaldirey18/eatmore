<template>
  <div class="px-4 py-6">
    <h1 class="app-title mb-10">Business Hours</h1>
    <form>
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
                  <v-text-field
                      placeholder="Eg. 11:00"
                      v-model="item.hour_start_time"
                      single-line
                      dense
                      outlined
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="6">
                <div>
                  <p class="app-title-small ma-0">Time Close</p>
                  <v-text-field
                    placeholder="Eg. 21:00"
                    v-model="item.hour_end_time"
                    single-line
                    dense
                    outlined
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
      <div class="mt-8 d-flex justify-end align-end">
        <v-btn @click.prevent="handleFormSubmit" color="#FDB526" dark><span class="text-capitalize">save change</span></v-btn>
      </div>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('outlet')

export default {
  data () {
    return {
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
    handleFormSubmit () {
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
