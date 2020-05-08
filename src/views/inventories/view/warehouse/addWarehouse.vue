<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="title mr-0">Add New Warehouse</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          text>
          <span class="text-blue">Cancel</span>
        </v-btn>
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Save Warehouse</span>
        </v-btn>
      </div>
    </div>
    <v-card class="mt-5" style="height:auto;">
      <v-row>
        <v-col cols="12" style="max-height: 52px;">
          <div class="app-box">
            <p class="text-bold pl-3">Warehouse Information</p>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="px-3">
            <p class="app-title-small ma-0">Warehouse Name</p>
            <v-text-field
                placeholder="Eg. Warehouse 1"
                single-line
                dense
                filled
                outlined
            ></v-text-field>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="px-3">
            <p class="text-bold">Warehouse Information</p>
            <div>
              <p class="app-title-small ma-0">Email Address</p>
              <v-text-field
                  placeholder="Eg. warehouse@gmail.co.id"
                  single-line
                  dense
                  filled
                  outlined
              ></v-text-field>
            </div>
            <div>
              <v-row>
                <v-col cols="6">
                  <p class="app-title-small ma-0">Phone Number</p>
                  <v-text-field
                      placeholder="Eg. 0227219987"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <p class="app-title-small ma-0">Mobail Phone Number</p>
                  <v-text-field
                      placeholder="Eg. 08211687978"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
            <div>
              <p class="text-bold ma-0 pb-1">Warehouse Address</p>
              <v-row>
                <v-col cols="12" style="height: 80px">
                  <p class="app-title-small ma-0">Country</p>
                  <v-select
                  dense
                  :items="countryList"
                  outlined
                  ></v-select>
                </v-col>
                <v-col cols="4" style="height: 80px">
                  <p class="app-title-small ma-0">Province / District</p>
                  <v-text-field
                      label="Phone Number"
                      placeholder="Eg. Jawa Barat"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="4" style="height: 80px">
                  <p class="app-title-small ma-0">City</p>
                  <v-text-field
                      label="Mobile Phone Number"
                      placeholder="Eg. Bandung"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="4" style="height: 80px">
                  <p class="app-title-small ma-0">Zip Code</p>
                  <v-text-field
                      label="Mobile Phone Number"
                      placeholder="Eg. 14045"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" style="height: 80px">
                  <p class="app-title-small ma-0">Address</p>
                  <v-text-field
                      label="Address"
                      placeholder="Eg. jl cicendo no 1 bandung jawa barat indonesia"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
