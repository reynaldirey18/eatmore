<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
        <h1 class="title">Edit Supplier</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          class="text-center"
          text>
          <span class="text-capitalize text-red">Delete</span>
        </v-btn>
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          text>
          <span class="text-capitalize text-blue">Discard Changes</span>
        </v-btn>
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Save Changes</span>
        </v-btn>
      </div>
    </div>

    <v-card style="min-height: 820px;">
      <v-row>
        <v-col cols="12" style="max-height: 52px;">
          <div class="app-box">
            <p class="text-bold pl-3">Supplier Information</p>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="px-3">
            <div>
              <p class="app-title-small ma-0">Supplier Name</p>
              <v-text-field
                  label="Supplier Name"
                  placeholder="Eg. Tandoori Chicken"
                  single-line
                  dense
                  filled
                  outlined
              ></v-text-field>
            </div>
            <div>
              <v-row>
                <v-col cols="6">
                  <p class="app-title-small ma-0">Supplier Category</p>
                  <v-select
                  dense
                  :items="suplierCatList"
                  outlined
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <p class="app-title-small ma-0">Supplier ID</p>
                  <v-text-field
                      label="Supplier ID"
                      placeholder="Eg. Tandoori Chicken"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
            <div>
              <p class="text-bold ma-0 pb-1">Supplier Contact</p>
              <v-row>
                <v-col cols="12" style="height: 80px">
                  <p class="app-title-small ma-0">Email Address</p>
                  <v-text-field
                      label="Email Address"
                      placeholder="Eg. udin@gmail.co"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <p class="app-title-small ma-0">Phone Number</p>
                  <v-text-field
                      label="Phone Number"
                      placeholder="Eg. 022777567"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <p class="app-title-small ma-0">Mobile Phone Number</p>
                  <v-text-field
                      label="Mobile Phone Number"
                      placeholder="Eg. 08211446899"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
            <div>
              <p class="text-bold ma-0 pb-1">Supplier Address</p>
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
<script>
export default {
  name: 'addSupplier',
  data () {
    return {
      suplierCatList: [
        {
          text: 'Meet',
          value: 1
        }
      ],
      countryList: [
        {
          text: 'Indonesia',
          value: 1
        }
      ]
    }
  }
}
</script>
