<template>
  <div>
    <v-row>
      <v-col cols="9">
        <h1 class="title">Add New Supplier</h1>
      </v-col>
      <v-col cols="auto">
        <v-btn
          @click.prevent="handleFormSubmit"
          class="text-center"
          text>
          <span class="text-capitalize text-blue">Cancel</span>
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          @click.prevent="handleFormSubmit"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Add New Suppelier</span>
        </v-btn>
      </v-col>
    </v-row>

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
