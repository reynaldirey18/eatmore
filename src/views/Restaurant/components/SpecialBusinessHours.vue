<template>
  <div class="px-4 py-6">
    <h1 class="app-title mb-10">Special Business Hours</h1>
    <div>
      <v-sheet
        tile
        height="54"
        color="grey lighten-3"
        class="d-flex"
      >
        <v-btn
          icon
          class="ma-2"
          @click="$refs.calendar.prev()"
        >
          <v-icon color="#3D87F4">mdi-chevron-double-left</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
          <div class="d-flex align-center flex-1">
            <p class="app-subtitle">{{formatedDateTitle}}</p>
          </div>
        <v-spacer></v-spacer>
        <v-btn
          icon
          class="ma-2"
          @click="$refs.calendar.next()"
        >
          <v-icon color="#3D87F4">mdi-chevron-double-right</v-icon>
        </v-btn>
      </v-sheet>
      <v-sheet height="600" v-if="eventsLoaded">
        <v-calendar
          ref="calendar"
          color="#FDB526"
          v-model="value"
          :type="type"
          :events="events"
          :event-overlap-mode="mode"
          :event-overlap-threshold="30"
          :show-month-on-first="false"
          @click:date="showDialog"
        ></v-calendar>
      </v-sheet>
    </div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent width="450">
        <v-card class="pa-4">
          <div class="title-modal px-2">
            <v-card-title class="text-blood pl-0 pt-1 pr-0 pb-3">
              Special Hour
              <v-spacer></v-spacer>
              <v-icon class="float-right"
              @click.prevent="dialog = false">mdi-close</v-icon>
            </v-card-title>
          </div>

          <v-list two-line subheader>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon color="#3D87F4" @click="prevDay">mdi-chevron-double-left</v-icon>
              </v-list-item-avatar>

              <v-list-item-content class="justify-center">
                <v-list-item-title class="text-center" v-text="formatedDateModal.day"></v-list-item-title>
                <v-list-item-subtitle class="text-center" v-text="formatedDateModal.date"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="#3D87F4" @click="nextDay">mdi-chevron-double-right</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>

            <v-list-item style="background-color:#F5F5F5; border-radius: 4px" class="mx-10">
              <v-list-item-content class="justify-center">
                <v-list-item-title v-text="'Set As Closed'"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-switch
                  v-model="isClosed"
                ></v-switch>
              </v-list-item-action>
            </v-list-item>
          </v-list>

          <ValidationObserver ref="form" v-slot="{ handleSubmit }">
            <v-form @submit.prevent="handleSubmit(saveChange)">
              <div class="px-5 mt-5">
                <p class="app-subtitle">Set Business Date</p>
                <v-row>
                  <v-col cols="6">
                    <div>
                      <p class="app-title-small ma-0">Start Date</p>
                      <v-menu
                        v-model="menu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="startDate"
                            readonly
                            single-line
                            dense
                            outlined
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="startDate" @input="menu = false"></v-date-picker>
                      </v-menu>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div>
                      <p class="app-title-small ma-0">End Date</p>
                      <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="endDate"
                            readonly
                            single-line
                            dense
                            outlined
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="endDate" @input="menu2 = false"></v-date-picker>
                      </v-menu>
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div class="px-5">
                <p class="app-subtitle">Set Business Time</p>
                <v-row>
                  <v-col cols="6">
                    <div>
                      <p class="app-title-small ma-0">Time Open</p>
                      <v-menu
                        ref="menu"
                        v-model="menu3"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="timeOpen"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="timeOpen"
                            readonly
                            single-line
                            dense
                            outlined
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-time-picker
                          v-if="menu3"
                          v-model="timeOpen"
                          full-width
                          format="24h"
                          @click:minute="$refs.menu.save(timeOpen)"
                        ></v-time-picker>
                      </v-menu>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div>
                      <p class="app-title-small ma-0">Time End</p>
                      <v-menu
                        ref="menu2"
                        v-model="menu4"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="timeEnd"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="timeEnd"
                            readonly
                            single-line
                            dense
                            outlined
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-time-picker
                          v-if="menu4"
                          v-model="timeEnd"
                          full-width
                          format="24h"
                          @click:minute="$refs.menu2.save(timeEnd)"
                        ></v-time-picker>
                      </v-menu>
                    </div>
                  </v-col>
                </v-row>
              </div>

              <v-card-actions class="d-flex flex-column justify-center">
                <v-btn color="#FDB526" dark block type="submit" class="mx-auto" :loading="loading">Save Changes</v-btn>
                <v-btn color="red" text block @click="dialog = false" class="mt-3 mx-auto">Delete</v-btn>
              </v-card-actions>
            </v-form>
          </ValidationObserver>
        </v-card>
      </v-dialog>
    </v-row>

    <!-- dialog success -->
    <v-dialog v-model="dialog2" persistent max-width="350">
      <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
        <img src="@/assets/img/success.png" alt="success" class="mx-auto">
        <v-card-title class="title-card mx-auto">Data has been saved</v-card-title>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="closeAndNavigate"
            color="#FDB526" class="mt-3 w-full"
            width="100%"
            dark>
            <span class="text-capitalize">Okay</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- dialog failed -->
    <v-dialog v-model="dialog3" persistent max-width="350">
      <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
        <v-icon color="#F32626" size="100px">mdi-alert-circle-outline</v-icon>
        <v-card-title class="title-card mx-auto">Failed to save data</v-card-title>
        <p class="mx-auto">{{ errorMessage }}</p>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="dialog3 = false"
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
import * as moment from 'moment'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('outlet')

