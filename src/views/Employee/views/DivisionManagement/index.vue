<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">Division Management</h1>
      <v-btn color="#FDB526" dark small width="160px" @click="dialog = true">Add New Division</v-btn>
    </div>
    <v-card class="mt-6 d-flex" outlined min-height="400px" v-if="division.length < 1">
      <div class="not-found d-flex flex-column">
        <img src="@/assets/img/employee_not_found.png" alt="Division Not Found">
        <p class="text-bold">You Don't Have Any Division</p>
        <p>Go make some division right now.</p>
      </div>
    </v-card>
    <v-card class="mt-6" outlined v-else>
      <div class="table">
        <v-data-table
          :headers="headers"
          :items="division"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.name="{item}">
            <p class="text-blood-sm mt-4">{{item.name}}</p>
          </template>
          <template v-slot:item.description="{item}">
            <p class="app-title-small mt-4">{{item.description}}</p>
          </template>
          <template v-slot:item.actions="{item}">
            <div class="d-flex flex-row justify-end">
              <v-btn text color="#3D87F4" small @click="goToEdit(item)" class="mr-6">Edit</v-btn>
              <v-btn text color="#F32626" small>Delete</v-btn>
            </div>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4" v-if="itemsPerPage >= division.length">
            Show {{division.length}} of {{division.length}} Division
          </div>
          <div class="ma-4" v-else>
            Show {{itemsPerPage}} of {{division.length}} Division
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
            Add New Division
            <v-spacer></v-spacer>
            <v-icon class="float-right"
            @click.prevent="dialog = false">mdi-close</v-icon>
          </v-card-title>
        </div>
        <div class="form-input">
          <p class="label-form">Division Name</p>
          <v-form ref="form">
            <v-text-field
              v-model="divisionName"
              placeholder="Eg. Cashier"
              outlined
              filled=""
            ></v-text-field>
          </v-form>
          <p class="label-form">Division Description</p>
          <v-form ref="form">
            <v-textarea
            outlined
            dense
            placeholder="Eg. There is error while taking notes"
            filled
            counter="255"
            ></v-textarea>
          </v-form>
        </div>
        <v-card-actions class="pa-0">
          <v-btn block @click="dialog = false" class="pt-0 mt-1 mb-2" color="#FDB526" dark>
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: 'Division Name', value: 'name', sortable: true, width: '35%' },
        { text: 'Description', value: 'description' },
        { text: '', align: 'right', value: 'actions', sortable: false }
      ],
      division: [
        {
          id: 1,
          name: 'Manager',
          description: 'Manage everything'
        },
        {
          id: 2,
          name: 'Cashier',
          description: 'Become "Bus" driver'
        },
        {
          id: 3,
          name: 'Cashier',
          description: 'Same as above'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
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
}
.title-modal {
  border-bottom: 1px solid rgb(212, 212, 212);
}
.table {
  width: 100%;
}
</style>
