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
          @click:date="addShift"
        ></v-calendar>
      </v-sheet>
    </div>
    <div class="notes d-flex flex-row align-center">
      <v-icon color="#3D87F4" size="8px">mdi-checkbox-blank-circle</v-icon>
      <p class="ml-2 mt-4">Working</p>
      <v-icon color="#F32626" size="8px" class="ml-8">mdi-checkbox-blank-circle</v-icon>
      <p class="ml-2 mt-4">Holiday</p>
    </div>
    <!-- modal -->
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card class="pa-4">
        <div class="title-modal">
          <v-card-title class="text-blood pl-0 pt-1 pr-0 pb-3">
            Date Schedule Employee
            <v-spacer></v-spacer>
            <v-icon class="float-right"
            @click.prevent="dialog = false">mdi-close</v-icon>
          </v-card-title>
        </div>
        <div class="range-date form-input">
          <v-row>
            <v-col cols="6" class="pb-0 pt-0">
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
                    v-model="dateFrom"
                    label="From"
                    readonly
                    outlined
                    dense
                    v-on="on"
                  >
                    <template v-slot:prepend-inner>
                      <div class="icon-input">
                        <v-icon size="20" color="#FDB526">mdi-calendar-month</v-icon>
                      </div>
                    </template>
                  </v-text-field>
                </template>
                <v-date-picker v-model="dateFrom" @input="menu = false"></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="6" class="pb-0 pt-0">
              <v-menu
                v-model="menu3"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="dateTo"
                    label="To"
                    readonly
                    outlined
                    dense
                    v-on="on"
                  >
                    <template v-slot:prepend-inner>
                      <div class="icon-input">
                        <v-icon size="20" color="#FDB526">mdi-calendar-month</v-icon>
                      </div>
                    </template>
                  </v-text-field>
                </template>
                <v-date-picker v-model="dateTo" @input="menu3 = false"></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
        </div>
        <div>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            placeholder="Search employee here"
            single-line
            dense
            filled
            outlined
            hide-details
          ></v-text-field>
          <div class="chips mt-2">
            <v-chip
              class="ma-2 mb-1"
              close
              color="#FDECC8"
              text-color="black"
              label
              v-for="(item, index) in selectedEmployee"
              :key="index"
              @click:close="removeChips(index)"
            >
              {{ item.name }}
            </v-chip>
          </div>
          <div class="select-all d-flex flex-row justify-end">
            <v-checkbox
              v-model="selectAll"
              label="Select All"
            ></v-checkbox>
          </div>
          <div class="table mb-5" style="max-height: 300px; overflow-x:auto">
            <v-data-table
              :headers="headers"
              :items="employee"
              :search="search"
              :items-per-page="itemsPerPage"
              hide-default-header
              hide-default-footer
              class="elevation-1"
              @page-count="pageCount = $event"
            >
              <template v-slot:item.other="{item}">
                <v-checkbox v-model="selectedEmployee" :value="item" class="float-right"></v-checkbox>
              </template>
            </v-data-table>
          </div>
          <div class="holiday d-flex flex-row justify-space-between align-center px-4">
            <p class="app-title-small mb-0">Holiday</p>
            <v-switch v-model="holiday"></v-switch>
          </div>
          <div class="select-period">
            <div class="form-input">
              <p class="label-form">Select Shift Period</p>
              <v-select
                :items="shift"
                v-model="selectedShift"
                outlined
                dense
              ></v-select>
            </div>
          </div>
        </div>
        <v-card-actions class="pa-0">
          <v-btn block @click="dialog = false" class="pt-0 mt-1 mb-2" color="#FDB526" dark>
            Done
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import * as moment from 'moment'

export default {
  name: 'AppShiftSchedule',
  data () {
    return {
      dialog: false,
      dateFrom: null,
      dateTo: null,
      menu: false,
      menu3: false,
      selectAll: false,
      value: moment().format('YYYY-MM-DD'),
      clickedDate: null,
      clickedDay: null,
      holiday: false,
      mode: 'stack',
      type: 'month',
      colors: ['#3D87F4', '#F32626'],
      names: ['Working', 'Holiday'],
      selectedShift: [],
      shift: ['Shift Siang', 'Shift Malam', 'Shift Libur'],
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
      ],
      search: null,
      page: 1,
      pageCount: 0,
      itemsPerPage: 1000,
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        {
          text: '',
          value: 'other',
          align: 'center',
          sortable: false
        }
      ],
      selectedEmployee: [],
      employee: [
        {
          id: 1,
          name: 'Djamal Hamadi'
        },
        {
          id: 2,
          name: 'Steve Aoki'
        },
        {
          id: 3,
          name: 'Raja Maharaja'
        },
        {
          id: 4,
          name: 'Bagus Subagus'
        },
        {
          id: 5,
          name: 'Kintoki Murakami'
        },
        {
          id: 6,
          name: 'Conan Edogawa'
        }
      ]
    }
  },
  watch: {
    dateTo (val) {
      console.log(val)
    },
    selectAll (val) {
      if (val === false && this.selectedEmployee.length === this.employee.length) {
        this.selectedEmployee = []
      } else if (val === true) {
        this.employee.forEach(element => {
          if (!this.selectedEmployee.includes(element)) {
            this.selectedEmployee.push(element)
          }
        })
      }
    },
    selectedEmployee (val) {
      if (this.selectedEmployee.length === this.employee.length) {
        this.selectAll = true
      } else {
        this.selectAll = false
      }
    }
  },
  computed: {
    formatedDateTitle () {
      return moment(this.value).format('MMMM, YYYY')
    }
  },
  methods: {
    getEventColor (event) {
      return event.color
    },
    addShift ({ date }) {
      this.dialog = true
      this.dateFrom = moment(date).format('YYYY-MM-DD')
      this.dateTo = moment(date).format('YYYY-MM-DD')
    },
    removeChips (val) {
      if (val >= 0) this.selectedEmployee.splice(val, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.date-title {
  border-top: 1px solid #CCCCCC;
  border-bottom: 1px solid #CCCCCC;
}
.holiday {
  background-color: #F5F5F5;
  border-radius: 4px;
}
.table {
  border-top: 1px solid #CCCCCC;
  border-bottom: 1px solid #CCCCCC;
}
.table::-webkit-scrollbar {
  display: none;
}
.select-all {
  margin-bottom: -10px;
}
</style>
