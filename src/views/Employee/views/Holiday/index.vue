<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between align-center">
      <h1 class="app-title">Holidays</h1>
      <v-btn color="#FDB526" dark small width="160px" @click="dialog = true">Add Holiday</v-btn>
    </div>
    <v-card class="pa-6 mt-6 d-flex" outlined min-height="400px" v-if="holidays.length < 1">
      <div class="not-found d-flex flex-column">
        <img src="@/assets/img/illustration1.png" alt="Holiday Not Found">
        <p class="text-bold mt-2">Don’t Have Any Holiday Yet!</p>
        <p class="mt-2">Add some holiday now to make your employee keep productive</p>
      </div>
    </v-card>
    <v-card class="mt-6" outlined v-else>
      <div class="table">
        <v-data-table
          :headers="headers"
          :items="holidays"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.actions="{item}">
            <div class="d-flex flex-row align-center justify-end">
              <v-btn text color="#3D87F4" small class="mr-1" @click="edit(item)">Edit</v-btn>
              <v-btn text color="#F32626">Delete</v-btn>
            </div>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4" v-if="itemsPerPage >= holidays.length">
            Show {{holidays.length}} of {{holidays.length}} Holiday
          </div>
          <div class="ma-4" v-else>
            Show {{itemsPerPage}} of {{holidays.length}} Holiday
          </div>
          <div>
          <v-pagination
            v-model="page"
            color="#FDB526"
            :length="pageCount">
          </v-pagination>
          </div>
        </div>
      </div>
    </v-card>
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card class="pa-4">
        <div class="title-modal">
          <v-card-title class="text-blood pl-0 pt-1 pr-0 pb-3">
            Add Holiday
            <v-spacer></v-spacer>
            <v-icon class="float-right"
            @click.prevent="dialog = false">mdi-close</v-icon>
          </v-card-title>
        </div>
        <div class="form-input">
          <p class="label-form">Holiday Name</p>
          <v-form ref="form">
            <v-text-field
              v-model="holidayName"
              placeholder="Eg. New Year"
              outlined
              dense
              filled=""
            ></v-text-field>
          </v-form>
          <p class="label-form">Holiday Date</p>
          <v-menu
            v-model="show1"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="holidayDate"
                readonly
                outlined
                dense
                filled
                v-on="on"
              >
                <template v-slot:prepend-inner>
                  <div class="icon-input">
                    <v-icon size="20" color="black">mdi-calendar-month</v-icon>
                  </div>
                </template>
              </v-text-field>
            </template>
            <v-date-picker v-model="holidayDate" @input="show1 = false"></v-date-picker>
          </v-menu>
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
  data () {
    return {
      dialog: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      show1: false,
      headers: [
        { text: 'Holiday Name', value: 'name' },
        { text: 'Holiday Date', value: 'date' },
        { text: '', align: 'end', value: 'actions', sortable: false }
      ],
      holidays: [
        {
          id: 1,
          number: 1,
          name: 'New Year',
          date: 'Jan 1, 2020'
        },
        {
          id: 2,
          number: 2,
          name: 'May Day',
          date: 'May 1, 2020'
        },
        {
          id: 3,
          number: 3,
          name: 'Good Day',
          date: 'June 9, 2020'
        }
      ],
      holidayName: null,
      holidayDate: null
    }
  },
  watch: {
    holidayDate (val) {
      this.holidayDate = moment(val).format('LL')
    }
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  margin: auto;
  width: 100%;
  img {
    margin: auto;
    width: 30%;
  }
  p {
    margin: auto;
    color: black;
  }
}
</style>
