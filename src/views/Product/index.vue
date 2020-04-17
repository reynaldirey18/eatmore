<template>
  <div>
    <v-row>
      <v-col cols="7">
        <h1 class="title">Dashboard</h1>
      </v-col>
      <v-col cols="2" class="text-blue">
        <p class="pt-2 cursor-pointer">Download Excel Sample Format</p>
      </v-col>
      <v-col cols="1/2">
        <v-btn
          @click.prevent="handleFormSubmit"
          color="#333333" class="text-center"
          dark>
          <span class="text-capitalize">Upload Excel File</span>
        </v-btn>
      </v-col>
      <v-col cols="1/2">
        <v-btn
          @click.prevent="handleFormSubmit"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Add New Product</span>
        </v-btn>
      </v-col>
    </v-row>

    <v-card class="mt-5">a</v-card>
  </div>
</template>
