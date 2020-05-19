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
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          color="#FDB526"
          v-model="value"
          :type="type"
          :events="events"
          :event-overlap-mode="mode"
          :event-overlap-threshold="30"
          :show-month-on-first="false"
          @change="getEvents"
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
                    :return-value.sync="time"
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
                    ref="menu"
                    v-model="menu4"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="time"
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
                      @click:minute="$refs.menu.save(timeEnd)"
                    ></v-time-picker>
                  </v-menu>
                </div>
              </v-col>
            </v-row>
          </div>

          <v-card-actions class="d-flex flex-column justify-center">
            <v-btn color="#FDB526" dark block @click="dialog = false" class="mx-auto">Save Changes</v-btn>
            <v-btn color="red" text block @click="dialog = false" class="mt-3 mx-auto">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import * as moment from 'moment'
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
      value: moment().format('YYYY-MM-DD'),
      mode: 'stack',
      type: 'month',
      events: [
        {
          name: '',
          start: '2020-05-21',
          end: '2020-05-21',
          color: 'blue'
        },
        {
          name: '',
          start: '2020-05-25',
          end: '2020-05-25',
          color: 'blue'
        }
      ]
    }
  },
  computed: {
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
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
