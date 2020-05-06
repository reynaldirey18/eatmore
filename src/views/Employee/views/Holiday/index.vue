<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between align-center">
      <h1 class="app-title">Holidays</h1>
      <v-btn color="#FDB526" dark small width="160px" @click="goToAdd">Add Holiday</v-btn>
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
            Show {{holidays.length}} of {{holidays.length}} Employee
          </div>
          <div class="ma-4" v-else>
            Show {{itemsPerPage}} of {{holidays.length}} Employee
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
  </div>
</template>

<script>
export default {
  data () {
    return {
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
      ]
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