export default {
  data () {
    return {
      menu: false,
      menu2: false,
      menu3: false,
      menu4: false,
      startDate: null,
      endDate: null,
      timeOpen: '10:00',
      timeEnd: '22:00',
      isClosed: false,
      dialog: false,
      dialog2: false,
      dialog3: false,
      errorMessage: null,
      loading: false,
      value: moment().format('YYYY-MM-DD'),
      mode: 'stack',
      type: 'month'
    }
  },
  mounted () {
    this.getData()
    // this.events = this.$store.getters['outlet/events']
  },
  computed: {
    eventsLoaded () {
      return this.$store.getters['outlet/eventsLoaded']
    },
    ...mapState({
      events: state => state.events
    }),
    formatedDateTitle () {
      return moment(this.value).format('MMMM, YYYY')
    },
    formatedDateModal () {
      return {
        day: moment(this.value).format('dddd'),
        date: moment(this.value).format('DD MMMM YYYY')
      }
    }
  },
  methods: {
    getData () {
      this.$store.commit('outlet/SET_YEAR', moment().format('YYYY'))
      this.$store.commit('outlet/SET_MONTH', moment().format('MM'))
      this.$store.dispatch('outlet/getSpecialHours')
    },
    closeAndNavigate () {
      this.getData()
      this.dialog2 = false
      this.dialog = false
    },
    showDialog () {
      this.startDate = this.value
      this.endDate = this.value
      this.dialog = true
    },
    nextDay () {
      this.value = moment(this.value).add(24, 'h')
    },
    prevDay () {
      this.value = moment(this.value).subtract(24, 'h')
    },
    saveChange () {
      const allData = {
        hour_day: moment(this.startDate).format('dddd'),
        hour_start_date: this.startDate,
        hour_end_date: this.endDate,
        hour_start_time: this.timeOpen,
        hour_end_time: this.timeEnd,
        hour_description: '-'
      }
      this.$store.commit('outlet/SET_CREATE_SPECIAL', allData)
      this.$store.dispatch('outlet/postSpecialHours')
        .then(response => {
          const res = response.data
          if (res.status) {
            this.dialog2 = true
          } else {
            this.loading = false
          }
        }).catch((error) => {
          const message = error.response.data.message
          this.errorMessage = message
          this.dialog3 = true
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
