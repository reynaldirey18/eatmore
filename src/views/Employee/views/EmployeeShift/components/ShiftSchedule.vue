<template>
  <div class="px-4">
    <div class="mt-4 mb-5 d-flex flex-row justify-space-between align-center">
      <h1 class="app-subtitle">Date Schedule Employee</h1>
    </div>
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
        <div class="d-flex align-center flex-1 mt-3">
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
          v-model="value"
          color="#FDB526"
          :type="type"
          :events="events"
          :event-overlap-mode="mode"
          :event-overlap-threshold="30"
          :show-month-on-first="false"
          :event-color="getEventColor"
          @change="getEvents"
          @click:date="dialog = true"
        ></v-calendar>
      </v-sheet>
    </div>
    <div class="notes d-flex flex-row align-center">
      <v-icon color="#3D87F4" size="8px">mdi-checkbox-blank-circle</v-icon>
      <p class="ml-2 mt-4">Working</p>
      <v-icon color="#F32626" size="8px" class="ml-8">mdi-checkbox-blank-circle</v-icon>
      <p class="ml-2 mt-4">Holiday</p>
    </div>
  </div>
</template>

<script>
import * as moment from 'moment'

export default {
  name: 'AppShiftSchedule',
  data () {
    return {
      value: moment().format('YYYY-MM-DD'),
      mode: 'stack',
      type: 'month',
      colors: ['#3D87F4', '#F32626'],
      names: ['Working', 'Holiday'],
      events: [
        {
          name: 'Shift Siang',
          start: '2020-5-5 08:00',
          end: '2020-5-5 18:00',
          color: '#3D87F4'
        },
        {
          name: 'Shift Malam',
          start: '2020-5-5 18:00',
          end: '2020-5-6 06:00',
          color: '#3D87F4'
        },
        {
          name: 'Shift Libur',
          start: '2020-5-8 06:00',
          end: '2020-5-9 18:00',
          color: '#F32626'
        },
        {
          name: 'Shift Kuda',
          start: '2020-5-17 06:00',
          end: '2020-5-23 18:00',
          color: '#3D87F4'
        }
      ]
    }
  },
  computed: {
    formatedDateTitle () {
      return moment(this.value).format('MMMM, YYYY')
    }
  },
  methods: {
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    getEventColor (event) {
      return event.color
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
