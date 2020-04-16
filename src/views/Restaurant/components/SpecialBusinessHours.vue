<template>
    <div class="px-4 py-6">
        <h1 class="app-title">Special Business Hours</h1>
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
                <v-icon>mdi-chevron-left</v-icon>
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
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
            </v-sheet>
            <v-sheet height="600">
            <v-calendar
                ref="calendar"
                v-model="value"
                :type="type"
                :events="events"
                :event-overlap-mode="mode"
                :event-overlap-threshold="30"
                :show-month-on-first="false"
                @change="getEvents"
            ></v-calendar>
            </v-sheet>
        </div>
    </div>
</template>

<script>
import * as moment from 'moment'
export default {
  data () {
    return {
      value: moment().format('YYYY-MM-DD'),
      mode: 'stack',
      type: 'month',
      events: [
        {
          name: '',
          start: '2020-04-01',
          end: '2020-04-01',
          color: 'blue'
        }
      ]
    }
  },
  computed: {
    formatedDateTitle () {
      return moment(this.value).format('MMMM, YYYY')
    }
  }
}
</script>

<style lang="scss" scoped>
.my-event {
  overflow: hidden;
  width: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #FF0000;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}
</style>
