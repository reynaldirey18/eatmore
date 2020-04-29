<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">Division Management</h1>
      <v-btn color="#FDB526" dark small width="160px" @click="dialog = true">Add New Division</v-btn>
    </div>
    <v-card class="pa-6 mt-6 d-flex" outlined min-height="400px">
      <div class="not-found d-flex flex-column" v-if="division.length < 1">
        <img src="@/assets/img/employee_not_found.png" alt="Division Not Found">
        <p class="text-bold">You Don't Have Any Division</p>
        <p>Go make some division right now.</p>
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
            counter
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
      division: [],
      dialog: true
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
</style>
