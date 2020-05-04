<template>
  <div class="shift-list px-4">
    <div class="mt-4 mb-5 d-flex flex-row justify-space-between align-center">
      <h1 class="app-subtitle">Employee Shift</h1>
      <v-btn color="#FDB526" dark small>Add Shift</v-btn>
    </div>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      class="mt-4"
      placeholder="Search Employee"
      single-line
      dense
      filled
      outlined
      hide-details
    ></v-text-field>
    <div class="not-found d-flex flex-column" v-if="shiftList.length < 1">
      <img src="@/assets/img/employee_not_found.png" alt="Employee Not Found">
      <p class="text-bold mt-4">You Don’t Have Any Employee Shift</p>
    </div>
    <div class="table mt-6" v-else>
      <v-data-table
        :headers="headers"
        :items="shiftList"
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
      <div class="d-flex justify-space-between mt-3">
        <div class="ma-4" v-if="itemsPerPage >= shiftList.length">
          Show {{shiftList.length}} of {{shiftList.length}} Employee
        </div>
        <div class="ma-4" v-else>
          Show {{itemsPerPage}} of {{shiftList.length}} Employee
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
  </div>
</template>

<script>
export default {
  name: 'AppShiftList',
  data () {
    return {
      search: null,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      show1: false,
      headers: [
        { text: 'Employee Name', value: 'name' },
        { text: 'Division', value: 'division' },
        { text: 'Shift', value: 'shift' },
        { text: 'Outlet', value: 'outlet' },
        { text: '', align: 'right', value: 'actions', sortable: false }
      ],
      shiftList: [
        {
          id: 1,
          name: 'Theresa Bell',
          division: 'Cashier',
          shift: '08:00 - 12:00',
          outlet: 'Outlet 1'
        },
        {
          id: 2,
          name: 'Steve Rogers',
          division: 'Cashier',
          shift: '08:00 - 12:00',
          outlet: 'Outlet 1'
        },
        {
          id: 3,
          name: 'Camelia',
          division: 'Cashier',
          shift: '08:00 - 12:00',
          outlet: 'Outlet 1'
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
