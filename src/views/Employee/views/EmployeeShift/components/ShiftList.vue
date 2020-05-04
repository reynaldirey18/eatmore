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
    <div class="not-found d-flex flex-column">
      <img src="@/assets/img/employee_not_found.png" alt="Employee Not Found">
      <p class="text-bold mt-4">You Don’t Have Any Employee Shift</p>
    </div>
  </div>
</template>

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
