<template>
  <div class="px-4">
    <div class="mt-4 mb-5 d-flex flex-row justify-space-between align-center">
      <h1 class="app-subtitle">Shift Period</h1>
      <v-btn color="#FDB526" dark small @click="dialog = true">Add Period</v-btn>
    </div>
    <div class="table mt-6">
      <v-data-table
        :headers="headers"
        :items="shiftPeriod"
        :search="search"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
      >
        <template v-slot:item.actions="{item}">
          <div class="d-flex flex-row align-center justify-end">
            <v-btn text color="#3D87F4" small @click="goToEdit(item)" class="mr-1">Quick Edit</v-btn>
            <v-btn icon color="#CCCCCC" @click="goToEdit(item)">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
      <div class="d-flex justify-space-between mt-3" v-if="shiftPeriod.length > 0">
        <div class="ma-4" v-if="itemsPerPage >= shiftPeriod.length">
          Show {{shiftPeriod.length}} of {{shiftPeriod.length}} Employee
        </div>
        <div class="ma-4" v-else>
          Show {{itemsPerPage}} of {{shiftPeriod.length}} Employee
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
    <div class="not-found d-flex flex-column" v-if="shiftPeriod.length < 1">
      <img src="@/assets/img/employee_not_found.png" alt="Shift Period Not Found">
      <p class="text-bold mt-4">You Don’t Have Shift Period, Sorry</p>
    </div>
    <!-- modal -->
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card class="pa-4">
        <div class="title-modal">
          <v-card-title class="text-blood pl-0 pt-1 pr-0 pb-3">
            Add New Shift Period
            <v-spacer></v-spacer>
            <v-icon class="float-right"
            @click.prevent="dialog = false">mdi-close</v-icon>
          </v-card-title>
        </div>
        <div class="form-input">
          <p class="label-form">Shift Name</p>
          <v-form ref="form">
            <v-text-field
              v-model="name"
              placeholder="Eg. Night Shift"
              outlined
              dense
            >
            </v-text-field>
          </v-form>
          <p class="label-form">Shift Period</p>
          <v-dialog
            ref="dialog"
            v-model="startTime.visible"
            :return-value.sync="startTime.datetime"
            max-width="400"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="startTime.datetime"
                outlined
                dense
                readonly
                v-on="on"
              >
              <template v-slot:prepend-inner>
                <div class="icon-input">
                  <v-icon size="20" color="black">mdi-calendar-month</v-icon>
                </div>
              </template>
              </v-text-field>
            </template>
            <v-btn text class="center">Set Period</v-btn>
          </v-dialog>
        </div>
        <v-card-actions class="pa-0">
          <v-btn block @click="dialog = false" class="pt-0 mt-1" color="#FDB526" dark>
            Add Period
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'AppShiftPeriod',
  data () {
    return {
      dialog: false,
      startTime: {
        date: null,
        time: null,
        datetime: '',
        showTime: false,
        visible: false
      },
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: 'Shift Name', value: 'name' },
        { text: 'Shift Period', value: 'division' },
        { text: '', align: 'right', value: 'actions', sortable: false }
      ],
      shiftPeriod: [
        {
          id: 1,
          name: 'Shift Siang',
          division: '08:00 - 15:00'
        },
        {
          id: 2,
          name: 'Shift Malam',
          division: '15:00 - 21:00'
        },
        {
          id: 3,
          name: 'Shift Liburan',
          division: '06:00 - 18:00'
        },
        {
          id: 4,
          name: 'Shift Minggu',
          division: '08:00 - 15:00'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  margin: auto;
  width: 100%;
  padding: 80px 0;
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
